import { CartContext } from "../../Context/CartContext"
import { useContext, useState } from "react"
import Form from "../Form/Form"
import Footer from "../Footer/Footer"
import { db } from '../../services/firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const [userData, SetUserData] = useState("")
    const { cart, total, clearCart, mensaje} = useContext(CartContext)
    const navigate = useNavigate()
   
   
    const datos =(mensaje) => { 
        SetUserData(mensaje)
    console.log(userData)
    }
   

    const handleConfirm = async () => {
        try{ 
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total: total
                
            }
            console.log(objOrder)
            const ids = cart.map(prod => prod.id)

            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedFromFirestore = await getDocs(productRef)

            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.count

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)

            } else {
                alert('Hay productos que no tienen stock disponible')
            } 
        } catch (error) {
            alert('Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {
        return <h1>Se esta generando su orden, por favor espere...</h1>
    }
if ( orderId){
    return(
<h2 style={{textAlign:"center"}}>El id de su orden es: {orderId}</h2>)
}
else{
    return (

        <div>
            <h1 style={{textAlign: "center"}}>Checkout</h1>
            <div>
                <Form  cart={cart} datos={datos} handleConfirm={handleConfirm} />
                 
            </div>
            <Footer/>
        </div>

    )
}

    

}
export default Checkout
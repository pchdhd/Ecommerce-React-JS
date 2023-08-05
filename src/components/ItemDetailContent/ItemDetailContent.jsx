import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import Footer from "../Footer/Footer"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    useEffect(() => {
        const productRef = doc(db,"data", itemId)
       getDoc(productRef)
       .then(snapshot =>{
        const data = snapshot.data()
        const productAdapted = {id: snapshot.id, ...data}
        setProduct(productAdapted)
       })
       .catch(error =>{
        console.log(error)
       })
       .finally(setLoading(false))
    }, [itemId])

    if (loading) {
        return <h2 >Cargando por favor espere...</h2>
    }
    console.log(product)
    return (
        <div>
            <div className="itemdetail-container__back"></div>
            <ItemDetail {...product} />
            <Footer/>
        </div>
    )


}

export default ItemDetailContainer


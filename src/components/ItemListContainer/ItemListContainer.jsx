import { useParams } from "react-router-dom";
import { ProductList } from "../ProductList";
import { useState, useEffect } from "react";
import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig"
import Footer from "../Footer/Footer";

const ItemListContainer = ({greeting}) => {
const [productsState, setProductsState] = useState([])
const {categoryId} = useParams()
const [loading , setLoading] = useState(true)
useEffect(() => {
    setLoading(true)
 const productRef = categoryId 
    ? query(collection(db, "data"), where("category", "==", categoryId))
    : collection(db, "data")
    getDocs(productRef)
    
    .then(snapshot =>{
        const productsAdapted = snapshot.docs.map(doc =>{
const data = doc.data()

            return {id: doc.id, ...data}
        })
        setProductsState(productsAdapted)
        
    })
    .catch(error =>{
        console.log(error)
    })
.finally(setLoading(false))
}, [categoryId])


if(loading === true) {
    return <h4>Cargando...</h4>
}

return (
    <div> 
    <span className="listado-productos">{greeting}</span>
    <ProductList products={productsState}/>
    <Footer/>
    </div>

)}

    


export default ItemListContainer;
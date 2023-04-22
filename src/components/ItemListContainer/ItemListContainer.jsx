import { useParams } from "react-router-dom";
import { ProductList } from "../ProductList";
import { getProducts, getProductsByCategory } from "../../data";
import { useState, useEffect } from "react";
const ItemListContainer = ({greeting}) => {
const [productsState, setProductsState] = useState([])
const {categoryId} = useParams()
const [loading , setLoading] = useState(true)
useEffect(() => {
    setLoading(true)
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId)
        .then(data => {
            setProductsState(data)
            console.log(data)

        })
        .catch(error => {
            console.log(error)
        })
        .finally(setLoading(false))
    
}, [categoryId])


if(loading) {
    return <h4>Cargando...</h4>
}

return (
    <div> 
    <span>{greeting}</span>
    <ProductList products={productsState}/>
    </div>

)}

    


export default ItemListContainer;
import { getProductsById } from "../../data"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    useEffect(() => {
        getProductsById(itemId)
            .then(product => {
                setProduct(product) 
                return product
            })

            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    if (loading) {
        return <h2 >Cargando por favor espere...</h2>
    }
    const [g1] = product
    return (
        <div>
            <div className="itemdetail-container__back"></div>
            <ItemDetail {...g1} />
        </div>
    )


}

export default ItemDetailContainer


import { NavLink } from "react-router-dom"
import Count from "../Count/Count";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
const ItemDetail = ({nombre, img, precio, descripcion, stock, id,}) => {
    const [count, setCount] = useState(0)
    const { addItem } = useContext(CartContext)

const handleOnAdd = (count) =>{
const productToAdd= {
    nombre, precio, img, count, id, stock  
}
setCount(count)
        addItem(productToAdd)
}

    return ( 
        <div className="itemdetail">
            <NavLink className={"itemdetail__navlink"} to={"../../"}></NavLink>
        <div className="itemdetail-container"> 
            <div className="itemdetail-h2"><h2>{nombre}</h2></div>
            <div className="div-img-container"><img src={img} alt={nombre} />
            <p> {descripcion} </p></div>
            <h3>Precio: ${precio}</h3> 
            <p style={{textAlign:"center", margin:"0px"}}>stock: {stock} </p>   
            <Count onAdd={handleOnAdd} stock ={stock} /> 
        </div>
        </div>
    )
}

export default ItemDetail

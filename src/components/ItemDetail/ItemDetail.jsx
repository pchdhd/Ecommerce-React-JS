import { NavLink } from "react-router-dom"
import Count from "../Count/Count";
import { useContext } from "react";
import { CartContext } from "../../App";
const ItemDetail = ({nombre, img, precio, descripcion, stock, id, count}) => {
const {addItem} = useContext(CartContext)

const handleOnAdd = (count) =>{
const productToAdd= {
    nombre, precio, img, count, id
    
}
console.log(productToAdd)
}

    return ( 
        <div className="itemdetail">
            <NavLink className={"itemdetail__navlink"} to={"../../"}></NavLink>
        <div className="itemdetail-container"> 
            <div className="itemdetail-h2"><h2>{nombre}</h2></div>
            <div className="div-img-container"><img src={img} alt={nombre} />
            <p> {descripcion} </p></div>
            <h3>Precio: ${precio}</h3>    
            <button className="Button" onClick={handleOnAdd}>  Agregar al carrito</button>
            <Count onAdd={handleOnAdd} stock ={stock} /> 
        </div>
        </div>
    )
}

export default ItemDetail
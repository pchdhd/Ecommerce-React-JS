import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
const AbrirModal = ({onAbrir, cerrar }) =>{
   const {cart} = useContext(CartContext)
const cerrarModal = () =>{
   cerrar(false);
}

    return  <div className="abrir-modal" > <div className="cerrar-modal"  onClick={cerrarModal}>X</div>
    <div><NavLink className={"nav-link-2"} to="./" onClick={cerrarModal}> <h2></h2>Hogar</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="/category/Cocinas" onClick={cerrarModal}>Cocinas</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="/category/Heladeras" onClick={cerrarModal}>Heladeras</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="/category/Licuadora" onClick={cerrarModal}>Licuadoras</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="./cart" onClick={cerrarModal}><span style={{backgroundColor:"red", borderRadius:"20px", paddingLeft:"9px", paddingRight:"3px", color:"white"}}>{cart.length} </span> Carrito</NavLink></div>
    <div className="info"> <p>Copyright &copy; 2023 Todos los derechos reservados por
            SuperDescuento</p></div>
</div>
    
}
export default AbrirModal
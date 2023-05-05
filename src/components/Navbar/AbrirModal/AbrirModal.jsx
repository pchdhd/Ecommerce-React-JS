import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
const AbrirModal = () =>{
    const [abrirModal, SetAbrirModal] = useState(false);

 useEffect(() => {
    if(abrirModal == true){

        return
    }

 },[abrirModal])   

    return  <div className="abrir-modal">
    <div><NavLink className={"nav-link-2"} to="./"> <h2></h2>Hogar</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="/category/Cocinas">Cocinas</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="/category/Heladeras">Heladeras</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="/category/Licuadora">Licuadoras</NavLink></div>
    <div><NavLink className={"nav-link-2"} to="./">Carrito</NavLink></div>
    <div className="info"> <p>Copyright &copy; 2023 Todos los derechos reservados por
            SuperDescuento</p></div>
</div>
    
}
export default AbrirModal
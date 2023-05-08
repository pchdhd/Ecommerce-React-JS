import Cartwidget from "../Cartwidget/Cartwidget";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import AbrirModal from "./AbrirModal/AbrirModal";
import { useState } from "react";

 const Navbar = () => {
    const [abrirModal, SetAbrirModal] = useState(false);
const cerrar =  (mensaje) => {
SetAbrirModal(mensaje)
}
    
    if(abrirModal === false){
        return(
        <header>
            <NavLink className={"nav-link"} to="./">SuperDescuento</NavLink>
            <Button/>            
            <Cartwidget/> 
            <div className="abrir-modal-2" onClick={() => {SetAbrirModal(true)}} style={{width:"30px", height:"30px", backgroundColor:"red", marginLeft:"25%"}}></div>       
        </header>
)    }
    return (
        <header>
            <NavLink className={"nav-link"} to="./">SuperDescuento</NavLink>
            <Button/>
            <AbrirModal onModal={abrirModal}  cerrar={cerrar}  />            
            <Cartwidget/>        
        </header>
    );
};
export default Navbar
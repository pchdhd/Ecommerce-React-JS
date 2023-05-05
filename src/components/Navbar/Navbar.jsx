import Cartwidget from "../Cartwidget/Cartwidget";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import AbrirModal from "./AbrirModal/AbrirModal";

 const Navbar = () => {

    return (
        <header>
            <NavLink className={"nav-link"} to="./">SuperDescuento</NavLink>
            <Button/>
            <AbrirModal/>            
            <Cartwidget/>        
        </header>
    );
};
export default Navbar
import Cartwidget from "../Cartwidget/Cartwidget";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
 const Navbar = () => {

    return (
        <header>
            <NavLink className={"nav-link"} to="./">SuperDescuento</NavLink>
            <Button/>
            <Cartwidget/>        
        </header>
    );
};
export default Navbar
import { useContext } from "react"
import carrito from "../../imagenes/carritoCompras.png"
import { useNavigate } from "react-router-dom"
import {CartContext} from "../../Context/CartContext"

const Cartwidget = () => {
    const { totalQuantity, total } = useContext(CartContext)
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <div >
            
            <div className='container-icon' onClick={() =>navigate("/Cart")}>
            <span className="container-icon__span"> {cart.length} </span>
            
                <img src={carrito} alt="" width={'34px'} height={'34px'} />
                
            </div>
        </div>
    )


}
export default Cartwidget
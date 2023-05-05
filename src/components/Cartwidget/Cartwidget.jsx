import { useContext } from "react"
import carrito from "../../imagenes/carritoCompras.png"
import { useNavigate } from "react-router-dom"
import {CartContext} from "../../Context/CartContext"

const Cartwidget = () => {
    const { totalQuantity, total } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div >
            
            <div className='container-icon' onClick={() =>navigate("/Cart")}>
            <span> </span>
                <img src={carrito} alt="" width={'34px'} height={'34px'} />
                {totalQuantity} total ${total}
            </div>
        </div>
    )


}
export default Cartwidget
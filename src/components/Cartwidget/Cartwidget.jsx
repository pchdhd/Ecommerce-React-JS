import carrito from "../../imagenes/carritoCompras.png"
import { NavLink } from "react-router-dom"

const Cartwidget = () => {

    return (
        <div>
            <div className='container-icon'>
                <span>0</span>
                <img src={carrito} alt="" width={'40px'} height={'40px'} />
            </div>
        </div>
    )


}
export default Cartwidget
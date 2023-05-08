import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import Form from "../Form/Form"
import Footer from "../Footer/Footer"
const Checkout = () => {
    const { cart } = useContext(CartContext)
    const confirmarDatos = (cart) => {
        const objConfirm = {
            userData: { },
            compras : [cart],
            total : 0
        }

    }

    return (

        <div>
            <h1 style={{ textAlign: "center" }}>Checkout</h1>
            <div>
                <Form onConfirm={confirmarDatos()} cart={cart} />
            </div>
            <Footer/>
        </div>

    )

}
export default Checkout
import { useContext} from 'react'
import { CartContext, removeItem } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Cart = () => {
    const { cart, removeItem, total } = useContext(CartContext)
 

    if (cart == 0) {

        return (<div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}><h2>No hay productos en el carrito.</h2></div>

        )
    }




    return (
        <div className='cart-style'>
            <h2 style={{ textAlign: "center", fontFamily: "serif", fontSize: "37px" }} >Carrito de compras</h2>
            <div className='cart-style__children'>
                {
                    cart.map(prod => {
                        return (
                            <div className='items-carrito' key={prod.id}>
                                <div className='items-carrito__nombre'><h2 style={{ fontFamily: "inherit" }}>Nombre: <span style={{ fontFamily: "serif", marginLeft: "0px", fontSize: "23px" }}>{prod.nombre}</span></h2> </div>
                                <div><p>Precio: ${prod.precio}</p></div>
                                <div><img src={prod.img} alt={prod.nombre} /></div>
                                <div><h4>Cantidad: {prod.count} </h4></div>
                                <button className='Button' onClick={() => {removeItem(prod.id)}}>eliminar</button>
                            </div>
                        )
                    })
                }
                <h4 style={{textAlign:"center"}}>{total}</h4>
                <Link className='cart-style__children__link' to={"/checkout"} >Terminar la compra</Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
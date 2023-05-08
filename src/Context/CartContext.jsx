import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        } else {
        console.log('El producto ya esta agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdated =  cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
    }

    const total = getTotal()
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, clearCart, total}}>
         { children }
        </CartContext.Provider>
    )
}
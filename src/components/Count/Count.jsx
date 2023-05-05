import { useState } from "react"
const Count = ({ stock=0 ,initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)
    

    function sumaCount() {
        if (count >= 1 && count < stock) {
            setCount(count + 1)
            console.log(count)
        }
        return setCount
    }
    function restaCount() {
        if (count > 1) {
            setCount(count - 1)
            console.log(count)
        }
        return setCount
    }

    return (<div className="div-count">  <h4> {count} </h4><button onClick={restaCount}>-</button><button onClick={sumaCount}>+</button>
    <button className="Button" onClick={() => {
                    setCount(initial)
                    onAdd(count)
                }}>Agregar al carrito</button>
    
    </div>
    
    )
}
export default Count
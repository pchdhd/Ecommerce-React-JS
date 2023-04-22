import { useState } from "react"
const Count = ({ stock  }) => {
    const [count, setCount] = useState(1)
    

    function sumaCount() {
        if (count >= 1 && count <= stock) {
            setCount(count + 1)
            console.log(count)
        }
    }
    function restaCount() {
        if (count > 1) {
            setCount(count - 1)
            console.log(count)
        }
    }

    return <div className="div-count">  <h4> {count} </h4><button onClick={restaCount}>-</button><button onClick={sumaCount}>+</button>
    </div>
}
export default Count
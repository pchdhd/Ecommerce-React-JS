import { CartContext } from "../../Context/CartContext"
const Form = ({cart, onConfirm,total }) => {
 console.log(total) 


    return (
        <div style={{ display: "grid", justifyContent: "center" }}>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required />

            <label for="email">Direccion</label>
            <input type="direccion" name="direccion" id="direccion" placeholder="Direccion" required />

            <label for="email">Telefono</label>
            <input type="telefono" name="telefono" id="telefono" placeholder="Telefono" required />
            <label for="pais">País</label>
            <div> <select name="" id="">
                <option value="Uruguay">Uruguay</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
            </select>

            </div>
            <p>precio total {total} </p>
            <div>

            </div>
            <button >Generar orden de compra</button>
        </div>
    )
}
export default Form

import { useState } from "react"
import { CartContext } from "../../Context/CartContext"
const Form = ({ cart, onConfirm, total, datos, handleConfirm }) => {

    const [userEmail, SetUserEmail] = useState("")
    const [userDireccion, SetUserDireccion] = useState("")
    const [userTelefono, SetUserTelefono] = useState("")

    const handleData = () => {
        if(userEmail != "" && userDireccion!= "" && userTelefono != ""){
            datos({useremail: userEmail, userdireccion: userDireccion,userTelefono: userTelefono})
            handleConfirm()
        }
        else{
            alert("Agrega todos tus datos para continuar.")
        }
        
    }

    return (
        <div style={{ display: "grid", justifyContent: "center" }}>
            <form onSubmit={handleData} style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={userEmail} onChange={(e) => SetUserEmail(e.target.value)} placeholder="Email" required />

            <label htmlFor="direccion">Direccion</label>
            <input type="direccion" name="direccion" value={userDireccion} onChange={(e) => SetUserDireccion(e.target.value)} id="direccion" placeholder="Direccion" required />

            <label htmlFor="telefono">Telefono</label>
            <input type="telefono" name="telefono" value={userTelefono} onChange={(e) => SetUserTelefono(e.target.value)} id="telefono" placeholder="Telefono" required />
            <label htmlFor="pais">País</label>
            <div> <select name="" id="">
                <option value="Uruguay">Uruguay</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
            </select>
            </div>
            <button type="submit" onClick={ () => {handleData()} }  style={{color:"white", backgroundColor:"black", marginTop:"30px", marginBottom:"20px"}}>Generar Orden  </button>
            </form>
        </div>
    )
}
export default Form

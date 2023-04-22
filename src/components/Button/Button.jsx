import { useState } from "react"
import { NavLink } from "react-router-dom"
 const Button = () =>{
    return(
    <div className="div-button">
    <NavLink to='/category/Cocinas' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Cocinas</NavLink>
    <NavLink to='/category/Heladeras'className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Heladeras</NavLink>
    <NavLink to='/category/Licuadora' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Licuadoras</NavLink>
      </div>
    )
 }
 export default Button
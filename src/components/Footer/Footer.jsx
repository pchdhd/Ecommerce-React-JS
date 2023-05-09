const Footer = () =>{

    return(
   
    <footer>
         <hr />
        <div className="pie-pagina m-0">
            <div className="grupo-1">
                
                <div className="box">
                    <h2 style={{color:"green"}}>SOBRE NOSOTROS</h2>
                    <p>Somos una empresa de gran trayectoria y experiencia en la venta de articulos Comestibles, de Limpieza y Electrodomesticos.</p>
                    <p>Bv. José Batlle y Ordóñez 3207, Montevideo.</p>

                </div>
                <div className="box">
                    <h2 style={{color:"red", fontWeight:"800"}}>SIGUENOS</h2>
                    <div class="red-social">
                        <div className="facebook"/>
                        <div className="instagram"/>
                        <div className="twitter" />
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <p style={{textAlign:"center"}}>&copy; <b> 2023</b>  <span style={{marginLeft:"10px",fontFamily:"serif"}}>Superdescuento</span> - Todos los Derechos Reservados </p>
        </div>
    </footer>)
}
export default Footer


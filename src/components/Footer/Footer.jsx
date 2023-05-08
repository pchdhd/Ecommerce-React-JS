const Footer = () =>{

    return(<footer>
        <div class="pie-pagina m-0">
            <div class="grupo-1">
                <div class="box">
                    <figure>
                        <div style={{fontSize:"50px"}}>🛒</div>
                    </figure>
                </div>
                <div class="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos una empresa de gran trayectoria y experiencia en la venta de articulos Comestibles, de Limpieza y Electrodomesticos.</p>
                    <p>Bv. José Batlle y Ordóñez 3207, Montevideo</p>

                </div>
                <div class="box">
                    <h2>SIGUENOS</h2>
                    <div class="red-social">
                        <div className="facebook"/>
                        <div className="instagram"/>
                        <div className="twitter" />
                    </div>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <p> &copy; 2022 <span class="grupo-2__moncar">Moncar</span> - Todos los Derechos Reservados </p>
        </div>
    </footer>)
}
export default Footer


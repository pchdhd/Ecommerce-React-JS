import { data } from '../data';
import { Link } from "react-router-dom"

export const ProductList = ({products}) => {

	return (
		<div className='container-items' >
			{products.map(product => (
                
				<div className='item' key={product.id}>
                   <div className='div-h2'> <h2>{product.nombre}</h2></div>
					<figure>
						<img src={product.img} alt={product.nombre} />
					</figure>
					<div className='info-product'>
						<h3>Precio Anterior: ${product.precioAnterior} </h3>
						<h2 className='precio'>Nuevo Precio: ${product.precio}</h2>
                        <div className='div-link'>
						<Link className="link-detalles" to={`/item/${product.id}`}>Ver los detalles</Link>
                        </div>
					</div>
				</div>
			))}
		</div>
	);
};
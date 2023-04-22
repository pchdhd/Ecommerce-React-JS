export const data = [
	{
        id : "heladera-Whirlpool",
        nombre : "Heladera Whirlpool",
        precioAnterior : 74530,
        precio : 72700,
        stock : 4,
        category: "Heladeras",
        descripcion:"CARACTERÍSTICAS Marca Whirlpool Modelo WRO80CKDWA Tipo de enfriamiento frío seco Inverter No Capacidad refrigerador 374 lts Capacidad freezer 167 lts Capacidad bruta 492 lts Eficiencia energética B Alto 185.7 cm Ancho 82.9 cm  Profundidad 74.7 cm Incluye Ice Maker y Enfriador de copas. Iluminación LED  Información adicional Temperatura automática. Mayor espacio. Anticorrosión y anti huellas. Hielo más rápido y fácil Garantía 12 meses",
        img:"https://i.postimg.cc/W12thqd2/D-NQ-NP-2-X-991274-MLU48870302400-012022-F.webp"
   },
   {
       id: "Heladera-Samsung",
       nombre: "Heladera Samsung 305",
       precioAnterior: 28660,
       precio: 27530,
       stock : 6,
       descripcion:'Disfrutá de tus alimentos frescos y almacenalos de manera práctica y cómoda en la heladera Samsung, la protagonista de la cocina. Comodidad para tu casa Su sistema no frost evita la generación de escarcha y te va a permitir conservar el sabor y las propiedades nutritivas de los productos. Frescura en tus alimentos Los 4 niveles de temperatura ayudarán a la conservación de acuerdo a tus necesidades y preferencias. Cada vez que abrís la puerta se cuela aire caliente; por eso, al tener control de temperatura vas a poder regular los grados para que tus productos se mantengan siempre frescos.',
       category: "Heladeras",
       img: "https://i.postimg.cc/L8N5f4Pj/h2.webp"
   },
   {
       id: "Cocina-Punktal-PK-268BK",
       nombre: "Cocina Punktal PK-268BK",
       precioAnterior: 4760,
       precio: 4500,
       stock : 7,
       descripcion:'Lo que tienes que saber de este producto -Cocina de pie. - Tipo de alimentación: gas. - Capacidad de 50L. - Posee 4 hornallas. -El acabado de la mesa es de acero inoxidable.  Con termostato. - Dimensiones: 48cm de ancho, 88.6cm de alto y 58.5cm de profundidad.',
       category: "Cocinas",
       img: "https://i.postimg.cc/RFhwdkq9/D-NQ-NP-880635-MLA52231599517-112022-O.webp"
   },
   {
       id: "Cocina-James-C-25",
       nombre: "Cocina James C-25",
       precioAnterior: 24200, 
       precio: 22500,
       stock : 3,
       descripcion:"Lo que tienes que saber de este producto Cocina de pie. -Tipo de alimentación: gas/eléctrica. -Con encendido electrónico para mayor comodidad. -Tiene temporizador. -Posee 4 hornallas. -El acabado de la mesa es de acero inoxidable. -Rejillas de hierro fundido. -Con termostato. -Display digital. -Dimensiones: 600 mm de ancho, 860 mm de alto y 600 mm de profundidad",
       category: "Cocinas",
       img: "https://i.postimg.cc/B6jMbLTx/D-NQ-NP-769688-MLA52219345333-102022-O.webp"
   },
   {
       id: "Licuadora-Enxuta",
       nombre: "Licuadora Enxuta 1.5L",
       precioAnterior: 1521,
       precio: 1350,
       stock : 10,
       category: "Licuadora",
       descripcion:"Lo que tienes que saber de este producto Capacidad de 1.5 L. Su potencia es de 300 W. Con base antideslizante. Cuchilla resistente de acero inoxidable. Tapa dosificadora incorporada. Funciona con 2 velocidades. Tus preparaciones preferidas listas en pocos minutos.",
       img: "https://i.postimg.cc/s2L26nwX/l1.webp"
   },
   {
       id : "Licuadora-Punktal",
       nombre: "Licuadora Punktal 1.5L",
       precioAnterior: 1989,
       precio: 1823,
       stock : 8,
       descripcion:"Lo que tienes que saber de este producto Capacidad de 1.5 L. Su potencia es de 800 W. Cuchilla resistente de acero inoxidable. Tapa dosificadora incorporada.Funciona con 2 velocidades. Cuenta con cierre de seguridad. Pica hielo. Cantidad de cuchillas: 4. Tus preparaciones preferidas listas en pocos minutos.",
       category: "Licuadora",
       img: "https://i.postimg.cc/s2xXJFPq/l2.webp"
   }
	
];

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },800)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.filter(produc => produc.category === categoryId)
            )
            
        }, 800)
    })
}
export const getProductsById = (productId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data.filter(produc => produc.id === productId ))
            
        },800)
        
    })
}
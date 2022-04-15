const productos5 = [
    {id: 1, nombre: "Intel I9", precio: 150000, img: 'https://static.wixstatic.com/media/9282cb_88156bc48ca8437787fb236c7e49e06a~mv2.jpg/v1/fill/w_498,h_332,al_c,q_85,usm_0.66_1.00_0.01/9282cb_88156bc48ca8437787fb236c7e49e06a~mv2.jpg'},
    {id: 2, nombre: "Ryzen 9", precio: 115000, img: 'https://images.stockx.com/images/AMD-Ryzen-9-3950X-Desktop-Processor.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&q=90&dpr=2&trim=color&updated_at=1615415699'},
    {id: 3, nombre: "Geforce RTX 3090", precio: 400000, img: 'https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_SL1500_.jpg'},
    {id: 4, nombre: "Corsair Vengaence 16GB", precio: 45000, img: 'https://www.computershopping.com.ar/Images/Productos/CMW16GX4M2C3000C15_Foto0.jpg'},
]

let htmlCatalogo = ''
for (const product of productos5) {
    htmlCatalogo += `
        <div class='col'>
            <h3>${product.nombre}</h3>
            <p>$ ${product.precio}</p>
            <img src='${product.img}' height= '100px'/>
            <button class= 'btnAddCart' id='product-${product.id}'>Agregar al carrito</button>
        </div>
    `
}
document.getElementById('catalogo').innerHTML= htmlCatalogo

const btns = document.getElementsByClassName('btnAddCart')
for (const btn of btns){
    btn.onclick= addToCart
}

function addToCart(e){
    const btn = e.target
    const id = btn.id.split('-')[1]
    
    const product = productos5.find(p => p.id ==id)
    console.log('Agregando producto', product)
}
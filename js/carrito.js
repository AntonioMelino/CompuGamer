const productos5 = [
    {id: 1, nombre: "Microprocesador Intel I9", precio: 150000, img: 'https://static.wixstatic.com/media/9282cb_88156bc48ca8437787fb236c7e49e06a~mv2.jpg/v1/fill/w_498,h_332,al_c,q_85,usm_0.66_1.00_0.01/9282cb_88156bc48ca8437787fb236c7e49e06a~mv2.jpg'},
    {id: 2, nombre: "Microprocesador Ryzen 9", precio: 115000, img: 'https://images.stockx.com/images/AMD-Ryzen-9-3950X-Desktop-Processor.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&q=90&dpr=2&trim=color&updated_at=1615415699'},
    {id: 3, nombre: "Placa de video Geforce RTX 3090", precio: 400000, img: 'https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_SL1500_.jpg'},
    {id: 4, nombre: "Memoria Ram Corsair Vengaence 16GB", precio: 45000, img: 'https://www.computershopping.com.ar/Images/Productos/CMW16GX4M2C3000C15_Foto0.jpg'},
    {id: 5, nombre: "Gabinete Corsair RGB Full-Tower", precio: 50000, img: 'https://www.hd-tecnologia.com/imagenes/articulos/2021/06/CORSAIR-lanza-los-nuevos-gabinetes-7000-Series-y-un-refrigerador-para-CPU-de-420mm.jpg'},
    {id: 6, nombre: "Silla Gamer Corsair T1 Blue", precio: 60000, img: 'https://www.xt-pc.com.ar/img/productos/Pics_Prod/ACC656.jpg'},
    {id: 7, nombre: "Monitor Gamer 27 pulgadas Benq Zowie", precio: 180000, img: 'https://m.media-amazon.com/images/I/51IkiiiNKNL._AC_SY450_.jpg'},
    {id: 8, nombre: "SSD 2TB Western Digital Black", precio: 75000, img: 'https://m.media-amazon.com/images/I/61mmEDzTuFL._AC_SY450_.jpg'},
    {id: 9, nombre: "Mousepad Logitech League of Legends", precio: 8000, img: 'https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/lol-g840/gallery/league-of-legends-g840-gaming-mousepad-gallery-hero.png'},
]

let htmlCatalogo = ''
for (const product of productos5) {
    htmlCatalogo += `
        <div class='col card'>
            <h3>${product.nombre}</h3>
            <p>$ ${product.precio}</p>
            <img src='${product.img}' height= '350px'/>
            <button class= 'btnAddCart' id='product-${product.id}'>Agregar al carrito</button>
            <button class= 'btnRemoveCart' id='product-${product.id}'>Remover del carrito</button>
        </div>
    `
}
document.getElementById('catalogo').innerHTML= htmlCatalogo

//ADD TO CART//

const btns = document.getElementsByClassName('btnAddCart')
for (const btn of btns){
    btn.onclick= addToCart
}

function addToCart(e){
    const btn = e.target
    const id = btn.id.split('-')[1]
    
    const product = productos5.find(p => p.id ==id)
    console.log('Agregando producto', product)

    Toastify({
        text: `${product.nombre} agregado!`,
        className: "info",
        duration: 2000,
      }).showToast();
}

//REMOVE TO CART//

const btnss = document.getElementsByClassName('btnRemoveCart')
for (const btn of btnss){
    btn.onclick= RemoveCart
}

function RemoveCart(e){
    const btn = e.target
    const id = btn.id.split('-')[1]
    
    const product = productos5.find(p => p.id ==id)
    console.log('Removiendo producto', product)

    Toastify({
        text: `${product.nombre} removido!`,
        className: "error",
        duration: 2000,
      }).showToast();
}



//STORAGE//

const guardarLocal = (key, value) => {
    localStorage. setItem(key, value)
}

for(const product of productos5){
    guardarLocal(product.id, JSON.stringify(productos5))
}

guardarLocal('Carrito', JSON.stringify(productos5))

let user
let userLS = localStorage.getItem('user')

user= userLS ? console.log('Loged') : user = prompt ('Ingrese user')
localStorage.setItem('user',user)




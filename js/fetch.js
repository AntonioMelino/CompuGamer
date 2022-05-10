//FETCH//

const lista = document.querySelector('#listado')

fetch('/data.json')
    .then(resp => resp.json())
    .then(data => {
        html = ''
        data.forEach(product => {
            html += `
            <div class='col card'>
                    <h4>${product.name}</h4>
                    <p>$ ${product.price}</p>
                    <p>Code: ${product.id}</p>
                    <img src='${product.img}' height= '350px'/>
                    <button class= 'btnAddCart' id='product-${product.id}'>Agregar al carrito</button>
                    <button class= 'btnRemoveCart' id='product-${product.id}'>Remover del carrito</button>
                </div>
            `
        })
        lista.innerHTML = html
    })
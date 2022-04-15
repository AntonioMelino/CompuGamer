alert("Bienvenido a CompuGamer, página aún en desarrollo")

let buscar = prompt("¿Qué está buscando?, presione 1 por microprocesadores, 2 por placas de video o 3 por memorias ram")

if (buscar == 1) {
    alert("Contamos con 2 microprocesadores: INTEL I9 y RYZEN 9")
}
else if (buscar == 2) {
    alert("Contamos con 1 placa de video: GEFORCE RTX 3090")
}
else if (buscar == 3) {
    alert("Contamos con 1 memoria ram: CORSAIR 16GB")
}
else {
    alert("No ha ingresado ninguna opcion, intente nuevamente")
}

alert("Nuestros precios")

let precios = prompt("Presione 1 para microprocesadores, 2 por placas de video o 3 por memorias ram")

if (precios == 1) {
    var precios1 = prompt("Presione 1 para INTEL I9 o 2 para RYZEN 9")
}
if (precios1 == 1) {
    alert("INTEL I9: $150.000 SIN IVA")
}
else if (precios1 == 2) {
    alert("RYZEN 9: $115.000 SIN IVA")
}

else if (precios == 2) {
    alert("GEFORCE RTX 3090: $400.000 SIN IVA")
}

else if (precios == 3) {
    alert("CORSAIR 16GB: $45.000 SIN IVA")
}
else {
    alert("No ha ingresado ninguna opcion, intente nuevamente")
}

alert("¿Te gusta la página?")

let puntuacion = prompt("En qué escala del 1 al 10 recomendaria CompuGamer a tus amigos?, 1 como nunca recomendaria esta página y 10 recomendaria a todos mis amigos")

if (puntuacion < 6) {
    alert("Ups parece que ingresaste un valor muy bajo, por favor volvé a puntuar :)")
}

else {
    alert("Muchas gracias vuelva pronto!")
}

class componentes {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.sold = false
    }

    addIVA(){
        this.precio = this.precio * 1.21
    }
}

const productos = []

productos.push(new componentes("Intel I9", 150000))
productos.push(new componentes("Ryzen 9", 115000))
productos.push(new componentes("Geforce RTX 3090", 400000))
productos.push(new componentes("Corsair 16GB", 45000))

for(const product of productos) product.addIVA()

console.log("Productos y sus precios",productos)

const productos2 = [
    {name: "Intel I9", precio: 150000},
    {name: "Ryzen 9", precio: 115000},
    {name: "Geforce RTX 3090", precio: 400000},
    {name: "Corsair 16GB", precio: 45000},
]

const resultado = productos2.filter ( c => c.name.includes("Intel"))
const resultado2 = productos2.filter ( c => c.name.includes("Ryzen"))

console.log("Solo Intel",resultado)
console.log("Solo AMD-Ryzen",resultado2)

const caros = productos2.filter ( c => c.precio > 100000)
const baratos = productos2.filter ( c => c.precio <= 100000)

console.log("Caros", caros)
console.log("Baratos", baratos)

const nombres = productos2.map( c => c.name)
console.log("Nombres",nombres)

const productos3 = [
    {id: 1, producto: "Intel I9", precio: 150000},
    {id: 2, producto: "Ryzen 9", precio: 115000},
    {id: 3, producto: "Geforce RTX 3090", precio: 400000},
    {id: 4, producto: "Corsair 16GB", precio: 45000},
]

const buscar1 = productos3.find(p => p.id === 1)
console.log("Buscar Intel I9", buscar1)

const buscar2 = productos3.find(p => p.id === 2)
console.log("Buscar Ryzen 9", buscar2)

const buscar3 = productos3.find(p => p.id === 3)
console.log("Buscar Geforce RTX 3090", buscar3)

const buscar4 = productos3.find(p => p.id === 4)
console.log("Buscar Corsair 16GB", buscar4)


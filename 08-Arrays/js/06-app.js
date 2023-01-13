const carrito = []

const producto = {
    nombre: "Monitor 32\"",
    precio: 400
}

const producto2 = {
    nombre: "Monitor 28\"",
    precio: 300
}

const producto3 = {
    nombre: "Monitor 24\"",
    precio: 200
}

let resultado;

resultado = { ...carrito, producto }
resultado = { ...resultado, producto2 }
resultado = { producto3, ...resultado }

console.table(resultado);
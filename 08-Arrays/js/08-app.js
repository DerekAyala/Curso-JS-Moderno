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

const carrito = [producto, producto2,producto3];
const [ , , tercero ] = carrito;
const [ , ...segundo ] = carrito;

console.log(segundo);
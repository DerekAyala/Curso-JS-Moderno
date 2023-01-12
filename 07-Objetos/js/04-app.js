const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true
};

// const nombre = producto.nombre;

// destructuring 
const { nombre, precio } = producto;

console.log(nombre);
console.log(precio);
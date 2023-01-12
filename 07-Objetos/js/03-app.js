const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true
};

producto.imagen = "imagen.jpg";

console.log(producto);

delete producto.disponible;

console.log(producto);
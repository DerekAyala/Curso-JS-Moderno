const carrito = [
    { nombre: "Monitor", precio: 1000 },
    { nombre: "Telefono", precio: 800 },
    { nombre: "Tables", precio: 600 },
    { nombre: "Television", precio: 900 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "raton", precio: 350 },
]

carrito.forEach(elemento => {
    console.log(`${elemento.nombre} ${elemento.precio}`);
});
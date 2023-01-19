const pendientes = ["tarea",'comer','proyecto','Estudiar'];

const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true
};

for (const propiedad in producto) {
    console.log(producto[propiedad]);
}

for ( let [llave,valor] of Object.entries(producto)) {
    console.log(`${llave} : ${valor}`);
}
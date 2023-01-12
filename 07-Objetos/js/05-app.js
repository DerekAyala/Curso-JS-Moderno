const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "china"
        }
        
    }
};

console.log(producto);

const { peso } = producto.informacion.medidas;

console.log(peso)

console.log(producto.informacion.fabricacion.pais);
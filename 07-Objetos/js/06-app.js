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

const { pais } = producto.informacion.fabricacion;
console.log(pais);
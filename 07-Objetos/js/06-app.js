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

const { informacion: { medidas: {medida},fabricacion:{pais} } } = producto;
console.log(pais);
console.log(medida)
function sumar(a, b) {
    return a + b;
}

console.log(sumar(1,1));

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15
}

agregarCarrito(300);


const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(totalPagar);
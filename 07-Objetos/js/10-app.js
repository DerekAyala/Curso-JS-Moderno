"use strict";

const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: "1KG",
    medida: "1M"
};

const resultado = Object.assign(producto,medidas)
console.log(resultado);

// spread operator o rest operator

const resultado2 = { ...producto,...medidas}
console.log(resultado2);

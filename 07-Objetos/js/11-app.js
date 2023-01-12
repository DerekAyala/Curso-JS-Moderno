"use strict";

const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
};

const producto2 = {
    nombre: "Tablet",
    precio: 500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
};
producto.mostrarInfo();
producto2.mostrarInfo();
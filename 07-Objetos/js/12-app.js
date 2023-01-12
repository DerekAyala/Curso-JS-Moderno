"use strict";

// Object literal
const producto = {
    nombre: "Monitor 20 de pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
};

// Object Constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor de 22\"",500);
console.log(producto2);

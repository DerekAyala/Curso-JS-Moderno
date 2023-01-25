/*
const enlace = document.createElement('A');

enlace.textContent = 'Nuevo enlace';

enlace.href = '/nuevo-enlace';

enlace.target = '_black';

const navegacion = document.querySelector('.navegacion');
//agregar al final
// navegacion.appendChild(enlace);
//agregar donde quieras

navegacion.insertBefore(enlace,navegacion.children[1]);

console.log(enlace);
*/

//CREAR UN CARD DE FORMA DINAMICA

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto alternativo';

const card = document.createElement('DIV');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);



const contenedor = document.querySelector('.contenedor-cards');
contenedor.insertBefore(card,contenedor.children[0]);

console.log(contenedor);
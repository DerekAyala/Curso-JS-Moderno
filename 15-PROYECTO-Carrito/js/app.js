const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso)

    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; 
        limpiarHTML();
    });
}

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCursoss(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo de articulos carrito por data id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        console.log(articulosCarrito);
        carritoHTML(); 
    }
}

function leerDatosCursoss(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id ) {
                curso.cantidad ++;
                return curso; // retorna objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito)

    carritoHTML();
}

// Muestra el carrito de compras en el html
function carritoHTML() {
    // limpiar el HTML
    limpiarHTML();
    // recorre el carrito y general el html
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width=100></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;
        // agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// eliminar los cursos del tbody
function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = "";

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
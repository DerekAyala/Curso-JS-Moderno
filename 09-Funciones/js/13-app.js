const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo cancion ${"#" + id}...`),
    pausar: () => console.log(`Pausando...`),
    crearPlaylist: (nombre) => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: (nombre) => console.log(`Reproduciendo la playlist ${nombre}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiento ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Enter sandman";
reproductor.borrar = () => console.log(`Borrando...`)

reproductor.obtenerCancion;

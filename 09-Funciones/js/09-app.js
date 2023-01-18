const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion ${"#" + id}...`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.borrar = function(){
    console.log(`Borrando...`);
}

reproductor.reproducir(30);
reproductor.pausar();

console.log(reproductor);
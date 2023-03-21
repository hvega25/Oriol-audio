
const cargarMusica = () => {
    fetch("../archivos/data.json")
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {

            if (data) console.log(data.playlist[0].path);
            else alert("ERROR");
        }

        )
}

const cargarDatos = () => {
    fetch("../archivos/data.json")
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            if (data) document.getElementById('titulo').innerHTML = data.playlist[0].name;
            if (data) document.getElementById('artista').innerHTML = data.playlist[0].artist;
            if (data) document.getElementById('duracion').innerHTML = data.playlist[0].duration;
            else alert("ERROR");
        }

        )
}
const cargarImagen = () => {
    fetch("../archivos/data.json")
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            let im = data.playlist[0].img;
            if (data) document.getElementById('imagen').setAttribute("src", im);
            else alert("ERROR");
        }
        )
}
const cargarTitulo = () => {
    fetch("../archivos/data.json")
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            let musica = data.playlist[0].path;
            if (data) document.getElementById('musica').setAttribute("src", musica);
            else alert("ERROR");
        }
        )
}
var iniciar = document.getElementById('musica');
var nivel_volumen = document.querySelector('.volumen');
var mostrar_nivel_volumen = document.querySelector('.nivel_volumen');


function control_musica(){
    if(iniciar.paused === true){
        iniciar.play();
    }else{
        iniciar.pause();
    }
}

nivel_volumen.oninput = () => {
    mostrar_nivel_volumen.innerHTML = nivel_volumen.value;
}


cargarDatos();
cargarImagen();
cargarTitulo();
const obj = JSON.parse(listaCompletaDeDatos);

let indiceActual = 0;

let indiceMin = 0;
let ordenDeTarjetas = new Set();

let caracteres = document.getElementById("caracteres");
let definicion = document.getElementById("definicion");
let pinyin = document.getElementById("pinyin");
let botonNoSe = document.getElementById("boton_no-se");
let botonChequear = document.getElementById("boton_chequear");
let inputUsuario = document.getElementById("inputUsuario");

function cargarTarjetaActual() {
    console.log("ordenDeTarjetas:" + ordenDeTarjetas);
    console.log("indiceActual:" + indiceActual);
    console.log("tarjetaActual:" + [...ordenDeTarjetas][indiceActual]);

    console.log([...ordenDeTarjetas][indiceActual]);
    caracteres.innerHTML = "<p>" + obj[[...ordenDeTarjetas][indiceActual]]["word"] + "</p>";
}

function mostrarRespuesta() {
    pinyin.innerHTML = "<p>" + obj[[...ordenDeTarjetas][indiceActual]]["pinyin"] + "</p>";
    definicion.innerHTML = "<p>" + obj[[...ordenDeTarjetas][indiceActual]]["meaning"] + "</p>";
}

function generarOrdenDeTarjetas(rango, cantidad) {
    var i=0;
    while (ordenDeTarjetas.size < cantidad) {
        ordenDeTarjetas.add(Math.floor(Math.random() * (rango - 1 + 1)));
        // ordenDeTarjetas.add(i);
        // i+=1;
    }
}

function proximaTarjeta() {
    if (indiceActual < indiceMax-1) {
        indiceActual += 1;
    } else {
        indiceActual = indiceMin;
    }
}

function borrar() {
    caracteres.innerHTML = "<p></p>";
    pinyin.innerHTML = "<p></p>";
    definicion.innerHTML = "<p></p>";
    inputUsuario.value = "";
}

function noSe() {
    mostrarRespuesta();
}

function chequear() {
    respuestaUsuario = inputUsuario.value;
    respuestaCorrecta = obj[[...ordenDeTarjetas][indiceActual]]["word"];
    // proximaTarjeta();
    // borrar();
    // cargarTarjetaActual();
    if (respuestaCorrecta.includes("｜")) {
        respuestaCorrecta = respuestaCorrecta.split("｜");
    }

    if (respuestaCorrecta.includes("（")) {
        respuestaCorrecta = respuestaCorrecta.split("（")[0];
    }

    if (respuestaCorrecta.includes(respuestaUsuario) && respuestaUsuario != "") {
        //correcto - bien, pasamos a la próxima
        console.log("correcto");
        proximaTarjeta();
        borrar();
        cargarTarjetaActual();
    } else {
        //incorrecto - mal, muestro respuesta
        console.log("incorrecto");
        mostrarRespuesta();
    }
}

generarOrdenDeTarjetas(indiceMax, indiceMax);
cargarTarjetaActual();

//para los botones
function verTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        botonChequear.click();
    }
    //falta alguna key para "no sé"
}
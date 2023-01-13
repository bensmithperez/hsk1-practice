function buscarInfoDeQuizActual() {
    urlActual = window.location.href;

    partesDeUrl = urlActual.split("?");
    largoDeUrl = partesDeUrl.length;
    quizActual = partesDeUrl[largoDeUrl - 1];

    console.log(quizActual);
    return quizActual;
}

function separarTituloDeSubtitulo(quizActual){
    return quizActual.split("-");
}

function transformarEnTitulo(titulo){
    titulo = titulo[0].toUpperCase() + titulo.slice(1);
    return titulo;
}

function transformarEnSubtitulo(subtitulo){
    titulo = subtitulo[0].toUpperCase() + subtitulo.slice(1);
    return titulo;
}

function transformarEnNombreDeVariable(quizActual){
    return quizActual.replace("-", "_");
}

function initQuizActual(quizActual) {
    let tituloQuiz = document.getElementById("titulo-quiz");
    let subtituloQuiz = document.getElementById("subtitulo-quiz");
    
    // titulo y subtitulo
    tituloConSubtitulo = separarTituloDeSubtitulo(quizActual);
    if (tituloConSubtitulo.length == 2){
        tituloFinal = transformarEnTitulo(tituloConSubtitulo[0]);
        subtituloFinal = transformarEnSubtitulo(tituloConSubtitulo[1]);
        tituloQuiz.innerHTML = tituloFinal;
        subtituloQuiz.innerHTML = subtituloFinal;
        document.title = "Quiz [" + tituloFinal + " " + subtituloFinal + "]";
    } else {
        tituloQuiz.innerHTML = transformarEnTitulo(tituloConSubtitulo);
        subtituloQuiz.innerHTML = "";
        document.title = "Quiz [" + tituloConSubtitulo + "]";
    }


    nombreVariable = transformarEnNombreDeVariable(quizActual);
    // indiceMax = eval(nombreVariable+"_indiceMax");
    console.log(nombreVariable)
    listaCompletaDeDatos = eval(nombreVariable+"_listaCompletaDeDatos");
}



quizActual = buscarInfoDeQuizActual();
// datosActuales = '../datos/'+quizActual+'.js';
initQuizActual(quizActual);


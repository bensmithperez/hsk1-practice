# la idea es usar esto para generar las diferentes
# páginas necesarias para que funcione el quiz...

# antes tenía todos los scripts en un quiz.html
# y estaba haciendo un montón de requests innecesarios.

import os

tituloQuiz = ""
subtituloQuiz = ""
pathQuizActual = ""

contenidoHTML = """<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Quiz</title>
    <link rel=\"stylesheet\" href=\"../quiz-style.css\">
</head>
<body>
    <header>
        <nav>
            <a href=\"../index.html\">back</a>
        </nav>
    </header>
    <main>
        <header class=\"quiz-info\">
            <h1 class=\"titulo-quiz\" id=\"titulo-quiz\">{tituloQuiz}</h1>
            <h2 class=\"subtitulo-quiz\" id=\"subtitulo-quiz\">{subtituloQuiz}</h2>
            <div class=\"tarjeta-actual\" id=\"tarjeta-actual\">
                <p></p>
            </div>
        </header>
        <div class=\"parte-1\">
            <div class=\"caracteres\" id=\"caracteres\">
                <p></p>
            </div>
            <div class=\"pinyin\" id=\"pinyin\">
                <p></p>
            </div>
            <div class=\"definicion\" id=\"definicion\">
                <p></p>
            </div>
        </div>
        <div class=\"input\">
            <input type=\"text\" class=\"inputUsuario\" id=\"inputUsuario\" onkeydown=\"verTecla(event)\">
        </div>
        <div class=\"botones\">
            <!-- <button class=\"boton-\"></button> -->
            <button class=\"botones_boton boton_no-se\" id=\"boton_no-se\" onclick=\"noSe()\">I don't know</button>
            <button class=\"botones_boton boton_chequear\" id=\"boton_chequear\" onclick=\"chequear()\">Check</button>
            <button class=\"botones_boton boton_siguiente esconder_boton\" id=\"boton_siguiente\" onclick=\"clickEnSiguiente()\">Next</button>
        </div>
    </main>
    <script src=\"../scripts/datosGenerales.js\"></script>
    <!-- quiz actual -->
    <script src=\"{pathQuizActual}\"></script>
<script src=\"../scripts/logica.js\"></script>
</body>
</html>"""

pathDeDatos = "./datos/"
pathDeQuiz = "./quiz/"

def armar_quizes():
    listaDeArchivos = os.listdir(pathDeDatos)
    for nombreArchivo in sorted(listaDeArchivos):
        if nombreArchivo.endswith(".js"):
            pathQuizActual = "../quiz/"+nombreArchivo
            pathDatosActual = "../datos/"+nombreArchivo
            print(pathQuizActual)
            with open(os.path.join(pathDeQuiz, pathQuizActual.replace(".js", ".html")), "w") as archivoQuiz:
                partesDelTitulo = separar_titulo_de_subtitulo(nombreArchivo.replace(".js",""))
                
                if (len(partesDelTitulo) == 2):
                    tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
                    subtituloQuiz = transformar_en_titulo(partesDelTitulo[1])
                else:
                    tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
                    subtituloQuiz = ""
                archivoQuiz.write(contenidoHTML.format(tituloQuiz=tituloQuiz,subtituloQuiz=subtituloQuiz,pathQuizActual=pathDatosActual))
                # print(contenidoHTML + pathQuizActual + contenidoParte2)

def separar_titulo_de_subtitulo(quiz_actual):
    return quiz_actual.split("-")

def transformar_en_titulo(titulo):
    titulo = titulo[0].upper() + titulo[1:]
    return titulo

armar_quizes()
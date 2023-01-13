const tiposDeLink = {
    main: 0,
    sub: 1,
    header: 2,
}

let urls = [
    ["Home","index.html",tiposDeLink.main],
    ["Numbers","quiz.html?numeros",tiposDeLink.main],
    ["Lesson 1","",tiposDeLink.header],
    ["Vocab","quiz.html?lesson1-vocab",tiposDeLink.sub],
    ["Sentences","quiz.html?lesson1-sentences",tiposDeLink.sub],
    ["Lesson 2","",tiposDeLink.header],
    ["Vocab","quiz.html?lesson2-vocab",tiposDeLink.sub],
    ["Sentences","quiz.html?lesson2-sentences",tiposDeLink.sub],
    ["Lesson 3","",tiposDeLink.header],
    ["Vocab","quiz.html?lesson3-vocab",tiposDeLink.sub],
    ["Sentences","quiz.html?lesson3-sentences",tiposDeLink.sub],
    ["Lesson 4","",tiposDeLink.header],
    ["Vocab","quiz.html?lesson4-vocab",tiposDeLink.sub],
    ["Sentences","quiz.html?lesson4-sentences",tiposDeLink.sub]
];

var indiceMax = -1;
let listaCompletaDeDatos = []; 
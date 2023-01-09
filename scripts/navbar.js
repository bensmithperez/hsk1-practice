const tiposDeLink = {
    main: 0,
    sub: 1,
    header: 2,
}

let nombres = ["Home", "Numbers", "Lesson 1", "Vocab", "Sentences", "Lesson 2", "Vocab", "Sentences"];

let urls = [
    { "index.html": tiposDeLink.main },
    { "numeros.html": tiposDeLink.main },
    { "lesson1.html": tiposDeLink.header },
    { "lesson1-vocab.html": tiposDeLink.sub },
    { "lesson1-sentences.html": tiposDeLink.sub },
    { "lesson2.html": tiposDeLink.header },
    { "lesson2-vocab.html": tiposDeLink.sub },
    { "lesson2-sentences.html": tiposDeLink.sub }];

function cargarListaDeLinks(urlDeEstaPagina) {
    let menuCompleto = ``;
    index = 0;
    for (const url of urls) {
        for (const [urlPagina, tipoLink] of Object.entries(url)) {
            urlPorUsar = "";
            idParaElBanco = "pagina-" + urlPagina.replace(".html", "");
            // pongo sin urls los que son headers o la url actual
            // if (urlPagina == urlDeEstaPagina || tipoLink == tiposDeLink.header) {
            // urlPorUsar = "#";
            // } else {
            urlPorUsar = urlPagina;
            // }

            menuCompleto += `<a id="` + idParaElBanco + `" href="` + urlPorUsar + `" class="menu-principal-link`;

            // agrego clases css a los que corresponda
            switch (tipoLink) {
                case tiposDeLink.main:
                    menuCompleto += ``;
                    break;
                case tiposDeLink.sub:
                    menuCompleto += ` menu-principal-es-sub`
                    break;
                case tiposDeLink.header:
                    menuCompleto += ` menu-principal-es-header`;
                    break;
                default:
                    menuCompleto += ``;
            }

            // agrego clase para mostrar como seleccionado
            if (urlPagina == urlDeEstaPagina) {
                menuCompleto += ` item-menu-seleccionado`;
            }

            menuCompleto += `">` + nombres[index] + `</a>`;

            index += 1;
            console.log(urlDeEstaPagina, tipoLink, idParaElBanco)
        }
    }
    document.getElementById("menu-principal").innerHTML = menuCompleto;
}

function marcarHeader(id) {
    document.getElementById(id).classList.add("header-seleccionado");
}

function crearMenuDeSeccion(id) {
    menuSeccion = ``;
    index = 0;
    for (const url of urls) {
        for (const [urlPagina, tipoLink] of Object.entries(url)) {
            console.log(urlPagina)
            if (urlPagina.includes(id + "-")) {
                console.log("sip")
                menuSeccion += `<a href="` + urlPagina + `" class="menu-seccion-link">` + nombres[index] + `</a>`;
            }
            index += 1;
        }
    }
    document.getElementById("menu-de-seccion").innerHTML = menuSeccion;
}
function mostrarEnHTML(idElemento, mensaje) {
    document.querySelector(`#${idElemento}`).innerHTML = mensaje;
}

function leerDatoDelHTML(idElemento) {
    return document.querySelector(`#${idElemento}`).value.trim();
}

function esNumero(posibleNumero) {    
    return !isNaN(posibleNumero);
}

function mostrarMensaje(idElemento, mensaje) {
    document.querySelector(`#${idElemento}`).innerHTML = mensaje;
}

function mostrarEnHTML(idElemento, mensaje) {
    document.querySelector(`#${idElemento}`).innerHTML = mensaje;
}

function leerDatoDelHTML(idElemento) {
    return document.querySelector(`#${idElemento}`).value.trim();
}

function esNumero(posibleNumero) {    
    return !isNaN(posibleNumero);
}

function mostrarContenidoDeArray(arrayParaMostrar, idElementoHTML, separador, caracterFinal, borrarResultadoActual) {
    let resultado = "";

    if (arrayParaMostrar.length === 0) {
        resultado = "El array está vacío."
    } else {
        for (let i = 0; i < arrayParaMostrar.length; i++) {
            let elementoActual = arrayParaMostrar[i];
            resultado += elementoActual;
    
                    
            if (i < arrayParaMostrar.length-1) {
                resultado += separador;
            } else {
                resultado += caracterFinal;
            }
        }
    }

    if (borrarResultadoActual) {
        document.querySelector(`#${idElementoHTML}`).innerHTML = resultado;
    } else {
        document.querySelector(`#${idElementoHTML}`).innerHTML += "<br><br>" + resultado;
    }
}


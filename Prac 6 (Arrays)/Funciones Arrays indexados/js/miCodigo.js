inicializar();

function inicializar() {
    document.querySelector("#miBoton1").addEventListener("click", pruebaConArrays);
}



function pruebaConArrays() {
    // Defino una variable llamada miArray, que es un array indexado vacío.
    let miArray = [];
    mostrarContenidoDeArray(miArray, "divResultados", ", ", ".", true);

    // Le agrego un valor en la posición (índice) 0.
    miArray[0] = "Hola";
    mostrarContenidoDeArray(miArray, "divResultados", ", ", ".", false);

    // Agrega una posición más al array, y en ese índice, guarda el valor que le paso.
    miArray.push("Chau");
    // La línea de arriba, es igual a haber hecho: miArray[1] = "Chau";
    mostrarContenidoDeArray(miArray, "divResultados", ", ", ".", false);

    let largoActual = miArray.length;
    miArray[largoActual] = "Bruno";
    mostrarContenidoDeArray(miArray, "divResultados", ", ", ".", false);

    // P: ¿Cuánto vale la variable largoActual en esta línea? R: 2
    // Piso el dato que está en la posición 2, y le pongo "Esteban".
    miArray[largoActual] = "Esteban";
    mostrarContenidoDeArray(miArray, "divResultados", ", ", ".", false);

    // En la posición 3, le pongo "Bruno".
    miArray[miArray.length] = "Bruno";
    // Hasta acá, me quedó el siguiente array: ["Hola", "Chau", "Esteban", "Bruno"]
    mostrarContenidoDeArray(miArray, "divResultados", ", ", ".", false);

    let miNuevoArray = ["Manzana", "Banana", "Sandía", "Naranja"];
    mostrarContenidoDeArray(miNuevoArray, "divResultados", "<br>", "", false);

    miNuevoArray.push("Pera")
    mostrarContenidoDeArray(miNuevoArray, "divResultados", "<br>", "", false);
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
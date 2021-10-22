inicializar();

function inicializar() {
     document.querySelector("#btnAgregarPalabraE1a").addEventListener("click", btnAgregarPalabraAlArrayE1aHandler);
     document.querySelector("#btnE1a").addEventListener("click", btnRetornarLargoDeElementosDeArrayE1aHandler);
     document.querySelector("#btnAgregarPalabraE1b").addEventListener("click", btnAgregarPalabraAlArrayE1bHandler);
     document.querySelector("#btnE1b").addEventListener("click", btnRetornarLargoDeElementosDeArrayE1bHandler);
     document.querySelector("#btnAgregarValorE2").addEventListener("click", btnArrayNumericoE2Handler);
     document.querySelector("#btnMostrarResultadoE2").addEventListener("click", btnMostrarValorMasGrandeHandler);
     document.querySelector("#btnAgregarPalabraE3").addEventListener("click", btnE3GuardarPalabraHandler);
     document.querySelector("#btnMostrarResultadoE3").addEventListener("click", btnMostrarArrayE3Handler);
     document.querySelector("#btnAgregarValorE4").addEventListener("click", btnGuardarNumeroE4Handler);
     document.querySelector("#btnMostrarResultadoE4").addEventListener("click", btnMostrarArrayYPromedioE4Handler);
     document.querySelector("#btnAgregarValorE5").addEventListener("click", btnGuardarNumeroE5Handler);
     document.querySelector("#btnMostrarResultadoE5").addEventListener("click", btnMostrarArrayPlus20E5Handler);
     document.querySelector("#btnAgregarPalabraE6a").addEventListener("click", btnGuardarAliasE6aHandler);
     document.querySelector("#btnMostrarResultadoE6a").addEventListener("click", btnMostrarArrayE6aHandler);
     document.querySelector("#btnAgregarPalabraE6b").addEventListener("click", btnGuardarAliasE6bHandler);
     document.querySelector("#btnMostrarResultadoE6b").addEventListener("click", btnMostrarArrayE6bHandler);
     document.querySelector("#btnAgregarNombreE7a").addEventListener("click", btnGuardarNombreE7aHandler);
     document.querySelector("#btnMostrarResultadoE7a").addEventListener("click", btnMostrarLargoArrayE7aHandler);
     document.querySelector("#btnMostrarNombreIndicadoE7b").addEventListener("click", btnRecibirIndiceE7bHandler);
     document.querySelector("#btnMostrarResultadoE7c").addEventListener("click", btnCambiarNombreIndicadoPorNuevoE7cHandler);
     document.querySelector("#btnMostrarResultadoE8").addEventListener("click", btnCompletarArrayFibonacciE8Handler);
     document.querySelector("#btnMostrarResultadoE9").addEventListener("click", btnCompletarArrayFibonacciMinus1000E8Handler);
     document.querySelector("#btnMostrarResultadoE10").addEventListener("click", btnSacarRepetidosDeArrayE10Handler);
     document.querySelector("#btnGuardarNumeroE12").addEventListener("click", btnGuardarNumeroE12Handler);
     document.querySelector("#btnMostrarResultadoE12").addEventListener("click", btnCrearArrayConMayoresAlPrimeroE12Handler);
}

//EJERCICIO 1

//PARTE A
let arrayE1a = [];

function btnAgregarPalabraAlArrayE1aHandler() {
     let palabraNueva = document.querySelector("#txtPalabraIngresadaE1a").value
     palabraNueva = palabraNueva.trim()
     
     if (palabraNueva != "") {
          arrayE1a.push(palabraNueva)
          mostrarContenidoDeArray(arrayE1a, "resE1a", ", ", ".", true);
     } else {
          document.querySelector("#resE1a").innerHTML = "Ingrese un texto no vacío."
     }
     
     
     document.querySelector("#txtPalabraIngresadaE1a").value = ""
}

function btnRetornarLargoDeElementosDeArrayE1aHandler() {
     mostrarContenidoDeArray(arrayE1a, "resE1a", ", ", ".", true);
     
     let arrayConLargos = retornarLargoDeElementosDeArray(arrayE1a);
     mostrarContenidoDeArray(arrayConLargos, "resE1a", ", ", ".", false);
}

function retornarLargoDeElementosDeArray(arrayOriginal) {
     let arrayResultado = [];
     
     for (let i = 0; i < arrayOriginal.length; i++) {
          let textoActual = arrayOriginal[i];
          let largoTextoActual = textoActual.length;
          arrayResultado[i] = largoTextoActual;
     }
     
     return arrayResultado;
}

//PARTE B

let arrayE1b = [];

function btnAgregarPalabraAlArrayE1bHandler() {
     let palabraNueva = document.querySelector("#txtPalabraIngresadaE1b").value
     
     palabraNueva = palabraNueva.trim()
     
     if (palabraNueva != "") {
          arrayE1b.push(palabraNueva)
          mostrarContenidoDeArray(arrayE1b, "resE1b", ", ", ".", true);
     } else {
          document.querySelector("#resE1b").innerHTML = "Ingrese un texto no vacío."
     }
     
     
     document.querySelector("#txtPalabraIngresadaE1b").value = ""
}

function btnRetornarLargoDeElementosDeArrayE1bHandler() {
     mostrarContenidoDeArray(arrayE1b, "resE1b", ", ", ".", true);
     
     let arrayConLargos = arrayE1b.map(x => x.length)
     mostrarContenidoDeArray(arrayConLargos, "resE1b", ", ", ".", false);
}

//EJERCICIO 2
let arrayNumericoE2 = []
function btnArrayNumericoE2Handler() {
     let valor = document.querySelector("#txtE2").value;

     if (!isNaN(valor) && valor != "") {
          valor = parseInt(valor)
          arrayNumericoE2.push(valor)
          document.querySelector("#txtE2").value = "";
          mostrarContenidoDeArray(arrayNumericoE2, "resE2", ", ", "", true)
     } else {
          document.querySelector("#resE2").innerHTML = "Ingrese un valor numerico"
     }
}

function obtenerValorMasGrandeArray(arrayNumerico) {
     let masGrande = Number.NEGATIVE_INFINITY;
     for (let i = 0; i < arrayNumerico.length; i++) {
          if (arrayNumerico[i] > masGrande) {
               masGrande = arrayNumerico[i];
          }
     }
     return masGrande;
}

function btnMostrarValorMasGrandeHandler() {
     valorMasGrande = obtenerValorMasGrandeArray(arrayNumericoE2)
     document.querySelector("#resE2").innerHTML += "<br><br> El valor mas grande del array es: " + valorMasGrande;
}






// Ejercicio 3
let arrayE3 = [];
function btnE3GuardarPalabraHandler() {
     let textoIngresado = document.querySelector("#txtE3").value;
     arrayE3.push(textoIngresado);
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE3").value = "";
}

function btnMostrarArrayE3Handler() {
     mostrarContenidoDeArray(arrayE3, "resE3", ", ", ".", true);
}






// Ejercicio 4
let arrayNumE4 = [];
function btnGuardarNumeroE4Handler() {
     let numIngresado = document.querySelector("#txtE4").value;
     if (!isNaN(numIngresado)) {
          numIngresado = parseInt(numIngresado)
          arrayNumE4.push(numIngresado);
     } else {
          document.querySelector("#resE4").value = "Ingrese un valor numerico";
     }
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE4").value = "";
}

function obtenerPromedioDeArrayNumerico(arrayNumerico) {
     let promedio
     let sumaNums = 0

     for (let i = 0; i < arrayNumerico.length; i++) {
          sumaNums += arrayNumerico[i]
     }

     promedio = sumaNums / arrayNumerico.length

     return promedio
}

function btnMostrarArrayYPromedioE4Handler() {
     let promedio = obtenerPromedioDeArrayNumerico(arrayNumE4)
     mostrarContenidoDeArray(arrayNumE4, "resE4", ", ", ".", true);
     document.querySelector("#resE4").innerHTML += "<br><br>El promedio de los numeros del array es: " + promedio;
}






// Ejercicio 5
let arrayNumE5 = [];
function btnGuardarNumeroE5Handler() {
     let numIngresado = document.querySelector("#txtE5").value;
     if (!isNaN(numIngresado)) {
          numIngresado = parseInt(numIngresado)
          arrayNumE5.push(numIngresado);
     } else {
          document.querySelector("#resE5").value = "Ingrese un valor numerico";
     }
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE5").value = "";
}

function crearArrayNumericoPlus20(arrayNumerico) {
     let arrayPlus20 = [];

     for (let i = 0; i < arrayNumerico.length; i++) {
          if (arrayNumerico[i] > 20) {
               arrayPlus20.push(arrayNumerico[i]);
          }
     }

     return arrayPlus20
}

function btnMostrarArrayPlus20E5Handler() {
     mostrarContenidoDeArray(arrayNumE5, "resE5", ", ", ".", true);
     mostrarContenidoDeArray(crearArrayNumericoPlus20(arrayNumE5), "resE5", ", ", ".", false);
}






// Ejercicio 6 A
let arrayE6a = [];
function btnGuardarAliasE6aHandler() {
     let textoIngresado = document.querySelector("#txtE6a").value;
     arrayE6a.push(textoIngresado);
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE6a").value = "";
}

function btnMostrarArrayE6aHandler() {
     mostrarContenidoDeArray(arrayE6a, "resE6a", ", ", ".", true);
}




// Ejercicio 6 B
let arrayE6b = [];
function btnGuardarAliasE6bHandler() {
     let aliasIngresado = document.querySelector("#txtE6b").value;
     if (!existeAliasUsuario(aliasIngresado)) {
          arrayE6b.push(aliasIngresado);
     } else {
          document.querySelector("#resE6b").innerHTML = "El alias ingresado ya existe";
     }
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE6b").value = "";
}


function existeAliasUsuario(alias) {
     let existeAlias = false

     let i = 0;
     while (i < arrayE6b.length && arrayE6b[i] != alias) {
          i++
     }

     if (i < arrayE6b.length) {
          existeAlias = true
     }

     return existeAlias
}


function btnMostrarArrayE6bHandler() {
     mostrarContenidoDeArray(arrayE6b, "resE6b", ", ", ".", true);
}





// Ejercicio 7 
let arrayE7 = [];
//Parte A
function btnGuardarNombreE7aHandler() {
     let nombreIngresado = document.querySelector("#txtE7a").value;
     if (nombreIngresado != "") {
          arrayE7.push(nombreIngresado);
     } else {
          document.querySelector("#resE7a").innerHTML = "Ingrese un nomber no vacio";
     }
     mostrarContenidoDeArray(arrayE7, "resE7a", "<br>", "", true)
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE7a").value = "";
}


function btnMostrarLargoArrayE7aHandler() {
     document.querySelector("#resE7a").innerHTML += "<br><br>El array tiene " + arrayE7.length + " nombres ingresados"
}

//Parte B
function btnRecibirIndiceE7bHandler() {
     let indiceIngresado = document.querySelector("#txtE7b").value;
     if (!isNaN(indiceIngresado)) {
          indiceIngresado = parseInt(indiceIngresado);
          mostrarNombreIndicadoDeArray(indiceIngresado, arrayE7)
     }
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtE7b").value = "";
}

function mostrarNombreIndicadoDeArray(indiceArray, array) {
     if (indiceArray >= 0 && indiceArray < array.length) {
          document.querySelector("#resE7b").innerHTML = array[indiceArray]
     } else {
          document.querySelector("#resE7b").innerHTML = "El indice ingresado esta fuera de rango"
     }
}


//Parte C
function btnCambiarNombreIndicadoPorNuevoE7cHandler() {
     let nombreIndicado = document.querySelector("#txtBusquedaNombreE7c").value;
     let nombreNuevo = document.querySelector("#txtCambioNombreE7c").value;
     if (nombreIndicado != "" && nombreNuevo != "") {
          if (existeNombreUsuario(nombreIndicado, arrayE7)) {
               cambiarNombreIndicadoPorNuevo(arrayE7, nombreIndicado, nombreNuevo);
               mostrarContenidoDeArray(arrayE7, "resE7c", ", ", "", false)
          } else {
               document.querySelector("#resE7c").innerHTML = "<br>El nombre ingresado no esta en el array";
          }
     } else {
          document.querySelector("#resE7c").innerHTML = "<br>Debe ingresar nombres en los dos campos de texto";
     }
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtBusquedaNombreE7c").value = "";
     document.querySelector("#txtCambioNombreE7c").value = "";
}

function existeNombreUsuario(nombre, array) {
     let existeNombre = false

     let i = 0;
     while (i < array.length && array[i] != nombre) {
          i++
     }

     if (i < array.length) {
          existeNombre = true
     }

     return existeNombre
}

function cambiarNombreIndicadoPorNuevo(array, nombreIndicado, nombreNuevo) {
     let i = 0;
     while (i < array.length && array[i] != nombreIndicado) {
          i++
     }

     if (i < array.length) {
          array[i] = nombreNuevo
     }
}



//EJERCICIO 8
let arrayFibonacciE8 = [1, 1]
function btnCompletarArrayFibonacciE8Handler() {
     for (let i = 2; i < 20; i++) {
          arrayFibonacciE8[i] = arrayFibonacciE8[i - 1] + arrayFibonacciE8[i - 2]
     }
     mostrarContenidoDeArray(arrayFibonacciE8, "resE8", " ", "", true)
}





//EJERCICIO 9
let arrayFibonacciE9 = [1, 1]
function btnCompletarArrayFibonacciMinus1000E8Handler() {
     let i = 2;
     while (i < 20 && arrayFibonacciE9[i - 1] + arrayFibonacciE9[i - 2] < 1000) {
          arrayFibonacciE9[i] = arrayFibonacciE9[i - 1] + arrayFibonacciE9[i - 2]
          i++
     }
     mostrarContenidoDeArray(arrayFibonacciE9, "resE9", " ", "", true)
}







//EJERCICIO 10
let arrayE10 = ["a", "b", "c", "b", "d", "a", "e", "c", "c"];
function btnSacarRepetidosDeArrayE10Handler() {
     mostrarContenidoDeArray(arrayE10, "resE10", ", ", "", true);
     sacarRepetidosDeArray(arrayE10);
     mostrarContenidoDeArray(arrayE10, "resE10", ", ", "", false);
}

function sacarRepetidosDeArray(array) {
     for (let i = 0; i < array.length - 1; i++) {
          let j = i + 1;
          while (j < array.length) {
               if (array[i] == array[j]) {
                    array.splice(j, 1)
               } else {
                    j++
               }
          }
     }
}








//EJERCICIO 12
let arrayE12 = [];
function btnGuardarNumeroE12Handler() {
     let numIngresado = document.querySelector("#txtNumIngresadoE12").value;
     if (!isNaN(numIngresado) && numIngresado != "") {
          numIngresado = parseInt(numIngresado)
          arrayE12.push(numIngresado);
          mostrarContenidoDeArray(arrayE12, "divArrayInicialE12", ", ", "", true)
          document.querySelector("#resE12").innerHTML = "";
     } else {
          document.querySelector("#resE12").innerHTML = "Ingrese un valor numerico";
     }
     // Borro lo que el usuario escribió para dejar todo pronto para que siga escribiendo algo nuevo.
     document.querySelector("#txtNumIngresadoE12").value = "";
}

function btnCrearArrayConMayoresAlPrimeroE12Handler() {
     let nuevoArray = crearArrayConMayoresAlPrimero(arrayE12);

     mostrarContenidoDeArray(nuevoArray, "resE12", ", ", "", true)
}


function crearArrayConMayoresAlPrimero(array) {
     let nuevoArray = [];
     let primero = array[0];
     for (let i = 1; i < array.length; i++) {
          if (array[i] > primero) {
               nuevoArray.push(array[i])
          }
     }
     return nuevoArray
}
//function mostrarContenidoDeArray(arrayParaMostrar, idElementoHTML, separador, caracterFinal, borrarResultadoActual)
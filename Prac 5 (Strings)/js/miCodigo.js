inicializar();

function inicializar() {
     document.querySelector("#btnE1").addEventListener("click", btnInvertirTextoHandler);
     document.querySelector("#btnE2").addEventListener("click", btnContarLetraEnTextoHandler);
     document.querySelector("#btnE3").addEventListener("click", btnContarVocalesEnTextoHandler);
     document.querySelector("#btnE4").addEventListener("click", btnConvertirAMinusculaHandler);
     document.querySelector("#btnE5").addEventListener("click", btnConvertirAMayusculaHandler);
     document.querySelector("#btnE6").addEventListener("click", btnContieneSubCadenaHandler);
     document.querySelector("#btnE7").addEventListener("click", btnContarPalabrasHandler);
     document.querySelector("#btnE8").addEventListener("click", btnPrimeraYUltimaLetraIgualesHandler);
     document.querySelector("#btnE9").addEventListener("click", btnMostrarDeptoHandler);
     document.querySelector("#btnE10").addEventListener("click", btnCambiarLetraEnTextoHandler);
     document.querySelector("#btnE11").addEventListener("click", btnTextoMayusMinusHandler);
     document.querySelector("#btnE12").addEventListener("click", btnContarMayusYMinusHandler);
     document.querySelector("#btnE13").addEventListener("click", btnEsPalindromeHandler);
     document.querySelector("#btnE14").addEventListener("click", btnContarPrimerLetraPalabraHandler);
     document.querySelector("#btnE15").addEventListener("click", btnMostrarPenultimaAparicionHandler);
     document.querySelector("#btnE16").addEventListener("click", btnValidarCedulaHandler);
}

//EJERCICIO 1
function btnInvertirTextoHandler() {
     let textoParaInvertir = document.querySelector("#txtParaInvertirE1").value;

     let resultado = invertirTexto(textoParaInvertir);

     document.querySelector("#resE1").innerHTML = resultado;
}

function invertirTexto(texto) {
     let invertido = "";

     for (let i = texto.length - 1; i >= 0; i--) {
          invertido += texto[i];
     }

     return invertido;
}

//EJERCICIO 2
function btnContarLetraEnTextoHandler() {
     let texto = document.querySelector("#txtE2").value;
     let letra = document.querySelector("#txtLetraRepeticionesE2").value;

     let cantRepeticionesLetra = contarLetraEnTexto(texto, letra);

     document.querySelector("#resE2").innerHTML = cantRepeticionesLetra;
}

function contarLetraEnTexto(texto, letra) {
     let contadorRepeticiones = 0;

     for (let indCaracter = 0; indCaracter <= texto.length - 1; indCaracter++) {
          if (texto[indCaracter].toUpperCase() == letra.toUpperCase()) {
               contadorRepeticiones++;
          }
     }

     return contadorRepeticiones;

}



//EJERCICIO 3
function btnContarVocalesEnTextoHandler() {
     let texto = document.querySelector("#txtE3").value;

     let cantRepeticiones = contarVocalesEnTexto(texto);

     document.querySelector("#resE3").innerHTML = cantRepeticiones;
}

function contarVocalesEnTexto(texto) {
     let contadorRepeticiones = 0;

     for (let indCaracter = 0; indCaracter <= texto.length - 1; indCaracter++) {
          if (texto[indCaracter].toUpperCase() == "A" || texto[indCaracter].toUpperCase() == "E" || texto[indCaracter].toUpperCase() == "I" || texto[indCaracter].toUpperCase() == "O" || texto[indCaracter].toUpperCase() == "U") {
               contadorRepeticiones++;
          }
     }

     return contadorRepeticiones;
}



//EJERCICIO 4
function btnConvertirAMinusculaHandler() {
     let textoParaConvertir = document.querySelector("#txtE4").value;

     let resultado = convertirAMinuscula(textoParaConvertir);

     document.querySelector("#resE4").innerHTML = resultado;
}

function convertirAMinuscula(texto) {
     let resultado = "";

     for (let i = 0; i <= texto.length - 1; i++) {
          resultado += texto[i].toLowerCase();
     }

     return resultado;
}





//EJERCICIO 5
function btnConvertirAMayusculaHandler() {
     let textoParaConvertir = document.querySelector("#txtE5").value;

     let resultado = convertirAMayuscula(textoParaConvertir);

     document.querySelector("#resE5").innerHTML = resultado;
}

function convertirAMayuscula(texto) {
     let resultado = "";

     for (let i = 0; i <= texto.length - 1; i++) {
          resultado += texto[i].toUpperCase();
     }

     return resultado;
}





//EJERCICIO 6
function btnContieneSubCadenaHandler() {
     let texto = document.querySelector("#txtE6").value;
     let textoSubCadena = document.querySelector("#txtSubCadenaE10").value;

     let contieneSubCadBool = contieneSubCadena(texto, textoSubCadena);

     if (contieneSubCadBool) {
          resultado = "'" + textoSubCadena + "'" + " está contenido en " + "'" + texto + "'";
     } else {
          resultado = "'" + textoSubCadena + "'" + " NO está contenido en " + "'" + texto + "'";
     }

     document.querySelector("#resE6").innerHTML = resultado;
}

function contieneSubCadena(texto, subCad) {
     let contieneSub = false;

     let indLetraTexto = 0;
     let indLetraSubcadena = 0;

     while (indLetraTexto <= texto.length - 1) {
          if (texto[indLetraTexto].toUpperCase() == subCad[0].toUpperCase()) {
               while (indLetraSubcadena <= subCad.length - 1 && texto[indLetraTexto].toUpperCase() == subCad[indLetraSubcadena].toUpperCase()) {
                    indLetraSubcadena++;
                    indLetraTexto++;
               }
               if (indLetraSubcadena > subCad.length - 1) {
                    contieneSub = true;
               }
          }
          indLetraTexto++;
     }

     return contieneSub;
}





//EJERCICIO 7
function btnContarPalabrasHandler() {
     let texto = document.querySelector("#txtPalabraE7").value;

     let resultado;

     if (texto != "") {
          resultado = contarPalabrasTexto(texto);
     } else {
          resultado = "Ingrese un texto";
     }

     document.querySelector("#resE7").innerHTML = resultado;
}

function contarPalabrasTexto(texto) {
     let contadorPalabras = 0;

     for (let i = 0; i <= texto.length - 1; i++) {
          if (texto[i] != " ") {
               while (i <= texto.length - 1 && texto[i] != " ") {
                    i++;
               }
               contadorPalabras++;
          }
     }

     return contadorPalabras;
}





//EJERCICIO 8
function btnPrimeraYUltimaLetraIgualesHandler() {
     let texto = document.querySelector("#txtPalabraE8").value;

     let resultado;

     if (texto != "") {
          resultado = primeraYUltimaLetraIguales(texto);
     } else {
          resultado = "Ingrese un texto";
     }

     document.querySelector("#resE8").innerHTML = resultado;
}

function primeraYUltimaLetraIguales(texto) {
     return texto[0] == texto[texto.length - 1]
}





//EJERCICIO 9
function btnMostrarDeptoHandler() {
     let texto = document.querySelector("#txtPalabraE9").value;

     let resultado;

     
     if (texto != "") {
          resultado = mostrarDepto(texto);
     } else {
          resultado = "Ingrese un texto";
     }
     
     document.querySelector("#resE9").innerHTML = resultado;
}

function mostrarDepto(texto) { 
     let resultado = ""
     
     switch (texto[0]) {
          case "-":
               resultado = "Ingrese su matricula";
               break
          case "A":
               resultado = "Canelones";
               break
          case "B":
               resultado = "Maldonado";
               break
          case "C":
               resultado = "Rocha";
               break
          case "D":
               resultado = "Treinta y Tres";
               break
          case "E":
               resultado = "Cerro Largo";
               break
          case "F":
               resultado = "Rivera";
               break
          case "G":
               resultado = "Artigas";
               break
          case "H":
               resultado = "Salto";
               break
          case "I":
               resultado = "Paysandú";
               break
          case "J":
               resultado = "Río Negro";
               break
          case "K":
               resultado = "Soriano";
               break
          case "L":
               resultado = "Colonia";
               break
          case "M":
               resultado = "San José";
               break
          case "N":
               resultado = "Flores";
               break
          case "O":
               resultado = "Florida";
               break
          case "P":
               resultado = "Lavalleja";
               break
          case "Q":
               resultado = "Durazno";
               break
          case "R":
               resultado = "Tacuarembó";
               break
          case "S":
               resultado = "Montevideo";
               break
     }
     
     return resultado
}






//EJERCICIO 10
// function btnCambiarLetraEnTextoHandler() {
//      let texto = document.querySelector("#txtE10").value;
//      let letra = document.querySelector("#txtLetraDeCambioE10").value;

//      let resultado = cambiarLetraEnTexto(texto, letra);

//      document.querySelector("#resE10").innerHTML = resultado;
// }

// function cambiarLetraEnTexto(texto, letra) {
//      let textoCambiado = "";

//      for (let indCaracter = 0; indCaracter <= texto.length - 1; indCaracter++) {
//           if (texto[indCaracter].toUpperCase() == letra.toUpperCase()) {
//                textoCambiado += "*";
//           } else {
//                textoCambiado += texto[indCaracter];
//           }
//      }

//      return textoCambiado;
// }



//EJERCICIO 11
function btnTextoMayusMinusHandler() {
     let textoParaConvertir = document.querySelector("#txtE11").value;

     let resultado = textoMayusMinus(textoParaConvertir);

     document.querySelector("#resE11").innerHTML = resultado;
}

function textoMayusMinus(texto) {
     let resultado = "";

     for (let i = 0; i <= texto.length - 1; i++) {
          if (i != 0) {
               resultado += texto[i].toLowerCase();
          } else {
               resultado += texto[i].toUpperCase();
          }
     }

     return resultado;
}






//EJERCICIO 12

let contadorMayusculas = 0
let contadorMinusculas = 0

function btnContarMayusYMinusHandler() {
     let texto = document.querySelector("#txtE12").value;

     let resultado
     if (texto != "") {
          resultado = contarMayusYMinus(texto);
     } else {
          resultado = ""
     }

     contadorMinusculas = 0
     contadorMayusculas = 0

     document.querySelector("#resE12").innerHTML = resultado;
}

function contarMayusYMinus(texto) {
     let resultado;
     for (let indLetra = 0; indLetra <= texto.length - 1; indLetra++) {
          if (texto[indLetra].charCodeAt() >= 65 && texto[indLetra].charCodeAt() <= 90) {
               contadorMayusculas++;
          } else if (texto[indLetra].charCodeAt() >= 97 && texto[indLetra].charCodeAt() <= 122){
               contadorMinusculas++;
          }
     }

     resultado = "Nro de MAYUSCULAS: " + contadorMayusculas + "<br>"
     resultado += "Nro de minusculas: " + contadorMinusculas

     return resultado
}





//EJERCICIO 13
function btnEsPalindromeHandler() {
     let textoIngresado = document.querySelector("#txtE13").value;

     let textoSinEspacios = sacarEspacios(textoIngresado).toLowerCase();

     let textoEsPalindrome = esPalindrome(textoSinEspacios)

     document.querySelector("#resE13").innerHTML = textoEsPalindrome;
}

function sacarEspacios(texto) {
     let sinEspacios = ""

     for(let i = 0; i <= texto.length - 1; i++){
          if (texto[i] != " " || texto[i].charCodeAt() ) {
               sinEspacios += texto[i]
          }
     }
     
     return sinEspacios
}

function esPalindrome(texto) {
     let i = 0;

     while (texto[i] == texto[texto.length - 1 - i] && i <= (texto.length - 1) / 2) {
          i++
     }

     return i > (texto.length - 1) / 2
}


// function esPalindrome(texto) {
//      let resultado = "";
//
//      i = 0
//      while (i < len(frase)//2) and (frase[i].lower() == frase[-i-1].lower()):
//           i += 1
//      return (i == len(frase)//2)
//
//      for (let i = 0; i <= texto.length - 1; i++) {
//           if (i != 0) {
//                resultado += texto[i].toLowerCase();
//           } else {
//                resultado += texto[i].toUpperCase();
//           }
//      }
//
//      return resultado;
// }




//EJERCICIO 14
function btnContarPrimerLetraPalabraHandler() {
     let palabra = document.querySelector("#txtPalabraE14").value;

     let cantRepeticiones = contarPrimerLetraPalabra(palabra);

     document.querySelector("#resE14").innerHTML = cantRepeticiones;
}

function contarPrimerLetraPalabra(palabra) {
     let contadorRepeticiones = 1;

     for (let indCaracter = 1; indCaracter <= palabra.length - 1; indCaracter++) {
          if (palabra[indCaracter].toUpperCase() == palabra[0].toUpperCase()) {
               contadorRepeticiones++;
          }
     }

     return contadorRepeticiones;
}




//EJERCICIO 15
function btnMostrarPenultimaAparicionHandler() {
     let texto = document.querySelector("#txtPalabraE15").value;
     //let letra = document.querySelector("#txtPalabraE15").value;
     let letra = "a";
     
     let posicionPenultimaRepe = mostrarPenultimaAparicion(texto, letra);

     let resultado;
     if (posicionPenultimaRepe != -1) {
          resultado = `La penultima aparicion de ${letra} esta en la posicion ${posicionPenultimaRepe}.`;
     } else {
          resultado = `La letra indicada ( ${letra} ) no aparece en el texto o esta solamente una vez`;
     }
     
     document.querySelector("#resE15").innerHTML = resultado
}

function mostrarPenultimaAparicion(texto, letra) {
     let penultimaAparicion = -1;
     let ultimaAparicion = -1;

     for (let i = 0; i < texto.length; i++) {
          if (texto[i].toLowerCase() == letra.toLowerCase()) {
               penultimaAparicion = ultimaAparicion;
               ultimaAparicion = i;
          }
     }

     return penultimaAparicion
}


//EJERCICIO 10
function btnCambiarLetraEnTextoHandler() {
     let texto = document.querySelector("#txtE10").value;
     let letra = document.querySelector("#txtLetraDeCambioE10").value;

     let resultado = cambiarLetraEnTexto(texto, letra);

     document.querySelector("#resE10").innerHTML = resultado;
}

function cambiarLetraEnTexto(texto, letra) {
     let textoCambiado = "";

     for (let indCaracter = 0; indCaracter <= texto.length - 1; indCaracter++) {
          if (texto[indCaracter].toUpperCase() == letra.toUpperCase()) {
               textoCambiado += "";
          } else {
               textoCambiado += texto[indCaracter];
          }
     }

     return textoCambiado;
}




//EJERCICIO 16
function btnValidarCedulaHandler() {
     let cedula = document.querySelector("#txtCedulaE16").value;
     //let letra = document.querySelector("#txtPalabraE15").value;
     
     cedula = convertirCedula(cedula);
     
     
     
     document.querySelector("#resE16").innerHTML = validarCedula(cedula);
}

function convertirCedula(cedulaACambiar) {    
     cedulaACambiar = cambiarLetraEnTexto(cedulaACambiar, ".")
     cedulaACambiar = cambiarLetraEnTexto(cedulaACambiar, "-")
     
     return cedulaACambiar
}

function validarCedula(ci) {
     let digitoVerificador = parseInt(ci[ci.length-1]) % 10
     let sumaVerificadora 
     
     if (ci.length == 8) {
          sumaVerificadora = parseInt(ci[0]) * 2 + parseInt(ci[1]) * 9 + parseInt(ci[2]) * 8 + parseInt(ci[3]) * 7 + parseInt(ci[4]) * 6 + parseInt(ci[5]) * 3 + parseInt(ci[6]) * 4
     } else {
          sumaVerificadora = parseInt(ci[0]) * 2 + parseInt(ci[1]) * 9 + parseInt(ci[2]) * 8 + parseInt(ci[3]) * 7 + parseInt(ci[4]) * 6 + parseInt(ci[5]) * 3
     }
     
     return (10 - sumaVerificadora % 10) == digitoVerificador
}




inicializar();

//Ejercicio 

function inicializar() {
     document.querySelector("#btnE1").addEventListener("click", bloqueDeCodigoE1);
     document.querySelector("#btnE2").addEventListener("click", esMayorA10);
     document.querySelector("#btnE3").addEventListener("click", esMayorMenorA20)
     document.querySelector("#btnE4").addEventListener("click", convertirNegAPos)
     document.querySelector("#btnE5").addEventListener("click", mayor10Menor20)
     document.querySelector("#btnE6").addEventListener("click", esMultiploDe3Y7)
     document.querySelector("#btnE7").addEventListener("click", noEstaEntre)
     document.querySelector("#btnE8").addEventListener("click", entre10Y30)
     document.querySelector("#btnE9").addEventListener("click", planDia);
     document.querySelector("#btnE10").addEventListener("click", restarMenorAlMayor);
     document.querySelector("#btnE11").addEventListener("click", calculadoraMatematica);
     document.querySelector("#btnE11").addEventListener("click", calculadoraMatematica);
     document.querySelector("#btnE12").addEventListener("click", esVocal);
     document.querySelector("#btnE13").addEventListener("click", esMultiploUnoDeOtro);
     document.querySelector("#btnE14").addEventListener("click", millasE14);
     document.querySelector("#btnE15").addEventListener("click", mostrarDepartamento);
     document.querySelector("#btnE16").addEventListener("click", esElMasGrande);
     document.querySelector("#btnE17").addEventListener("click", estaEntre0Y10);
     document.querySelector("#btnE18").addEventListener("click", sumaValorAbs);
     document.querySelector("#btnE19").addEventListener("click", multDe5YMayoresA20);
     document.querySelector("#btnE20").addEventListener("click", calcularReceta);
     document.querySelector("#btnE20").addEventListener("click", calcularReceta);
     document.querySelector("#btnE21").addEventListener("click", casaInteresSocial);
     document.querySelector("#btnE22").addEventListener("click", pagoConTarjeta);
     document.querySelector("#btnE23").addEventListener("click", solucionE23);
     document.querySelector("#btnDefStock").addEventListener("click", definirStock);
     document.querySelector("#btnE25").addEventListener("click", compraCamara);
     document.querySelector("#btnE26").addEventListener("click", estadiaHotelTermal);
     document.querySelector("#btnE27").addEventListener("click", adivinaElNumero);
     document.querySelector("#btnJ1").addEventListener("click", cuentaPuntosJ1);
     document.querySelector("#btnJ2").addEventListener("click", cuentaPuntosJ2);
}


//Ejercicio 1

function bloqueDeCodigoE1() {
     let numIngresado = parseInt(document.querySelector("#txtE1").value);
     let resultado;

     if (numIngresado < 0) {
          // Es negativo
          resultado = "Es negativo.";
     } else {
          // Es positivo
          resultado = "Es positivo.";
     }
     document.querySelector("#divResultadoE1").innerHTML = resultado;
}



//Ejercicio 2

function esMayorA10() {
     let numIngresado = parseInt(document.querySelector("#txtE2").value);

     if (numIngresado > 10) {
          alert("Mayor que diez")
     }
}

//Ejercicio 3

function esMayorMenorA20() {
     let numIngresado = parseInt(document.querySelector("#txtE3").value)

     if (numIngresado > 20) {
          document.querySelector("#resE3").innerHTML = numIngresado + " es mayor que 20"
     } else {
          document.querySelector("#resE3").innerHTML = numIngresado + " es menor o igual que 20"
     }
}

//Ejercicio 4

function convertirNegAPos() {
     let numIngresado = parseInt(document.querySelector("#txtE4").value);

     if (numIngresado < 0) {
          numIngresado *= (-1);
     }
     document.querySelector("#resE4").innerHTML = numIngresado;
}

//Ejercicio 5

function mayor10Menor20() {
     let numIngresado = parseInt(document.querySelector("#txtE5").value);

     let resultado
     if (numIngresado > 10 && numIngresado < 20) {
          resultado = "El numero ESTÁ entre 10 y 20";
     } else {
          resultado = "El numero NO esta entre 10 y 20"
     }
     document.querySelector("#resE5").innerHTML = resultado;
}

//Ejercicio 6

function esMultiploDe3Y7() {
     let numIngresado = parseInt(document.querySelector("#txtE6").value);

     let resultado
     if ((numIngresado % 7 == 0) && (numIngresado % 3 == 0)) {
          resultado = "El numero ES MULTIPLO de 7 y 3"
     } else {
          resultado = "El numero NO ES MULTIPLO de 7 y 3"
     }
     document.querySelector("#resE6").innerHTML = resultado
}

//Ejercicio 7

function noEstaEntre() {
     let numIngresado = parseInt(document.querySelector("#txtE7").value);

     let resultado
     if (numIngresado >= -20 && numIngresado <= 20) {
          resultado = "NO CUMPLE";
     } else {
          resultado = "CUMPLE"
     }
     document.querySelector("#resE7").innerHTML = resultado;
}

//Ejercicio 8

function entre10Y30() {
     let numIngresado = parseInt(document.querySelector("#txtE8").value);

     let resultado = numIngresado
     if (numIngresado > 30) {
          resultado += " es MAYOR que 30";
     } else if (numIngresado < 10) {
          resultado += " es MENOR que 10"
     } else {
          resultado += " esta ENTRE 10 y 30"
     }
     document.querySelector("#resE8").innerHTML = resultado;

}

//Ejercicio 9

function planDia() {
     let dia = document.querySelector("#selDia").value;
     let temperatura = document.querySelector("#txtTemperatura").value;
     let resultado = "Levantarse." + "<br>";

     if (temperatura < 10) {
          resultado += "Abrigarse mucho." + "<br>"
     } else if (temperatura > 20) {
          resultado += "Ponerse ropa comoda." + "<br>"
     } else {
          resultado += "Abrigo moderado." + "<br>"
     }

     if (dia == "Domingo") {
          resultado += "Quedarse en casa, hoy no trabaja."
     } else {
          resultado += "Ir al trabajo"
     }

     document.querySelector("#resE9").innerHTML = resultado;
}

//Ejercicio 10

function restarMenorAlMayor() {
     let num1 = parseInt(document.querySelector("#num1E10").value);
     let num2 = parseInt(document.querySelector("#num2E10").value);

     let resultado

     if (num1 >= num2) {
          resultado = num1 - num2
     } else {
          resultado = num2 - num1
     }

     document.querySelector("#resE10").innerHTML = resultado
}

//Ejercicio 11

function calculadoraMatematica() {
     let num1 = parseInt(document.querySelector("#num1E11").value);
     let num2 = parseInt(document.querySelector("#num2E11").value);
     let operacion = document.querySelector("#operacionMatematica").value

     let resultado

     if (operacion == "S") {
          resultado = num1 + num2
     } else if (operacion == "R") {
          resultado = num1 - num2
     } else if (operacion == "M") {
          resultado = num1 * num2
     } else {
          resultado = num1 / num2
     }

     document.querySelector("#resE11").innerHTML = resultado
}

//Ejercicio 12

function esVocal() {
     let letra = document.querySelector("#txtLetra").value;

     let resultado

     if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"
          || letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
          resultado = "ES una vocal"
     } else {
          resultado = "NO es una vocal"
     }

     document.querySelector("#resE12").innerHTML = resultado
}

//Ejercicio 13

function esMultiploUnoDeOtro() {
     let num1 = parseInt(document.querySelector("#num1E13").value);
     let num2 = parseInt(document.querySelector("#num2E13").value);

     let resultado

     if (num1 % num2 == 0) {
          resultado = num1 + " es multiplo de " + num2;
     } else {
          resultado = num1 + " NO es multiplo de " + num2;
     }

     document.querySelector("#resE13").innerHTML = resultado
}

//Ejercicio 14

function millasE14() {
     let millasIngresadas = parseInt(document.querySelector("#txtMillasE14").value);
     let esPlanPlus = document.querySelector("#selectPlanPlusE14").value;
     let millasTotales = millasIngresadas;

     let resultado = "";

     if (esPlanPlus == "---") {
          resultado = "Debe indicar si es Plan Plus o no"
     }
     else {
          if (esPlanPlus == "Si") {
               millasTotales = millasIngresadas * 2;
          }
          if (millasTotales >= 60000) {
               resultado = "Puede viajar a Europa (destino lejano).";
          }
          else if (millasTotales >= 30000) {
               resultado = "Puede viajar a America del Norte (destino intermedio).";
          }
          else if (millasTotales >= 15000) {
               resultado = "Puede viajar a America del Sur (destino cercano).";
          }
          else {
               resultado = "No tiene millas suficientes para viajar"
          }
     }

     document.querySelector("#resE14").innerHTML = resultado;

}

//Ejercicio 15

function mostrarDepartamento() {
     let opcionSeleccionada = document.querySelector("#txtDepartamento").value;

     let resultado = ""

     switch (opcionSeleccionada) {
          case "-":
               resultado = "No ha ingresado una opcion valida";
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

     document.querySelector("#resE15").innerHTML = resultado;
}

//Ejercicio 16

function esElMasGrande() {
     let num1 = parseInt(document.querySelector("#num1E16").value);
     let num2 = parseInt(document.querySelector("#num2E16").value);
     let num3 = parseInt(document.querySelector("#num3E16").value);

     let resultado;

     if (num1 > num2 && num1 > num3) {
          resultado = num1 + " es el mas grande de todos (Como el Diegote)"
     } else {
          resultado = num1 + " no es el mas grande de todos"
     };

     document.querySelector("#resE16").innerHTML = resultado;
}

//Ejercicio 17

function estaEntre0Y10() {
     let numIngresado = parseInt(document.querySelector("#txtE17").value);

     let resultado;

     if (numIngresado < 0 || numIngresado > 10) {
          resultado = numIngresado + " esta fuera del rango"
     } else {
          resultado = numIngresado + " esta dentro del rango"
     }

     document.querySelector("#resE17").innerHTML = resultado;
}

//Ejercicio 18

let acumuladorE18 = 0;
let contadorE18 = 0;


function sumaValorAbs() {
     if (contadorE18 < 5) {
          let numIngresado = parseInt(document.querySelector("#txtE18").value)
          contadorE18++
          if (numIngresado < 0) {
               numIngresado *= (-1)
          }
          acumuladorE18 += numIngresado
     } else if (contadorE18 == 6) {
          document.querySelector("#resE18").innerHTML = acumuladorE18;
     }
}

let contadorE19 = 0;
let multiplosDe5 = 0;
let mayoresA20 = 0;
let multiplosDe5YMayoresA20 = 0;

//Ejercicio 19

function multDe5YMayoresA20() {
     if (contadorE19 != 5) {
          let numIngresado = parseInt(document.querySelector("#txtE19").value);
          if (numIngresado % 5 == 0) {
               multiplosDe5++
          }
          if (numIngresado > 20) {
               mayoresA20++
          }
          if ((numIngresado % 5 == 0) && (numIngresado > 20)) {
               multiplosDe5YMayoresA20++
          }
          contadorE19++
     } else if (contadorE19 == 5) {
          let resultado = "La cantidad de multiplos de 5 son: " + multiplosDe5 + "<br>" + "La cantidad de numeros mayores a 20 son: " + mayoresA20 + "<br>" + "Los numeros que cumplen con ambas condiciones son: " + multiplosDe5YMayoresA20
          document.querySelector("#resE19").innerHTML = resultado
     }
}

//Ejercicio 20

function calcularReceta() {
     let recetaAgua = parseInt(document.querySelector("#txtAguaE20").value);
     let recetaAzucar = parseInt(document.querySelector("#txtAzucarE20").value);
     let recetaHarina = parseInt(document.querySelector("#txtHarinaE20").value) / 100;
     let recetaAceite = parseInt(document.querySelector("#txtAceiteE20").value);

     cantRecetas = recetaAgua;
     if (recetaAzucar < cantRecetas) {
          cantRecetas = recetaAzucar
     }
     if (recetaHarina < cantRecetas) {
          cantRecetas = recetaHarina
     }
     if (recetaAceite < cantRecetas) {
          cantRecetas = recetaAceite
     }

     document.querySelector("#resE20").innerHTML = cantRecetas;
}

//Ejercicio 21

function casaInteresSocial() {
     let ingresosCliente = parseInt(document.querySelector("#txtIngresoE21").value);
     let costoCasa = parseInt(document.querySelector("#txtCasaE21").value);
     let pagoMensual
     let primerPago

     if (ingresosCliente < 20000) {
          primerPago = costoCasa * 0.15;
          pagoMensual = (costoCasa - primerPago) / (7 * 12);
     } else {
          primerPago = costoCasa * 0.30;
          pagoMensual = (costoCasa - primerPago) / 12;
     }

     let resultado = "El costo de la casa (" + costoCasa + ") <br>"
     resultado += "sera cubierto mensualmente con un monto de " + pagoMensual + ",<br>"
     resultado += "con una seña inicial de " + primerPago + "."

     document.querySelector("#resE21").innerHTML = resultado
}


//Ejercicio 22

function pagoConTarjeta() {
     let precioCompra = parseInt(document.querySelector("#txtIngresoE22").value)
     let usaTarjeta = document.querySelector("#selUsaTarjeta").value
     let precioFinal

     if (usaTarjeta == "si" && precioCompra < 10000) {
          precioFinal = precioCompra - (precioCompra * 0.04)
     } else {
          precioFinal = precioCompra
     }

     document.querySelector("#resE22").innerHTML = "$" + precioFinal
}

//Ejercicio 23

let notaMinima = Number.POSITIVE_INFINITY;
let notaMaxima = Number.NEGATIVE_INFINITY;
let sumaNotas = 0; // Para el primedio
let cantidadNotas = 0; // Para el promedio
let cantidadPerdieron = 0; // (nota < 70)
let cantidadSalvaron = 0; // (nota >= 70)
let cantidadMuyBuenaNota = 0; // (nota > 90)


function solucionE23() {
     let resultado = '';
     let notaIngresada = document.querySelector("#txtE23").value;
     let notaIngresadaNumerica = parseInt(notaIngresada);

     let notaEsUnNumero = !isNaN(notaIngresadaNumerica);

     if (notaEsUnNumero) {
          if (notaIngresadaNumerica >= 0 && notaIngresadaNumerica <= 100) {
               // Actualizo los datos que voy a utilizar para calcular el promedio.
               cantidadNotas++;
               // cantidadNotas += 1;
               // cantidadNotas = cantidadNotas + 1;
               sumaNotas += notaIngresadaNumerica;

               // Actualizo la cantidad que perdieron o salvaron, y si salvó, me fijo si lo hizo con muy buena nota.
               if (notaIngresadaNumerica < 70) {
                    cantidadPerdieron++;
               } else {
                    cantidadSalvaron++;
                    if (notaIngresadaNumerica > 90) {
                         cantidadMuyBuenaNota++;
                    }
               }

               // Si corresponde, actualizo el mínimo.
               if (notaIngresadaNumerica < notaMinima) {
                    notaMinima = notaIngresadaNumerica;
               }

               // Si corresponde, actualizo el máximo.
               if (notaIngresadaNumerica > notaMaxima) {
                    notaMaxima = notaIngresadaNumerica;
               }

               // Calculo el promedio.
               let promedioHastaElMomento = sumaNotas / cantidadNotas;

               // Muestro los datos.
               resultado = "Cantidad que perdieron: " + cantidadPerdieron + ".<br>"
               resultado += "Cantidad que salvaron: " + cantidadSalvaron + ".<br>";
               resultado += "Cantidad que salvaron con muy buena nota: " + cantidadMuyBuenaNota + ".<br>";
               resultado += "Nota mínima: " + notaMinima + ".<br>";
               resultado += "Nota máxima: " + notaMaxima + ".<br>";
               resultado += "Promedio de notas: " + promedioHastaElMomento + ".";
          } else {
               resultado = "La nota debe ser un número entre 0 y 100.";
          }
     } else {
          resultado = "La nota ingresada debe ser un número.";
     }

     document.querySelector("#divResultadoE23").innerHTML = resultado;
}

//Ejercicio 25

let stockCamarasDisponibles = Number.NEGATIVE_INFINITY;

function definirStock() {
     let stock = parseInt(document.querySelector("#cantCamaras").value);
     stockCamarasDisponibles = stock
}

let contadorDePedidos = 0;
let nombreMejorCliente = "";
let pedidoMasGrande = 0;

function compraCamara() {
     let nomCliente = document.querySelector("#nombreCliente").value;
     let camsPedidasCliente = parseInt(document.querySelector("#camarasPedidasCliente").value);
     
     let resultado = "";
     
     if (camsPedidasCliente <= stockCamarasDisponibles) {
          contadorDePedidos++
          stockCamarasDisponibles -= camsPedidasCliente;
          if (camsPedidasCliente > pedidoMasGrande) {
               pedidoMasGrande = camsPedidasCliente;
               nombreMejorCliente = nomCliente;
          }
     } else if (camsPedidasCliente > stockCamarasDisponibles) {
          resultado += "No hay suficientes camaras para satisfacer tu pedido <br>";
     }
     if (stockCamarasDisponibles == 0) {
          document.getElementById("btnE25").disabled = true
     }
     if (contadorDePedidos > 0) {
          resultado += "El mayor cliente es " + nombreMejorCliente + ".<br>";
     }
     resultado += "Hasta el momento se hicieron " + contadorDePedidos + " pedidos.";
     document.querySelector("#cantPedidos").innerHTML = resultado;
}

//Ejercicio 26

function estadiaHotelTermal() {
     let diasHospedadosIngresados = parseInt(document.querySelector("#txtDiasHospedados").value);
     let diasHospedadosRegalo = 0
     let formaDePago = document.querySelector("#selFormaDePago").value;
     let resultado = diasHospedadosIngresados + " noche/s pagada/s con " + formaDePago + " -> ";

     if (diasHospedadosIngresados < 3) {
          resultado += " no hay noches de regalo.<br> El usuario se hospeda ";
     } else {
          if (diasHospedadosIngresados < 7) {
               diasHospedadosRegalo = 1;
          } else {
               diasHospedadosRegalo = 2
               if (formaDePago == "tarjeta") {
                    diasHospedadosRegalo += 1
               }
          }
          resultado += "hay " + diasHospedadosRegalo + " noche/s de regalo.<br> El usuario se hospeda "
     }
     resultado += (diasHospedadosIngresados + diasHospedadosRegalo) + " noche/s.<br> El costo total son $ " + diasHospedadosIngresados * 40;

     document.querySelector("#resE26").innerHTML = resultado
}

//Ejercicio 27

let contadorIntentos = 0


function adivinaElNumero() {
     let numeroSecreto = parseInt(document.querySelector("#txtNumSecreto").value);
     let intentoNumero = parseInt(document.querySelector("#txtIntento").value);
     contadorIntentos++

     if (intentoNumero > numeroSecreto) {
          if (intentoNumero - numeroSecreto <= 4) { 
               resultado = "Estas muy pero muy cerca"
          }
          else if (intentoNumero - numeroSecreto <= 9) { 
               resultado = "Cada vez mas cerca"
          }
          else if (intentoNumero - numeroSecreto <= 15) { 
               resultado = "Te estas acercando"
          }
          else { 
               resultado = "Estas lejos"
          }
     } else if (numeroSecreto > intentoNumero) {
          if (numeroSecreto - intentoNumero <= 4) { 
               resultado = "Estas muy pero muy cerca"
          }
          else if (numeroSecreto - intentoNumero <= 9) { 
               resultado = "Cada vez mas cerca"
          }
          else if (numeroSecreto - intentoNumero <= 15) { 
               resultado = "Te estas acercando"
          }
          else { 
               resultado = "Estas lejos"
          }
     } else if (numeroSecreto == intentoNumero) {
          resultado = "Le embocaste!! Te tomo " + contadorIntentos + " intentos."
     }


     
     document.querySelector("#resE27").innerHTML = resultado;

}

//Ejercicio 28

let ptsJugador1 = 0
let ptsJugador2 = 0

function cuentaPuntosJ1() {
     ptsJugador1++
     let resultado = "Jugador 1 | Jugador 2 <br>       " + ptsJugador1 + " | " + ptsJugador2;
     document.querySelector("#ptsJugadores").innerHTML = resultado
     if (ptsJugador1 >= 30 || ptsJugador2 >= 30) {
          document.getElementById("btnJ1").disabled = true;
          document.getElementById("btnJ2").disabled = true;

          //OTRA OPCION (SACANDO LOS BOTONES, EN VEZ DE DESHABILITARLOS)
          // document.querySelector("#btnJ1").style.display = "none";
          // document.querySelector("#btnJ2").style.display = "none";
          document.querySelector("#ptsJugadores").innerHTML = "El score final es <br>" + ptsJugador1 + " - " + ptsJugador2
     }
}
function cuentaPuntosJ2() {
     ptsJugador2++
     let resultado = "Jugador 1 | Jugador 2 <br>       " + ptsJugador1 + " | " + ptsJugador2
     document.querySelector("#ptsJugadores").innerHTML = resultado
     if (ptsJugador1 >= 30 || ptsJugador2 >= 30) {
          document.getElementById("btnJ1").disabled = true;
          document.getElementById("btnJ2").disabled = true;
          
          //OTRA OPCION (SACANDO LOS BOTONES, EN VEZ DE DESHABILITARLOS)
          // document.querySelector("#btnJ1").style.display = "none";
          // document.querySelector("#btnJ2").style.display = "none";
          document.querySelector("#ptsJugadores").innerHTML = "El score final es <br>" + ptsJugador1 + " - " + ptsJugador2
     }
}

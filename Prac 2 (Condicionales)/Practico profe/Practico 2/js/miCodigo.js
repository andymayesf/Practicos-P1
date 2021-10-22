inicializar();

function inicializar() {
    document.querySelector("#btnE1").addEventListener("click", bloqueDeCodigoE1);
    document.querySelector("#btnE23").addEventListener("click", solucionE23);
}

function bloqueDeCodigoE1() {
    let numeroIngresado = document.querySelector("#txtE1").value;
    let numeroIngresadoNumerico = parseInt(numeroIngresado);

    let resultado;
    if (numeroIngresadoNumerico < 0) {
        // Es negativo
        resultado = "Es negativo.";
    } else {
        // Es positivo
        resultado = "Es positivo.";
    }
    document.querySelector("#divResultadoE1").innerHTML = resultado;
}

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
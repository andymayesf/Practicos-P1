inicializar();

function inicializar() {
    document.querySelector("#btnE1").addEventListener("click", mostrarNumeros1a1000);
    document.querySelector("#btnE2").addEventListener("click", mostrarNumeros_100a10);
    document.querySelector("#btnE3").addEventListener("click", mostrarNumeros40a10);
    document.querySelector("#btnE4").addEventListener("click", mostrarNumeros20a_30);
    document.querySelector("#btnE5").addEventListener("click", mostrarMultiplosDe5Entre1Y450);
    document.querySelector("#btnE6").addEventListener("click", mostrarMultiplosDe4Entre_33Y230);
    document.querySelector("#btnE7").addEventListener("click", lineaDeGuiones);
    document.querySelector("#btnE8").addEventListener("click", mostrarNumerosEntreBordesIndicados);
    document.querySelector("#btnE9").addEventListener("click", productoMedianteSumas);
    document.querySelector("#btnE10").addEventListener("click", productoNumerosComprendidos);
    document.querySelector("#btnE11").addEventListener("click", multiplosNumsComprendidos);
    document.querySelector("#btnE12").addEventListener("click", factorialNum);
    document.querySelector("#btnE13").addEventListener("click", crearRectangulo);
    document.querySelector("#btnE14").addEventListener("click", cantidadDigitos);
    document.querySelector("#btnE15").addEventListener("click", divisionEntre20);
    document.querySelector("#btnE16").addEventListener("click", primerMultiploEntre);
    document.querySelector("#btnE17").addEventListener("click", divisionMedianteRestas);
    document.querySelector("#btnE18").addEventListener("click", multiplosYParesEntre30Y200);
    document.querySelector("#btnE19").addEventListener("click", crearCalendario);
    document.querySelector("#btnE20").addEventListener("click", maximoComunDivisor);

}

function mostrarNumeros1a1000() {
    let resultado = "";

    for (let i = 1; i <= 1000; i++) {
        resultado += i + "<br>";
    }


    document.querySelector("#resE1").innerHTML = resultado;
}

function mostrarNumeros_100a10() {
    let resultado = "";

    for (let i = -100; i <= 10; i++) {
        resultado += i + " ";
    }

    document.querySelector("#resE2").innerHTML = resultado;
}

function mostrarNumeros40a10() {
    let resultado = "";

    for (let i = 40; i >= 10; i--) {
        resultado += i + " ";
    }

    document.querySelector("#resE3").innerHTML = resultado;
}

function mostrarNumeros20a_30() {
    let resultado = "";

    for (let i = 20; i >= -30; i--) {
        resultado += i + " ";
    }

    document.querySelector("#resE4").innerHTML = resultado;
}

function mostrarMultiplosDe5Entre1Y450() {
    let resultado = "";

    for (let i = 5; i <= 450; i += 5) {
        resultado += i + " ";
    }

    document.querySelector("#resE5").innerHTML = resultado;
}

function mostrarMultiplosDe4Entre_33Y230() {
    let resultado = "";

    for (let i = -33; i <= 230; i++) {
        if (i % 4 == 0) {
            resultado += i + " ";
        }
    }

    document.querySelector("#resE6").innerHTML = resultado;
}

function lineaDeGuiones() {
    let resultado = "";
    let cantidadGuiones = parseInt(document.querySelector("#cantGuiones").value);

    if (cantidadGuiones < 2 || cantidadGuiones > 50) {
        resultado = "Ingrese un numero entre 2 y 50"
    }
    else {
        for (let i = 1; i <= cantidadGuiones; i++) {
            resultado += "-";
        }
    }

    document.querySelector("#resE7").innerHTML = resultado;
}

function mostrarNumerosEntreBordesIndicados() {
    let resultado = "";

    let borde1 = parseInt(document.querySelector("#bordeNum1").value)
    let borde2 = parseInt(document.querySelector("#bordeNum2").value)

    if (borde1 <= borde2) {
        for (let i = borde1; i <= borde2; i++) {
            resultado += i + " "
        }
    } else {
        for (let i = borde1; i >= borde2; i--) {
            resultado += i + " "
        }
    }

    document.querySelector("#resE8").innerHTML = resultado;
}

function productoMedianteSumas() {
    let resultado = 0;

    let num1 = parseInt(document.querySelector("#num1BordeE9").value);
    let num2 = parseInt(document.querySelector("#num2BordeE9").value);

    if (num1 != 0 && num2 != 0) {
        if (Math.abs(num1) >= Math.abs(num2)) {
            for (let i = 1; i <= Math.abs(num2); i++) {
                resultado += Math.abs(num1)
            }
        } else {
            for (let i = 1; i <= Math.abs(num1); i++) {
                resultado += Math.abs(num2)
            }
        }
        if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
            resultado *= -1
        }
    }

    document.querySelector("#resE9").innerHTML = resultado;
}

function productoNumerosComprendidos() {
    let resultado = 1;

    let num1 = parseInt(document.querySelector("#num1BordeE10").value);
    let num2 = parseInt(document.querySelector("#num2BordeE10").value);

    for (let i = num1; i <= num2; i++) {
        resultado *= i
    }

    document.querySelector("#resE10").innerHTML = resultado;
}

function multiplosNumsComprendidos() {
    let resultado = "";

    let borde1 = parseInt(document.querySelector("#num1BordeE11").value);
    let borde2 = parseInt(document.querySelector("#num2BordeE11").value);
    let numMultiplo = parseInt(document.querySelector("#numMultiplo").value);

    if (borde1 <= borde2) {
        for (let i = borde1; i <= borde2; i++) {
            if (i % numMultiplo == 0) {
                resultado += i + " ";
            }
        }
    } else {
        for (let i = borde2; i <= borde1; i++) {
            if (i % numMultiplo == 0) {
                resultado += i + " ";
            }
        }
    }

    document.querySelector("#resE11").innerHTML = resultado;
}

function factorialNum() {
    let resultado = 1;
    let numFactorial = parseInt(document.querySelector("#numFactorial").value);

    for (let i = 2; i <= numFactorial; i++) {
        resultado *= i;
    }

    document.querySelector("#resE12").innerHTML = resultado;
}

function crearRectangulo() {
    let resultado = "";

    let filas = parseInt(document.querySelector("#cantFilas").value);
    let columnas = parseInt(document.querySelector("#cantColumnas").value);
    let simbolo = document.querySelector("#simboloAUsar").value;

    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= columnas; j++) {
            resultado += simbolo + " ";
        }
        resultado += "<br>"
    }
    document.querySelector("#resE13").innerHTML = resultado;
}

function cantidadDigitos() {
    let num = parseInt(document.querySelector("#numE14").value);

    let contadorDigitos = 1

    while (num >= 10 || num <= -10) {
        num /= 10
        contadorDigitos++
    }

    document.querySelector("#resE14").innerHTML = contadorDigitos;
}

function divisionEntre20() {
    let num = parseInt(document.querySelector("#numE15").value);

    let resultado;

    if (num > 2000) {
        while (num >= 100) {
            num /= 20
        }
        resultado = num
    } else {
        resultado = "ERROR !! <br>Ingrese un numero mayor a 2000 "
    }

    document.querySelector("#resE15").innerHTML = resultado;
}

function primerMultiploEntre() {
    let resultado

    let borde1 = parseInt(document.querySelector("#num1E16").value);
    let borde2 = parseInt(document.querySelector("#num2E16").value);


    let i = borde1

    while (!esMultiploDe4Y6(i) && i <= borde2) {
        i++
    }

    if (i > borde2) {
        resultado = "No hay ningun multiplo de 4 y 6 simultaneamente entre " + borde1 + " y " + borde2
    } else {
        resultado = i
    }

    document.querySelector("#resE16").innerHTML = resultado;
}

function esMultiploDe4Y6(numero) {
    return numero % 4 == 0 && numero % 6 == 0
}


function divisionMedianteRestas() {
    let dividendo = parseInt(document.querySelector("#dividendoE17").value);
    let divisor = parseInt(document.querySelector("#divisorE17").value);
    let resto = dividendo;
    let cociente = 0

    while (resto >= divisor) {
        cociente++;
        resto -= divisor;
    }

    let resultado = dividendo + "/" + divisor + " = " + cociente + ",<br> Resto: " + resto;
    document.querySelector("#resE17").innerHTML = resultado;
}

function multiplosYParesEntre30Y200() {
    let divisor = parseInt(document.querySelector("#numDivisor").value);

    let resultado = "";
    for (let i = 30; i <= 200; i += 2) {
        if (i % divisor == 0) {
            resultado += i + " "
        }
    }

    document.querySelector("#resE18").innerHTML = resultado;
}

function crearCalendario() {
    let mes = document.querySelector("#selMes").value;
    let diaComienzoMes = document.querySelector("#selDia").value;
    let diaComienzoNumerico = determinarDiaDeComienzo(diaComienzoMes);
    let cantCelda = determinarCantDias(mes) + diaComienzoNumerico;
    
    let resultado = "<table border='1px' width='85%' align='center' cellpadding='8px'>";
    resultado += "<thead>";
    resultado += "<tr>";
    resultado += "<th colspan='7' align='center'>" + mes + "</th>";
    resultado += "</tr>";
    
    resultado += "<tr>";
    resultado += "<th>Lunes</th>";
    resultado += "<th>Martes</th>";
    resultado += "<th>Miercoles</th>";
    resultado += "<th>Jueves</th>";
    resultado += "<th>Viernes</th>";
    resultado += "<th>Sabado</th>";
    resultado += "<th>Domingo</th>";
    resultado += "</tr>";
    resultado += "</thead>";
    
    resultado += "<tbody>";
    
    let cantFilas
    
    if (mes == "Diciembre" && diaComienzoNumerico == 0) {
        cantFilas = 4;
    } else if (diaComienzoNumerico < 6){
        cantFilas = Math.ceil((7 - diaComienzoNumerico + 28) / 7);
    } else {
        cantFilas = Math.ceil((7 - diaComienzoNumerico + 28) / 7) + 1;
    }
    
    let indiceCelda = 1
    // let cantFilas
    // let mes = document.querySelector("#selMes").value;
    // let diaComienzoMes = document.querySelector("#selDia").value;
    // let diaComienzoNumerico = determinarDiaDeComienzo(diaComienzoMes);
    // let cantCelda = determinarCantDias(mes) + diaComienzoNumerico;
    
    
    for (let fila = 1; fila <= cantFilas; fila++) {
        resultado += "<tr>"
        for (let columna = (fila - 1) * 7 + 1; columna <= (fila - 1) * 7 + 7; columna++) {
            if (indiceCelda + diaComienzoNumerico <= cantCelda) {
                if (indiceCelda > diaComienzoNumerico && indiceCelda <= cantCelda - diaComienzoNumerico) {
                    resultado += "<td>" + (columna - diaComienzoNumerico) + "</td>"
                    document.querySelector("#resE19").innerHTML = resultado;
                } else {
                    resultado += "<td>" + "" + "</td>"
                    if (indiceCelda % 7 == 0) {
                        resultado += "</tr>"}
                    document.querySelector("#resE19").innerHTML = resultado;
                }
            } else {
                resultado += "<td>" + "" + "</td>"
                document.querySelector("#resE19").innerHTML = resultado;
            }
            indiceCelda++;
        }    
    }

    resultado += "</tbody>"

}

function determinarCantDias(mes) {
    let cantDiasMes

    switch (mes) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            cantDiasMes = 31
            break;
        case "Abril":
        case "Junio":
        case "Setiembre":
        case "Noviembre":
            cantDiasMes = 30
            break;
        case "Febrero":
            cantDiasMes = 28
            break;
    }

    return cantDiasMes
}

function determinarDiaDeComienzo(dia) {
    let diaComNumerico

    switch (dia) {
        case "Lunes":
            diaComNumerico = 1
            break

        case "Martes":
            diaComNumerico = 2
            break

        case "Miercoles":
            diaComNumerico = 3
            break

        case "Jueves":
            diaComNumerico = 4
            break

        case "Viernes":
            diaComNumerico = 5
            break

        case "Sabado":
            diaComNumerico = 6
            break

        case "Domingo":
            diaComNumerico = 7
            break
    }

    return diaComNumerico - 1
}

function maximoComunDivisor() {
    let num1 = parseInt(document.querySelector("#num1E20").value);
    let num2 = parseInt(document.querySelector("#num2E20").value);
    let resto

    let resultado

    let menor = num1;
    let mayor = num2;

    if (num1 != 0 && num2 != 0) {
        if (num2 <= num1) {
            menor = num2;
            mayor = num1;
        }

        while (mayor % menor != 0) {
            resto = mayor % menor
            mayor = menor
            menor = resto
        }

        resultado = Math.abs(menor)
    } else {
        resultado = "Debe ingresar numeros enteros distintos a cero."
    }

    document.querySelector("#resE20").innerHTML = resultado;
}

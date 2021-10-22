inicializar();

function inicializar() {
    /* Aquí se incluirán las instrucciones de configuración
        que se ejecutarán una vez que la página HTML esté
        cargada en el navegador.
    */
    document.querySelector("#btnE1").addEventListener("click", solucionEjercicio1);
    document.querySelector("#btnSumaE2").addEventListener("click", sumaEjercicio2);
    document.querySelector("#btnE3").addEventListener("click", sumaEjercicio3);
    document.querySelector("#btnE4").addEventListener("click", sumaYmultiEjercicio4);
    document.querySelector("#btnE5").addEventListener("click", calcularArea);
    document.querySelector("#btnConvertirE6").addEventListener("click", convertirADolares);
    document.querySelector("#btnRestoE7").addEventListener("click", restoDivN1N2);
    document.querySelector("#btnE8").addEventListener("click", sumaYRestaNums);
    document.querySelector("#btnE9").addEventListener("click", sumaSquare);
    document.querySelector("#btnE10").addEventListener("click", sumaRecargoPorcentaje);
    document.querySelector("#btnE11").addEventListener("click", sumaRecargoIVA);
    document.querySelector("#btnIMCE12").addEventListener("click", calcIMC);
    document.querySelector("#btnAcumE13").addEventListener("click", incrementarE13)
    document.querySelector("#btnIncrE14").addEventListener("click", incrementar3E14)
    document.querySelector("#btnAcumularE15").addEventListener("click", acumularEjercicio15);
    document.querySelector("#btnResultadoE15").addEventListener("click", resultadoEjercicio15);
    document.querySelector("#btnPuntosE16").addEventListener("click", puntosObtenidos);
    document.querySelector("#btnTemperaturaE17").addEventListener("click", temperaturaGrillo);
    
}
function solucionEjercicio1() {
    let nombre = document.querySelector("#txtNombreE1").value;
    let apellido = document.querySelector("#txtApellidoE1").value;

    let resultado = apellido + ", " + nombre;
    document.querySelector("#divResultadoE1").innerHTML = resultado;
}

function bloqueDeCodigoE1() {
    let numIngresado = document.querySelector("#txt");
    let numIngresadoNumerico = parseInt(numIngresado);

    let res;

    if (numIngresadoNumerico < 0) {
        //Es negativo
        res = "Es negativo";
    }
    else {
        //Es postivo 
        res = "Es positivo";
    }
    document.querySelector("#divResultadoE1").innerHTML;
}

function sumaEjercicio2() {
    let num_ingresado_1 = parseInt (document.querySelector("#txtNum1").value);
    let num_ingresado_2 = parseInt (document.querySelector("#txtNum2").value);
    
    let resultado = "La suma es" + (num_ingresado_1 + num_ingresado_2);
    
    document.querySelector("#res_ej_2").innerHTML = resultado;
    sumaEjercicio2 = resultado;
}

function sumaEjercicio3() {
    let num_ingresado_1 = parseInt(document.querySelector("#txtNum1E3").value);
    let num_ingresado_2 = parseInt(document.querySelector("#txtNum2E3").value);
    let num_ingresado_3 = parseInt(document.querySelector("#txtNum3E3").value);

    let resultadoEjercicio3 = num_ingresado_1 + num_ingresado_2 + num_ingresado_3;
    document.querySelector("#resE3").innerHTML = resultadoEjercicio3
}

function sumaYmultiEjercicio4() {
    let num_ingresado_1 = parseInt(document.querySelector("#txtNum1E4").value);
    let num_ingresado_2 = parseInt(document.querySelector("#txtNum2E4").value);

    let resSuma = num_ingresado_1 + num_ingresado_2;
    let resMult = num_ingresado_1*num_ingresado_2

    document.querySelector("#resParrafoE4").innerHTML = resSuma;
    document.querySelector("#resDivE4").innerHTML = resMult;
}

function calcularArea() {
    let lado = parseInt(document.querySelector("#txtLadoE5").value);

    let resultado = lado * lado;

    document.querySelector("#divResE5").innerHTML = resultado
}

function convertirADolares() {
    let pesosIngresados = parseInt(document.querySelector("#txtPesosE6").value);

    let resultado = pesosIngresados / 42;

    document.querySelector("#resConvertidoE6").innerHTML = resultado;
}

function restoDivN1N2() {
    let num1 = parseInt(document.querySelector("#txtNum1E7").value);
    let num2 = parseInt(document.querySelector("#txtNum2E7").value);

    let resultado = num1 % num2;

    document.querySelector("#resRestoE7").innerHTML = resultado
}

function sumaYRestaNums() {
    let num1 = parseInt(document.querySelector("#txtNum1E8").value);
    let num2 = parseInt(document.querySelector("#txtNum2E8").value);
    let num3 = parseInt(document.querySelector("#txtNum3E8").value);

    let resultado = num1 + num2 - num3;

    document.querySelector("#resE8").innerHTML = resultado;
}

function sumaSquare() {
    let num1 = parseInt(document.querySelector("#txtNum1E9").value);
    let num2 = parseInt(document.querySelector("#txtNum2E9").value);
    let num3 = parseInt(document.querySelector("#txtNum3E9").value);

    let resultado = num1 ** 2 - (num2 + num3);

    document.querySelector("#resE9").innerHTML = resultado;
}

function sumaRecargoPorcentaje() {
    let monto = parseInt(document.querySelector("#txtMontoE10").value)
    let porcentajeRecargo = parseInt(document.querySelector("#txtPorcE10").value)

    let resultado = (monto + (monto * (porcentajeRecargo / 100)));

    document.querySelector("#resE10").innerHTML = resultado

}

function sumaRecargoIVA() {
    let monto = parseInt(document.querySelector("#txtMontoE11").value)
    let recargo = monto * 0.22;

    let resultado = monto + recargo;

    document.querySelector("#resE11").innerHTML = resultado
}

function calcIMC() {
    let peso = parseInt(document.querySelector("#txtPesoE12").value);
    let altura = parseInt(document.querySelector("#txtalturaE12").value);

    let imc = peso / (altura ** 2);

    document.querySelector("#resIMCE12").innerHTML = imc;
}

let acumuladorE13 = 0;

function incrementarE13() {
    acumuladorE13++;
    document.querySelector("#desplAcumE13").innerHTML = acumuladorE13;
}

let acumulador3E14 = 0;

function incrementar3E14() {
    acumulador3E14 += 3
    document.querySelector("#desplAcum3E14").innerHTML = acumulador3E14
}

let acumuladorEjercicio15 = 0;


function acumularEjercicio15() {
    let numeroIngresado = document.querySelector("#txtNumeroE15").value;
    let numeroIngresadoNumerico = parseInt(numeroIngresado);
    
    // acumuladorEjercicio15 = acumuladorEjercicio15 + numeroIngresadoNumerico;
    acumuladorEjercicio15 += numeroIngresadoNumerico;
}

function resultadoEjercicio15() {
    let resultado = "El total acumulado es: " + acumuladorEjercicio15;
    document.querySelector("#divResultadoE15").innerHTML = resultado;
}
function puntosObtenidos() {
    let ganados = parseInt(document.querySelector("#ganadosE16").value);
    let empatados = parseInt(document.querySelector("#empatadosE16").value);

    puntosFinales = ganados * 3 + empatados; 
    document.querySelector("#puntosObtenidosE16").innerHTML = puntosFinales;
}

function temperaturaGrillo() {
    let  chirrXMin = parseInt(document.querySelector("#cantChirridosE17").value)
    let tempFahr = 50 + ((chirrXMin - 40)/4)
    let tempCelcius1 = (tempFahr - 32) / 1.8
    let tempCelcius2 = 10 + ((chirrXMin - 40) / 7)

    document.querySelector("#tempFahreneheitE17").innerHTML = tempFahr;
    document.querySelector("#tempCelcius1E17").innerHTML = tempCelcius1;
    document.querySelector("#tempCelcius2E17").innerHTML = tempCelcius2;
    

}
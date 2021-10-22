inicializar();

function inicializar() {
    document.querySelector("#miBoton1").addEventListener("click", ejecutarSistema);
    //document.querySelector("#btnE1").addEventListener("click", btnE1HandlerConSwap);
    document.querySelector("#btnE1").addEventListener("click", btnE1Handler);
    document.querySelector("#btnE2").addEventListener("click", btnEsMayorHandler);
    document.querySelector("#btnE3").addEventListener("click", btnBisiestoHandler);
    document.querySelector("#btnE4").addEventListener("click", btnAreaTrianguloHandler);
    document.querySelector("#btnE5").addEventListener("click", btnAreaRectanguloHandler);
    document.querySelector("#btnE6").addEventListener("click", btnConvertirAFahrenheit);
    document.querySelector("#btnE7").addEventListener("click", btnConvertirDeFahrenheit);
    document.querySelector("#btnE8").addEventListener("click", btnCalcularPotencia);
    document.querySelector("#btnE9").addEventListener("click", btnArmarPresupuestoE9);
}

function ejecutarSistema() {
    let sexoIngresado = document.querySelector("#selectSexo").value;

    let sexoEsValido = validarSexo(sexoIngresado);
    if (sexoEsValido) {
        saludarAlUsuario(sexoIngresado);
    } else {
        mostrarMensajeEnHTML("Debe seleccionar un sexo válido.", "divResultado");
    }
}

function validarSexo(sexo) {
    let sexoEsValido = true;

    if (sexo == '') {
        sexoEsValido = false;
    } else {
        if (sexo !== "M" && sexo !== "F") {
            sexoEsValido = false;
        }
    }

    return sexoEsValido;
}

function saludarAlUsuario(sexo) {
    let mensaje = '';

    if (sexo === "F") {
        mensaje = "Bienvenida al sitio";
    } else {
        mensaje = "Bienvenido al sitio";
    }

    // mostrarMensaje(mensaje, 'T');
    // mostrarMensajeConBooleanos(mensaje, false, true);
    mostrarMensajeEnHTML(mensaje, "divResultado");
}

function mostrarMensajeEnHTML(texto, idEelemento) {
    document.querySelector("#" + idEelemento).innerHTML = texto;
}

function mostrarMensaje(texto, dondeMostrar) {
    if (dondeMostrar === 'C') {
        console.log(texto);
    } else if (dondeMostrar === 'A') {
        alert(texto);
    } else if (dondeMostrar === 'T') {
        console.log(texto);
        alert(texto);
    }
}

function mostrarMensajeConBooleanos(texto, mostrarEnConsola, mostrarEnAlert) {
    if (mostrarEnConsola) {
        console.log(texto);
    }
    if (mostrarEnAlert) {
        alert(texto);
    }
}



//EJERCICIO 1
function btnE1Handler() {
    let num1 = parseInt(document.querySelector("#txtNum1E1").value)
    let num2 = parseInt(document.querySelector("#txtNum1E2").value)

    let mensaje = ""
    if (!isNaN(num1) && !isNaN(num2)) {
        let menor = num1;
        let mayor = num2;

        if (menor > mayor) {
            menor = num2
            mayor = num1
        }

        mensaje = "Entre " + num1 + " y " + num2 + " hay " + paresEntreDosNumeros(menor, mayor) + " par/es"
    } else {
        mensaje = "Ingrese dos numeros enteros."
    }

    document.querySelector("#resE1").innerHTML = mensaje
}



//EJERCICIO 1 ALTERNATIVO CON SWAP
function btnE1HandlerConSwap() {
    let num1 = parseInt(document.querySelector("#txtNum1E1").value)
    let num2 = parseInt(document.querySelector("#txtNum1E2").value)

    let mensaje = ""
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            let numeros = swap(num1, num2)
            num1 = numeros[0]
            num2 = numeros[1]

            mensaje = "Entre " + num1 + " y " + num2 + " hay " + paresEntreDosNumeros(num1, num2) + " par/es"
        }
    } else {
        mensaje = "Ingrese dos numeros enteros."
    }


    document.querySelector("#resE1").innerHTML = mensaje
}
//Recibe dos valores y los retorna en un ARRAY con los valores intercambiados
function swap(valor1, valor2) {
    return [valor2, valor1]
}

function paresEntreDosNumeros(n1, n2) {
    let cantidadDePares = 0;

    for (let i = n1; i <= n2; i++) {
        let iEsPar = i % 2 === 0;

        if (iEsPar) {
            cantidadDePares++
        }
    }

    return cantidadDePares
}



//EJERCICIO 2
function btnEsMayorHandler() {
    let anios = parseInt(document.querySelector("#txtAniosDeEdadE2").value)
    let topeAnios = parseInt(document.querySelector("#txtTopeAniosDeEdadE2").value)

    let mensaje

    if (!isNaN(anios) && !isNaN(topeAnios)) {
        if (esMayor(anios, topeAnios)) {
            mensaje = "es mayor"
        } else {
            mensaje = "no es mayor"
        }
    } else {
        mensaje = "Ingrese dos numeros enteros."
    }

    document.querySelector("#resE2").innerHTML = mensaje
}
function esMayor(edad, tope) {
    return edad > tope
}



//EJERCICIO 3
function btnBisiestoHandler() {
    let anioIngresado = parseInt(document.querySelector("#txtAnioE3").value)

    let mensaje = ""
    if (!isNaN(anioIngresado)) {
        mensaje = anioIngresado + " "

        if (esBisiesto(anioIngresado)) {
            mensaje += "es bisiesto"
        } else {
            mensaje += "no es bisiesto"
        }
    } else {
        mensaje = "Debe ingresar un numero entero."
    }

    document.querySelector("#resE3").innerHTML = mensaje
}

function esBisiesto(anio) {
    let esMultiploDe4 = (anio % 4 == 0)
    let esMultiploDe100 = (anio % 100 == 0)
    let esMultiploDe400 = esMultiploDe4 && esMultiploDe100
    let anioEsBisiesto
    if (esMultiploDe4 && !esMultiploDe100) {
        anioEsBisiesto = true
        if (esMultiploDe400) {
            anioEsBisiesto = false
        }
    }
    return anioEsBisiesto
}




//EJERCICIO 4
function btnAreaTrianguloHandler() {
    let base = parseInt(document.querySelector("#baseE4").value)
    let altura = parseInt(document.querySelector("#alturaE4").value)
    let resultado = ""

    if (base > 0 && altura > 0) {
        resultado = "El area del triangulo es: " + calcularAreaTriangulo(base, altura)
    } else {
        resultado = "Los numeros ingresados deben ser mayores a 0"
    }

    document.querySelector("#resE4").innerHTML = resultado
}

function calcularAreaTriangulo(largoBase, largoAltura) {
    return largoBase * largoAltura
}




//EJERCICIO 5
function btnAreaRectanguloHandler() {
    let lado1 = parseInt(document.querySelector("#lado1E5").value)
    let lado2 = parseInt(document.querySelector("#lado2E5").value)
    let resultado = ""

    if (lado1 > 0 && lado2 > 0) {
        resultado = "El area del rectangulo es: " + calcularAreaRectangulo(lado1, lado2)
    } else {
        resultado = "Los numeros ingresados deben ser mayores a 0"
    }

    document.querySelector("#resE5").innerHTML = resultado
}

function calcularAreaRectangulo(ladoA, ladoB) {
    return ladoA * ladoB
}




//EJERCICIO 6
function btnConvertirAFahrenheit() {
    let tempEnCelsius = parseInt(document.querySelector("#tempEnCelsiusE6").value)
    let resultado

    if (!isNaN(tempEnCelsius)) {
        resultado = "La temperatura en Fahrenheit es: " + convertirAFahrenheit(tempEnCelsius)
    } else {
        resultado = "El valor ingresado debe ser numerico"
    }

    document.querySelector("#resE6").innerHTML = resultado
}

function convertirAFahrenheit(temperaturaEnCelsius) {
    return 1.8 * temperaturaEnCelsius + 32
}




//EJERCICIO 7
function btnConvertirDeFahrenheit() {
    let tempEnFahr = parseInt(document.querySelector("#tempFahrenheitE7").value);
    let unidad = document.querySelector("#selUnidad").value
    let resultado;

    if (!isNaN(tempEnFahr) && unidad != "-") {
        if (unidad == "C") {
            resultado = "La temperatura en Celsius es: " + convertirACelsius(tempEnFahr)
        }
        else if (unidad == "K") {
            resultado = "La temperatura en Kelvin es: " + convertirAKelvin(tempEnFahr)
        }
        else if (unidad == "Ra") {
            resultado = "La temperatura en Rankine es: " + convertirARankine(tempEnFahr)
        }
        else if (unidad == "Re") {
            resultado = "La temperatura en Reamur es: " + convertirAReamur(tempEnFahr)
        }

    } else {
        resultado = "Debe ingresar un valor numerico y la unidad a la que quiere convertir la temperatura"
    }

    document.querySelector("#resE7").innerHTML = resultado
}

function convertirACelsius(temperaturaEnFahrenheit) {
    return (temperaturaEnFahrenheit - 32) / 1.8
}

function convertirAKelvin(temperaturaEnFahrenheit) {
    return (temperaturaEnFahrenheit + 459.67) / 1.8
}

function convertirARankine(temperaturaEnFahrenheit) {
    return temperaturaEnFahrenheit + 459.67
}

function convertirAReamur(temperaturaEnFahrenheit) {
    return (temperaturaEnFahrenheit - 32) / 2.25
}



//EJERCICIO 8
function btnCalcularPotencia() {
    let base = parseInt(document.querySelector("#baseE8").value);
    let exponente = document.querySelector("#exponenteE8").value
    let potencia = 1;

    potencia = calcularPotencia(base, exponente)

    document.querySelector("#resE8").innerHTML = base + "<sup>" + exponente + "</sup> = " + potencia
}

function calcularPotencia(base, exponente) {
    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado *= base
    }

    return resultado
}



//EJERCICIO 9
function esNumeroMayorACero(numero) {
    // Asumo que no es número o que no es mayor a cero
    let retorno = false;
    // Controlo si es un número
    let esNumero = !isNaN(numero);
    if (esNumero) {
        let esPositivo = numero > 0;
        if (esPositivo) {
            retorno = true;
        }
    }
    // Retorno el resultado final
    return retorno;
}

function calcularSalarioPorTipoDePersona(tipo, cantHoras, cantidadDias) {
    let salario = -1;
    let cantidadHorasEsNumeroPositivo = esNumeroMayorACero(cantHoras);

    if (cantidadHorasEsNumeroPositivo && esNumeroMayorACero(cantidadDias)) {
        let horasTotalesTrabajadas = cantHoras * cantidadDias;
        if (tipo === "E") {
            salario = horasTotalesTrabajadas * 200;
        } else if (tipo === "A") {
            salario = horasTotalesTrabajadas * 150;
        }
    }
    return salario;
}

function calcularCostoTotalMateriales(costoDeCompra) {
    let montoTotalMateriales = -1;
    if (esNumeroMayorACero(costoDeCompra)) {
        montoTotalMateriales = costoDeCompra * 1.1;
    }
    return montoTotalMateriales;
}

function btnArmarPresupuestoE9() {
    let cantDias = parseInt(document.querySelector("#txtCantidadDiasE9").value);
    let cantHoras = parseInt(document.querySelector("#txtCantidadHorasE9").value);
    let costoMateriales = parseInt(document.querySelector("#txtCostoMaterialesE9").value);
    let usaAsistente = document.querySelector("#selectAsistenteE9").value;

    let presupuesto = 0

    let resultado

    if (esNumeroMayorACero(cantDias) && esNumeroMayorACero(cantHoras) && esNumeroMayorACero(costoMateriales)) {
        presupuesto += calcularSalarioPorTipoDePersona("E", cantHoras, cantDias)

        if (usaAsistente == "S") {
            presupuesto += calcularSalarioPorTipoDePersona("A", cantHoras, cantDias)
        }

        presupuesto += calcularCostoTotalMateriales(costoMateriales)
    } else {
        presupuesto = -1
    }

    if (presupuesto == -1 || usaAsistente == "") {
        resultado = "Los valores ingresados no son validos. Ingrese numeros mayores a 0 y si se trabajo con asistente"
    } else {
        resultado = "El presupuesto armado para: <br>" + cantDias + " dias <br>+<br>" + cantHoras + " horas/día <br>+<br>$ " + costoMateriales + " por costo de materiales<br>"
        if (usaAsistente == "S") {
            resultado += "+<br>Trabajo de asistente<br> "
        }
        resultado += "-----------------------------------<br>$ " + presupuesto
    }

    document.querySelector("#resE9").innerHTML = resultado
}
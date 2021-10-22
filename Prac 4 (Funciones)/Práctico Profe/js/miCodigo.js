inicializar();

function inicializar() {
    document.querySelector("#btnE1").addEventListener("click", btnE1Handler);
    // document.querySelector("#btnE2").addEventListener("click", btnE2Handler);
    document.querySelector("#btnE9").addEventListener("click", btnE9Handler);
}

// Ejercicio 1
function btnE1Handler() {
    let valor1 = parseInt(document.querySelector("#txtValor1E1").value);
    let valor2 = parseInt(document.querySelector("#txtValor2E1").value);
    let menor = valor1;
    let mayor = valor2;
    if (valor1 > valor2) {
        menor = valor2;
        mayor = valor1;
    }

    let cantidadDePares = calcularCantidadDeParesEntreDosNumeros(menor, mayor);

    document.querySelector("#divResultadoE1").innerHTML = "Entre los números " + menor + " y " + mayor + ", hay " + cantidadDePares + " números pares.";
}

// Ejercicio 1
// Asumo que ambos valores son numéricos.
// Asumo que el primer valor que me pasan, es menor o igual al segundo.
function calcularCantidadDeParesEntreDosNumeros(n1, n2) {
    let cantidadDePares = 0;
    for (let i = n1; i <= n2; i++) {
        let iEsPar = i % 2 === 0;
        if (iEsPar) {
            cantidadDePares++;
        }
    }
    return cantidadDePares;
}

// Ejercicio 2
function btnE2Handler() {
    // Leer edad ingresada (como número)
    // Leer tope ingresado (como número)

    // Llamar a la función esMayor, pasando los valores de edad y tope y guardar el resultado (el retorno) en una variable
    // Si la variable tiene valor true
        // Mostrar el mensaje "Es mayor"
    // Si la variable tiene valor false
        // Mostrar el mensaje "No es mayor"
}
 // Ejercicio 2
function esMayor(edad, tope) {
    // Asumo que no es mayor
    let edadEsMayor = false;
    // Verificar si la edad es mayor al tope
        // Cambio mi variable edadEsMayor a true
    // Retorno el datos (la variable edadEsMayor)
}

// Ejercicio 3
function btnE3Handler() {
}

// Ejercicio 3
function esBisiesto(anio) {
}

// Ejercicio 4
function btnE4Handler() {
}

// Ejercicio 4
function calcularAreaTriangulo(base, altura) {
    // No olvidar chequear que los valores sean numéricos, en caso contrario, devolver -1
}

// Ejercicio 5
function btnE5Handler() {
}

// Ejercicio 5
function calcularAreaRectangulo(ancho, alto) {
    // No olvidar chequear que los valores sean numéricos, en caso contrario, devolver -1
}

// Ejercicio 6
function btnE65Handler() {
}

// Ejercicio 6
function convertirCelsiusParaFahrenheit(tempEnCelsius) {
}

// Ejercicio 7
function btnE75Handler() {
}

// Ejercicio 7
function convertirDesdeFahrenheit(tempEnFahrenheit, unidadNueva) {
    let temperaturaFinal = null;
    switch (unidadNueva) {
        case "Celsius":
            temperaturaFinal = convertirFahrenheitParaCelsius(tempEnFahrenheit);
            break;
        // Si unidadNueva es Kelvin
            // Llamo a convertirFahrenheitParaKelvin y guardo el retorno en temperaturaFinal
        // Completar para las demás unidades
    }
    return temperaturaFinal;
}

// Ejercicio 7
function convertirFahrenheitParaCelsius(tempEnFahrenheit) {
    let temperaturaEnCelsius = (tempEnFahrenheit - 32) / 1.8;
    return temperaturaEnCelsius;
}

// Ejercicio 7
function convertirFahrenheitParaKelvin(tempEnFahrenheit) {
    // Retorna la temperatura convertida a Kelvin
}

// Ejercicio 8
function btnE8Handler() {
}

// Ejercicio 8
function calcularPotencia(base, exponente) {
}

// Ejercicio 9
function btnE9Handler() {
    let dias = parseInt(document.querySelector("#txtCantidadDiasE9").value);
    let horas = parseInt(document.querySelector("#txtCantidadHorasE9").value);
    let costoMateriales = parseFloat(document.querySelector("#txtCostoMaterialesE9").value);
    let usaAsistente = document.querySelector("#selectAsistenteE9").value;

    let mensaje = "";

    if (verificarNumeroMayorCero(dias) && verificarNumeroMayorCero(horas) && verificarNumeroMayorCero(costoMateriales)) {
        if (usaAsistente !== "") {
            let montoTotal = -1;

            let costoTotalMateriales = calcularCostoTotalMateriales(costoMateriales);
            let salarioTotalE = calcularSalarioPorTipoDePersona("E", horas, dias);

            if (costoTotalMateriales > -1) {
                if (salarioTotalE > -1) {
                    montoTotal = costoTotalMateriales + salarioTotalE;
                    if (usaAsistente === "S") {
                        let salarioTotalA = calcularSalarioPorTipoDePersona("A", horas, dias);
                        if(salarioTotalA > -1) {
                            montoTotal += salarioTotalA;
                        } else {
                            montoTotal = -1;
                        }
                    }
                    if (montoTotal > -1) {
                        mensaje = "El presupuesto total, es de: $" + montoTotal;
                    } else {
                        mensaje = "Datos incorrectos, verifique.";    
                    }
                } else {
                    mensaje = "Datos incorrectos, verifique.";    
                }
            } else {
                mensaje = "Datos incorrectos, verifique.";
            }

        } else {
            mensaje = "Debe indicar si contará o no con un asistente."
        }
    } else {
        mensaje = "Todos los valores deben ser números mayores a cero.";
    }

    document.querySelector("#divResultadoE9").innerHTML = mensaje;
}

// Ejercicio 9, parte 1
function verificarNumeroMayorCero(numero) {
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

// Ejercicio 9, parte 2
function calcularSalarioPorTipoDePersona(tipo, cantidadHoras, cantidadDias) {
    let salario = -1;
    let cantidadHorasEsNumeroPositivo = verificarNumeroMayorCero(cantidadHoras);
    if (cantidadHorasEsNumeroPositivo && verificarNumeroMayorCero(cantidadDias)) {
        let horasTotalesTrabajadas = cantidadHoras * cantidadDias;
        if (tipo === "E") {
            salario = horasTotalesTrabajadas * 200;
        } else if (tipo === "A") {
            salario = horasTotalesTrabajadas * 150;
        }
    }
    return salario;
}

// Ejercicio 9, parte 3
function calcularCostoTotalMateriales(costoDeCompra) {
    let montoTotalMateriales = -1;
    if (verificarNumeroMayorCero(costoDeCompra)) {
        montoTotalMateriales = costoDeCompra * 1.1;
    }
    return montoTotalMateriales;
}

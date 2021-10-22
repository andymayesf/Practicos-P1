inicializar();

function inicializar() {
    document.querySelector("#miBoton1").addEventListener("click", mostrarMensaje);
    document.querySelector("#btnMostrarSuma").addEventListener("click", mostrarSuma);
}

function mostrarMensaje() {
    // Acá va lo que se ejecuta cuando le hacen click al botón con id miBoton1.
    alert("Bienvenido al sitio.");
    console.log("Mensaje de prueba - Log");
    console.info("Mensaje de prueba - Info");
    console.warn("Mensaje de prueba - Warning");
    console.error("Mensaje de prueba - Error");
}

function mostrarSuma() {
    // alert(8);
    // alert(5+3);

    // Declaro una variable para el primer valor
    let valor1;
    // Asigno un valor a la variable
    valor1 = 5;

    // Declaro una variable para el segundo valor y ya le asigno un valor
    let valor2 = "3";

    let valor2Numerico = parseInt(valor2);

    let resultado = valor1 + valor2Numerico;

    alert(resultado);
}

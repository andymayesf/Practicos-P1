inicializar();

function inicializar() {
    document.querySelector("#miBoton1").addEventListener("click", miBoton1Handler);
}

function miBoton1Handler() {
    // Defino un array indexado de colores.
    let miArrayIndexado = ["Rojo", "Amarillo", "Verde", "Azul"];
    // Agrego un nuevo color a mi array indexado.
    miArrayIndexado.push("Naranja");
    // Muestro el contenido del array indexado.
    mostrarContenidoDeArray(miArrayIndexado, "divResultadosIndexado", ", ", ".", true);

    // Defino un array indexado con los datos de una persona (Nombre, Apellido, Fecha de nacimiento, Celular).
    let miArrayIndexadoPersona = ["Bruno", "Díaz", "26/04/1991", "099552591"];
    // Defino un array asociativo con los datos de una persona (Nombre, Apellido, Fecha de nacimiento, Celular).
        // A cada dato, en lugar de correponderle un índice, le corresponde una clave.
            // Esto hace que los puede definir y leer en cualquier órden, pero mediante una clave que es más fácil de recordar que un índice.
    let miArrayAsociativoPersona1 = {
        apellido: "Díaz",
        fechaNacimiento: "26/04/1991",
        nombre: "Bruno",
        celular: "099552591"
    };

    // Defino otra persona.
    let miArrayAsociativoPersona2 = {
        nombre: "Federico",
        apellido: "Díaz",
        fechaNacimiento: "08/06/2020",
        celular: "099552591"
    };

    let mensajeAsociativos = '';

    // Muestro el nombre de la persona2.
    mensajeAsociativos = miArrayAsociativoPersona2.nombre;
    mensajeAsociativos += "<br>";
    // Muestro la fecha de nacimiento de la persona2.
    mensajeAsociativos += miArrayAsociativoPersona2.fechaNacimiento;

    // Modifico la fecha de nacimiento de la persona2.
    miArrayAsociativoPersona2.fechaNacimiento = "08/06/2019";
    mensajeAsociativos += "<br>";
    // Muestro nuevamente la fecha de nacimiento de la persona2 (ahora, modificada).
    mensajeAsociativos += miArrayAsociativoPersona2.fechaNacimiento;

    document.querySelector("#divResultadosAsociativo").innerHTML = mensajeAsociativos;
}


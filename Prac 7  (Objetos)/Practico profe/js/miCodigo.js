let personas = [];
let peliculas = [];
let guitarras = [];
let ventasGuitarras = [];

inicializar();

function inicializar() {
    agregarEventosDeClick();
    precargarDatos();
}

function precargarDatos() {
    precargarPeliculas();
    precargarTiposGuitarras();
}

function agregarEventosDeClick() {
    document.querySelector("#btnAltaPersonaE1").addEventListener("click", btnAltaPersonaE1aHandler);
    document.querySelector("#btnMostrarTablaPersonas").addEventListener("click", btnMostrarTablaPersonasE1bHandler);
    document.querySelector("#btnMostrarTablaPlus18").addEventListener("click", btnMostrarTablaPersonasPlus18E1cHandler);
    document.querySelector("#btnAltaPeliculaE2").addEventListener("click", btnAltaPeliculaHandler);
    document.querySelector("#btnMostrarMejorValuados").addEventListener("click", btnArmarTablaPeliculasMejorValuadasE2Handler);
    document.querySelector("#btnMostrarPeliculaPorNombre").addEventListener("click", btnMostrarPeliculaElegidaE2dHandler);
    document.querySelector("#btnIngresarCompraE3").addEventListener("click", btnRegistrarCompraE3AHandler);
    document.querySelector("#btnMostrarIngresos").addEventListener("click", btnArmarTablaDeVentasE3CHandler);
}

function precargarPeliculas() {
    peliculas.push(new Pelicula("X-Men", 2010, "cf", 10, 500));
}

function precargarTiposGuitarras() {
    guitarras.push(new Guitarra (1, "clásica", 2000));
    guitarras.push(new Guitarra (2, "eléctrica", 2500));
    guitarras.push(new Guitarra (3, "electroacustica", 2300));
}

//EJERCICIO 1
//PARTE A
function btnAltaPersonaE1aHandler() {
    let mensaje = '';

    let nombreIngresado = leerDatoDelHTML("txtIngresoNombreE1");
    let edadIngresada = leerDatoDelHTML("txtIngresoEdadE1");
    let paisDeOrigenIngresado = leerDatoDelHTML("txtIngresoNacionalidadE1");

    if (nombreIngresado && edadIngresada && paisDeOrigenIngresado) {
        let edadIngresadaNumerica = parseInt(edadIngresada);

        if (esNumero(edadIngresadaNumerica)) {
            if (edadIngresadaNumerica > 0) {
                let nuevaPersona = new Persona(nombreIngresado, edadIngresadaNumerica, paisDeOrigenIngresado);
                personas.push(nuevaPersona);
                mostrarContenidoDeArray(personas, "divIngresoPersonaE1", ", ", "", true)
                mensaje += "<br>Persona ingresada."
            } else {
                mensaje = "La edad debe ser mayor a cero.";
            }
        } else {
            mensaje = "La edad debe ser un valor numerico.";
        }
    } else {
        mensaje = "Todos los datos son obligatorios.";
    }

    mostrarMensaje("divIngresoPersonaE1", mensaje);
}

function btnMostrarTablaPersonasE1bHandler() {
    let resultado = "No hay personas ingresadas por el momento"
    if (personas.length > 0) {
        resultado = armarTablaPersonas(personas);
    }

    document.querySelector("#divTablaDePersonas").innerHTML = resultado
}


//PARTE B
function armarTablaPersonas(arrayPersonas) {
    let tabla = "<table border='1px' width='65%' align='center' cellpadding='8px'>";
    tabla += "<thead>"
    tabla += "<th>Nombre</th>"
    tabla += "<th>Edad</th>"
    tabla += "<th>Nacionalidad</th>"
    tabla += "</thead>"
    tabla += "<tbody>"
    for (let i = 0; i < personas.length; i++) {
        tabla += "<tr>"
        tabla += "<td>" + personas[i].nombre + "</td>"
        tabla += "<td>" + personas[i].edad + "</td>"
        tabla += "<td>" + personas[i].nacionalidad + "</td>"

        tabla += "</tr>"
    }
    tabla += "</tbody>"
    tabla += "</table>"

    return tabla
}


//PARTE C
function btnMostrarTablaPersonasPlus18E1cHandler() {
    let resultado = "No hay personas mayores de edad"
    if (personas.length > 0) {
        resultado = armarTablaPersonasPlus18(personas);
    }

    document.querySelector("#divPlus18").innerHTML = resultado
}

function armarTablaPersonasPlus18(arrayPersonas) {
    let tabla = "<table border='1px' width='85%' align='center' cellpadding='8px'>";
    tabla += "<thead>"
    tabla += "<th>Nombre</th>"
    tabla += "<th>Edad</th>"
    tabla += "<th>Nacionalidad</th>"
    tabla += "</thead>"
    tabla += "<tbody>"
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad >= 18) {
            tabla += "<tr>"
            tabla += "<td>" + personas[i].nombre + "</td>"
            tabla += "<td>" + personas[i].edad + "</td>"
            tabla += "<td>" + personas[i].nacionalidad + "</td>"
            tabla += "</tr>"
        }
    }
    tabla += "</tbody>"
    tabla += "</table>"

    return tabla
}




//EJERCICIO 2
//PARTE A y B
function btnAltaPeliculaHandler() {
    let mensaje = '';

    let nombreIngresado = leerDatoDelHTML("txtAltaPeliculaNombre");
    let anioIngresado = leerDatoDelHTML("txtAltaPeliculaAnio");
    let generoSeleccionado = leerDatoDelHTML("selectAltaPeliculaGenero");
    let cantidadVotantesIngresada = leerDatoDelHTML("txtAltaPeliculaCantidadVotantes");
    let totalPuntosIngresados = leerDatoDelHTML("txtAltaPeliculaTotalPuntos");

    if (nombreIngresado && anioIngresado && generoSeleccionado && cantidadVotantesIngresada && totalPuntosIngresados) {
        let edadIngresadaNumerica = parseInt(anioIngresado);
        let cantidadVotantesIngresadaNumerica = parseInt(cantidadVotantesIngresada);
        let totalPuntosIngresadosNumerico = parseInt(totalPuntosIngresados);


        if (esNumero(edadIngresadaNumerica) && esNumero(cantidadVotantesIngresadaNumerica) && esNumero(totalPuntosIngresadosNumerico)) {
            if (edadIngresadaNumerica > 0 && cantidadVotantesIngresadaNumerica > 0 && totalPuntosIngresadosNumerico > 0) {
                if (!obtenerPeliculaPorNombre(nombreIngresado)) {
                    let nuevaPelicula = new Pelicula(nombreIngresado, edadIngresadaNumerica, generoSeleccionado, cantidadVotantesIngresadaNumerica, totalPuntosIngresadosNumerico);
                    peliculas.push(nuevaPelicula);
                } else {
                    mensaje = "Ya existe una película con ese nombre";
                }
            } else {
                mensaje = "El año, la cantidad de votantes y el puntaje deben ser mayores a cero.";
            }
        } else {
            mensaje = "El año, la cantidad de votanes y el puntaje deben ser números.";
        }
    } else {
        mensaje = "Todos los datos son obligatorios.";
    }

    mostrarMensaje("divMensajesAltaPelicula", mensaje);
}





//PARTE C
function btnArmarTablaPeliculasMejorValuadasE2Handler() {
    let resultado
    if (peliculas.length > 0) {
        resultado = armarTablaPeliculasMejorValuadas(peliculas);
    } else {
        resultado = "No hay peliculas ingresadas por el momento"
    }

    document.querySelector("#divTablaMejorValuados").innerHTML = resultado
}

function armarTablaPeliculasMejorValuadas() {
    let tabla = `<table border='1px' width='85%' align='center' cellpadding='8px'>
                    <thead>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Genero</th>
                        <th>Cant de valoraciones</th>
                        <th>Total puntos</th>
                    </thead>`


    // BODY
    for (let i = 0; i < peliculas.length; i++) {
        let peliculaActual = peliculas[i]
        let promedioValoraciones = peliculaActual.calcularPromedio()
        if (promedioValoraciones >= 4) {
            tabla +=    `<tbody>
                            <tr>
                                <td>${peliculaActual.nombre}</td>
                                <td>${peliculaActual.anio}</td>
                                <td>${peliculaActual.obtenerGenero()}</td>
                                <td>${peliculaActual.cantidadVotantes}</td>
                                <td>${peliculaActual.totalPuntos}</td>
                            </tr>
                        </tbody>`
        }
    }
    tabla += `</table>`

    return tabla
}


//PARTE D
function btnMostrarPeliculaElegidaE2dHandler() {
    let peliculaIngresada = document.querySelector("#txtPeliculaElegida").value;
    let existePelicula = obtenerPeliculaPorNombre(peliculaIngresada);
    let resultado = ""
    if (existePelicula) {
        resultado = armarTablaPelicula(existePelicula)
    } else {
        resultado = "La pelicula ingresada no esta en la base de datos"
    }

    document.querySelector("#divPeliculaPorNombre").innerHTML = resultado
}

function armarTablaPelicula(pelicula) {
    let tabla = "<table border='1px' width='85%' align='center' cellpadding='8px'>"; //INICIO TABLA

    // HEADER
    tabla += "<thead>"
    tabla += "<th>Nombre</th>"
    tabla += "<th>Año</th>"
    tabla += "<th>Genero</th>"
    tabla += "<th>Cant de valoraciones</th>"
    tabla += "<th>Total puntos</th>"
    tabla += "</thead>"
    // FIN HEADER

    // BODY
    tabla += "<tbody>"
    tabla += "<tr>"
    tabla += "<td>" + pelicula.nombre + "</td>"
    tabla += "<td>" + pelicula.anio + "</td>"
    tabla += "<td>" + pelicula.obtenerGenero() + "</td>"
    tabla += "<td>" + pelicula.cantidadVotantes + "</td>"
    tabla += "<td>" + pelicula.totalPuntos + "</td>"
    tabla += "</tr>"
    tabla += "</tbody>"
    //FIN BODY

    tabla += "</table>" //FIN TABLA

    return tabla
}

function obtenerPeliculaPorNombre(nombre) {
    let peliculaEncontrada = null;
    let i = 0;
    while (!peliculaEncontrada && i < peliculas.length) {
        let peliculaActual = peliculas[i];
        if (peliculaActual.nombre === nombre) {
            peliculaEncontrada = peliculaActual;
        }
        i++;
    }
    return peliculaEncontrada;
}




//EJERCICIO 3


function btnRegistrarCompraE3AHandler() {
    let tipo = leerDatoDelHTML("txtTipoGuitarra");
    let cantCompradas = leerDatoDelHTML("txtCantidadGuitarras");

    let resultado = "";
    if (esNumero(tipo) && esNumero(cantCompradas)) {
        let cantCompradasNumerico = parseInt(cantCompradas);
        let tipoNumerico = parseInt(tipo);

        if (cantCompradasNumerico > 0 && (tipoNumerico == 1 || tipoNumerico == 2 || tipoNumerico == 3)) {
            ventasGuitarras.push(new Venta(tipoNumerico, cantCompradasNumerico));
        } else {
            if (cantCompradasNumerico <= 0) {
                resultado = "La cantidad ingresada debe ser mayor a 0.<br>"
            }
            if (tipoNumerico != 1 && tipoNumerico != 2 && tipoNumerico != 3) {
                resultado += "<br>Debe ingresar un tipo de guitarra."
            }
        }
    } else {
        resultado = "Ingrese todos los campos";
    }
}

function obtenerTipoGuitarra(tipoGuitarraNumerico) {
    let tipoGuitarra
    if (tipoGuitarraNumerico == "1") {
         tipoGuitarra = "Clasica"
    } else if (tipoGuitarraNumerico == "2") {
         tipoGuitarra = "Electrica"
    } else if (tipoGuitarraNumerico == "3") {
         tipoGuitarra = "Electroacustica"
    } else if (tipoGuitarraNumerico == "") {
         tipoGuitarra = null
    }

    return tipoGuitarra
}

function calcularIngresosPorTipoGuitarra(tipoGuitarra) {
    let ingresos = 0

    for (let i = 0; i < ventasGuitarras.length; i++) {
        let ventaGuitarraActual = ventasGuitarras[i]

        if (tipoGuitarra == ventaGuitarraActual.tipo) {
            let montoPorGuitarra = guitarras[tipoGuitarra-1].precio;
            let cantVentaActual = ventaGuitarraActual.cantidad;
            ingresos += montoPorGuitarra * cantVentaActual;
        }
    }

    return ingresos
}

function btnArmarTablaDeVentasE3CHandler() {
    let resultado = armarTablaDeVentas(guitarras);

    document.querySelector("#divTablaDeIngresos").innerHTML = resultado
}

function armarTablaDeVentas(array) {
    let tabla = "<table border='1px' width='40%' align='center' cellpadding='8px'>";

    // HEADER
    tabla += "<thead>";
    tabla += "<th>Tipo</th>";
    tabla += "<th>Nombre</th>";
    tabla += "<th>Totales generados</th>";
    tabla += "</thead>";


    // BODY
    tabla += "<tbody>";
    for (let i = 0; i < guitarras.length; i++) {
        let tipoGuitarraActual = guitarras[i].tipo;
        let ingresosDeTipoActual = calcularIngresosPorTipoGuitarra(tipoGuitarraActual);

        // FILA
        tabla += "<tr>";
        tabla += "<td>" + tipoGuitarraActual + "</td>";
        tabla += "<td>" + guitarras[i].nombre + "</td>";
        tabla += "<td>" + ingresosDeTipoActual + "</td>";
        tabla += "</tr>";
        // FIN FILA
    }
    tabla += "</tbody>";
    // FIN BODY

    tabla += "</table>";
    // FIN TABLA

    return tabla
}

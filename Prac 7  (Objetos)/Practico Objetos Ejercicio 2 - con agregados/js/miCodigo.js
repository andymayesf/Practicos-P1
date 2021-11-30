let peliculas = [];
let generos = [];
let proximoGeneroId = 1;

inicializar();

function inicializar() {
    agregarEventosDeClick();
    precargarDatos();
    completarHTML();
}

function completarHTML() {
    completarComboGeneros();
}

function completarComboGeneros() {
    let generosParaHTML = `<option value="">Seleccione..</option>`;

    for (let i = 0; i < generos.length; i++) {
        let generoActual = generos[i];
        generosParaHTML += `<option value="${generoActual.id}">${generoActual.nombre}</option>`;
    }

    mostrarEnHTML("selectAltaPeliculaGenero", generosParaHTML);
}

function precargarDatos() {
    precargarGenros();
    precargarPeliculas();
}

function precargarGenros() {
    generos.push(new Genero("Comedia"));
    generos.push(new Genero("Drama"));
    generos.push(new Genero("Ciencia ficción"));
    generos.push(new Genero("Terror"));
}

function precargarPeliculas() {
    crearYGuardarPeliculaSiEsValida("X-Men", 2010, 3, 10, 500);
    crearYGuardarPeliculaSiEsValida("Spiderman", 2010, 50, 10, 500);
}

function crearYGuardarPeliculaSiEsValida(nombre, anio, genero, cantVotantes, puntos) {
    let errores = validarDatosPelicula(nombre, anio, genero, cantVotantes, puntos);
    if (errores.length === 0) {
        peliculas.push(new Pelicula(nombre, anio, genero, cantVotantes, puntos));
    }
    return errores;
}

function agregarEventosDeClick() {
    document.querySelector("#btnAltaPelicula").addEventListener("click", btnAltaPeliculaHandler);
    document.querySelector("#btnListarPeliculas").addEventListener("click", mostrarPeliculas);
    document.querySelector("#btnBuscarPelicula").addEventListener("click", btnBuscarPeliculaHandler);
}

function btnAltaPeliculaHandler() {
    let mensaje = '';

    let nombreIngresado = leerDatoDelHTML("txtAltaPeliculaNombre");
    let anioIngresado = leerDatoDelHTML("txtAltaPeliculaAnio");
    let generoSeleccionado = leerDatoDelHTML("selectAltaPeliculaGenero");
    let cantidadVotantesIngresada = leerDatoDelHTML("txtAltaPeliculaCantidadVotantes");
    let totalPuntosIngresados = leerDatoDelHTML("txtAltaPeliculaTotalPuntos");

    let anioIngresadoNumerico = parseInt(anioIngresado);
    let cantidadVotantesIngresadaNumerica = parseInt(cantidadVotantesIngresada);
    let totalPuntosIngresadosNumerico = parseInt(totalPuntosIngresados);
    let generoSeleccionadoNumerico = parseInt(generoSeleccionado);

    mensaje = crearYGuardarPeliculaSiEsValida(nombreIngresado, anioIngresadoNumerico, generoSeleccionadoNumerico, cantidadVotantesIngresadaNumerica, totalPuntosIngresadosNumerico);

    if (mensaje.length === 0) {
        mensaje = "Película guardada."
    }

    mostrarEnHTML("divMensajesAltaPelicula", mensaje);
}

function validarDatosPelicula(nombre, anio, genero, cantVotantes, puntos) {
    let mensaje = "";

    if (nombre && anio && genero && cantVotantes && puntos) {
        if (esNumero(anio) && esNumero(cantVotantes) && esNumero(puntos)) {
            if (anio <= 0 || cantVotantes <= 0 || puntos <= 0) {
                mensaje = "El año, la cantidad de votantes y el puntaje deben ser mayores a cero.";
            }
        } else {
            mensaje = "El año, la cantidad de votantes y el puntaje deben ser números.";
        }

        if (!obtenerGeneroPorId(genero)) {
            if (mensaje.length > 0) {
                mensaje += "<br>";
            }
            mensaje = "El género seleccionado no es válido.";
        }
    
        if (obtenerPeliculaPorNombre(nombre)) {
            if (mensaje.length > 0) {
                mensaje += "<br>";
            }
            mensaje = "Ya existe una película con ese nombre.";
        }
    } else {
        mensaje = "Todos los datos son obligatorios.";
    }

    return mensaje;
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

function obtenerGeneroPorId(id) {
    let generoEncontrado = null;
    let i = 0;
    while (!generoEncontrado && i < generos.length) {
        let generoActual = generos[i];
        if (generoActual.id === id) {
            generoEncontrado = generoActual;
        }
        i++;
    }
    return generoEncontrado;
}

function mostrarPeliculas() {
    let peliculasParaMostrarEnHTML = "";

    if (peliculas.length > 0) {
        peliculasParaMostrarEnHTML = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Género</th>
                        <th>Cant. Votantes</th>
                        <th>Puntos</th>
                        <th>Promedio</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 0; i < peliculas.length; i++) {
            let peliculaActual = peliculas[i];
            peliculasParaMostrarEnHTML += `
                    <tr>
                        <td>${peliculaActual.nombre}</td>
                        <td>${peliculaActual.anio}</td>
                        <td>${obtenerGeneroPorId(peliculaActual.genero).nombre}</td>
                        <td>${peliculaActual.cantidadVotantes}</td>
                        <td>${peliculaActual.totalPuntos}</td>
                        <td>${peliculaActual.promedio()}</td>
                    </tr>
            `;
        }

        peliculasParaMostrarEnHTML += `
                </tbody>
            </table>
        `;
    } else {
        peliculasParaMostrarEnHTML = "No existen películas guardadas";
    }

    mostrarEnHTML("contenedorTablaPeliculas", peliculasParaMostrarEnHTML)
}

function btnBuscarPeliculaHandler() {
    let mensaje = "";
    let nombreIngresado = leerDatoDelHTML("txtBusquedaPeliculaNombre");

    let peliculaEncontrada = obtenerPeliculaPorNombre(nombreIngresado);

    if (peliculaEncontrada) {
        mensaje = `
            Nombre: ${peliculaEncontrada.nombre}.<br>
            Año: ${peliculaEncontrada.anio}.<br>
            Género: ${obtenerGeneroPorId(peliculaEncontrada.genero).nombre}.<br>
            Votantes: ${peliculaEncontrada.cantidadVotantes}.<br>
            Puntos: ${peliculaEncontrada.totalPuntos}.<br>
        `;
    } else {
        mensaje = "Le película no se encuentra en el listado.";
    }

    mostrarEnHTML("contenedorInfoPelicula", mensaje);
}

let usuarios = [];

let usuarioEstaLogueado = false;

inicializar();

function inicializar() {
    precargarDatos();
    agregarEventosEnBotones();
    actualizarMenu();
    mostrarPantallaLogin();
}

function precargarDatos() {
    registrarUsuario("bdiaz", "123", null, null);
    let bdiaz = obtenerUsuarioPorUsuario("bdiaz");
    cambiarEstadoUsuario(bdiaz);

    registrarUsuario("fdiaz", "123", "M", null);
    registrarUsuario("lgrigorio", "123", "F", null);
    registrarUsuario("lpereyra", "123", "M", null);
    registrarUsuario("mwynants", "123", "M", "mwynants.jpg");
}

function agregarEventosEnBotones() {
    document.querySelector("#btnLoginIngresar").addEventListener("click", iniciarSesion);
    document.querySelector("#btnMenuCerrarSesion").addEventListener("click", cerrarSesion);
    document.querySelector("#btnRegistroUsuarioIngresar").addEventListener("click", btnRegistroUsuarioIngresarHandler);
    document.querySelector("#btnMenuRegistroUsuario").addEventListener("click", btnMenuRegistroUsuarioHandler);
    document.querySelector("#btnMenuLogin").addEventListener("click", btnMenuLoginHandler);   
}

function ocultarPantallas() {
    ocultarPantallaLogin();
    document.querySelector("#pantallaGestionUsuarios").style.display = "none";
    ocultarPantallaRegistroUsuario();
}

function ocultarPantallaLogin() {
    document.querySelector("#pantallaLogin").style.display = "none";
    document.querySelector("#txtLoginUsuario").value = 'bdiaz';
    document.querySelector("#txtLoginPassword").value = '123';
    document.querySelector("#divLoginMensajes").innerHTML = '';
}

function ocultarPantallaRegistroUsuario() {
    document.querySelector("#pantallaRegistroUsuario").style.display = "none";
    document.querySelector("#txtRegistroUsuarioUsuario").value = '';
    document.querySelector("#txtRegistroUsuarioPassword").value = '';
    document.querySelector("#divRegistroUsuarioMensajes").innerHTML = '';
}

function mostrarPantallaLogin() {
    ocultarPantallas();
    document.querySelector("#pantallaLogin").style.display = "block";
}

function mostrarPantallaRegistroUsuario() {
    ocultarPantallas();
    document.querySelector("#pantallaRegistroUsuario").style.display = "block";
}

function mostrarPantallaGestionUsuarios() {
    ocultarPantallas();
    actualizarTablaDeUsuarios();
    document.querySelector("#pantallaGestionUsuarios").style.display = "block";
}

function iniciarSesion() {
    let mensaje = '';
    let usuarioIngresado = document.querySelector("#txtLoginUsuario").value;
    let passwordIngresado = document.querySelector("#txtLoginPassword").value;
    usuarioIngresado = usuarioIngresado.trim();
    passwordIngresado = passwordIngresado.trim();
    if (usuarioIngresado.length > 0 && passwordIngresado.length > 0) {
        let puedeIniciarSesion = existeUsuarioHabilitadoPorUsuarioYPassword(usuarioIngresado, passwordIngresado);
        if (puedeIniciarSesion) {
            usuarioEstaLogueado = true;
            mostrarPantallaGestionUsuarios();
            actualizarMenu();
        } else {
            mensaje = "Los datos son incorrectos o el usuario no está habilitado.";
        }
    } else {
        mensaje = "Todos los campos son obligatorios.";
    }
    document.querySelector("#divLoginMensajes").innerHTML = mensaje;
}

function existeUsuarioHabilitadoPorUsuarioYPassword(usuario, password) {
    let existe = false;
    let i = 0;
    let nombreUsuarioEncontrado = false;
    while (!nombreUsuarioEncontrado && i < usuarios.length) {
        let usuarioGuardado = usuarios[i];
        if (usuario === usuarioGuardado.usuario) {
            nombreUsuarioEncontrado = true;
            let passwordGuardado = usuarioGuardado.password;
            if (password === passwordGuardado) {
                if (usuarioGuardado.habilitado) {
                    existe = true;
                }
            }
        }
        i++;
    }
    return existe;
}

function obtenerUsuarioPorUsuario(usuario) {
    let usuarioEncontrado = null;
    let i = 0;
    while (!usuarioEncontrado && i < usuarios.length) {
        let usuarioGuardado = usuarios[i];
        if (usuario === usuarioGuardado.usuario) {
            usuarioEncontrado = usuarioGuardado;
        }
        i++;
    }
    return usuarioEncontrado;
}

function actualizarTablaDeUsuarios() {
    let tbodyHTML = ``;

    for (let i = 0; i < usuarios.length; i++) {
        let usuarioActual = usuarios[i];
        let nombreUsuarioActual = usuarioActual.usuario;
        let sexoUsuarioActual = usuarioActual.obtenerSexo();
        let imagenUsuarioActual = usuarioActual.obtenerImagen();
        let textoParaBotonDeAcciones = "Habilitar";
        if (usuarioActual.habilitado) {
            textoParaBotonDeAcciones = "Deshabilitar";
        }

        tbodyHTML += `<tr>
                        <td>${nombreUsuarioActual}</td>
                        <td>${sexoUsuarioActual}</td>
                        <td><img class="imagenUsuario" src="img/${imagenUsuarioActual}"></td>
                        <td><input nombreUsuario="${nombreUsuarioActual}" class="btnCambiarEstadoUsuario" type="button" value="${textoParaBotonDeAcciones}"></td>
                    </tr>`;
    }

    document.querySelector("#tablaUsuarios").innerHTML = tbodyHTML;
    // Recién acá puedo agregar evento de clicks a los botones de la tabla (antes, no existían en el HTML)
    let botonesDeLaTabla = document.querySelectorAll(".btnCambiarEstadoUsuario");
    for (let i = 0; i < botonesDeLaTabla.length; i++) {
        let botonActual = botonesDeLaTabla[i];
        botonActual.addEventListener("click", btnCambiarEstadoUsuarioHandler);
    }
}

function btnCambiarEstadoUsuarioHandler() {
    let nombreDeUsuarioDeBotonClickeado = this.getAttribute("nombreUsuario");
    let usuarioDeBotonClickeado = obtenerUsuarioPorUsuario(nombreDeUsuarioDeBotonClickeado);
    cambiarEstadoUsuario(usuarioDeBotonClickeado);
    actualizarTablaDeUsuarios();
}

function cerrarSesion() {
    usuarioEstaLogueado = false;
    mostrarPantallaLogin();
    actualizarMenu();
}

function actualizarMenu() {
    if (usuarioEstaLogueado) {
        document.querySelector("#btnMenuCerrarSesion").style.display = "block";
        document.querySelector("#btnMenuRegistroUsuario").style.display = "none";
        document.querySelector("#btnMenuLogin").style.display = "none";
    } else {
        document.querySelector("#btnMenuCerrarSesion").style.display = "none";
        document.querySelector("#btnMenuRegistroUsuario").style.display = "block";
        document.querySelector("#btnMenuLogin").style.display = "block";
    }
}

function btnRegistroUsuarioIngresarHandler() {
    let mensaje = '';
    let usuarioIngresado = document.querySelector("#txtRegistroUsuarioUsuario").value;
    let passwordIngresado = document.querySelector("#txtRegistroUsuarioPassword").value;
    let sexoSeleccionado = document.querySelector("#selectRegistroUsuarioSexo").value;
    let fotoSubida = document.querySelector("#fileRegistroUsuarioFoto").value;
    if (fotoSubida) {
        let posicionCaracterContrabarra = obtenerUltimaPosicionDeCaracter(fotoSubida, "\\");
        fotoSubida = cortarStringDesdeIndice(fotoSubida, posicionCaracterContrabarra+1);
    }

    usuarioIngresado = usuarioIngresado.trim();
    passwordIngresado = passwordIngresado.trim();
    if (usuarioIngresado.length > 0 && passwordIngresado.length > 0) {
        let puedeSerRegistrado = !obtenerUsuarioPorUsuario(usuarioIngresado);
        if (puedeSerRegistrado) {
            registrarUsuario(usuarioIngresado, passwordIngresado, sexoSeleccionado, fotoSubida);
            mensaje = "Usuario guardado.";
        } else {
            mensaje = "Ya existe un usuario con ese nickname.";
        }
    } else {
        mensaje = "Todos los campos son obligatorios.";
    }
    document.querySelector("#divRegistroUsuarioMensajes").innerHTML = mensaje;
}

function obtenerUltimaPosicionDeCaracter(texto, caracter) {
    return 11;
}

function cortarStringDesdeIndice(texto, indice) {
    let retorno = "";

    for (let i = indice; i < texto.length; i++) {
        retorno += texto[i];
    }

    return retorno;
}

function btnMenuRegistroUsuarioHandler() {
    mostrarPantallaRegistroUsuario();
}

function btnMenuLoginHandler() {
    mostrarPantallaLogin();
}

function registrarUsuario(usuario, password, sexo, imagen) {
    let nuevoUsuario = new Usuario(usuario, password, null, sexo, imagen);
    usuarios.push(nuevoUsuario);
}

function cambiarEstadoUsuario(usuario) {
    let usuarioEstaHabilitado = usuario.habilitado;

    if (usuarioEstaHabilitado) {
        usuario.habilitado = false;
    } else {
        usuario.habilitado = true;
    }

    // usuario.habilitado = !usuario.habilitado;
}

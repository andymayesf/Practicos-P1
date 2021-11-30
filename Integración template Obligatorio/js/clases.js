class Usuario {
    constructor(pUsuario, pPassword, pFechaNacimiento, pSexo, pImagen) {
        this.usuario = pUsuario;
        this.password = pPassword;
        this.fechaNacimiento = pFechaNacimiento;
        this.sexo = pSexo;
        this.imagen = pImagen;
        this.habilitado = false;
    }

    obtenerSexo() {
        let sexoParaMostrar = '';

        if (!this.sexo) {
            sexoParaMostrar = "";
        } else if (this.sexo === "M") {
            sexoParaMostrar = "Masculino";
        } else if (this.sexo === "F") {
            sexoParaMostrar = "Femenino";
        } else {
            sexoParaMostrar = "Otro";
        }

        return sexoParaMostrar;
    }

    obtenerImagen() {
        let imagenParaDevolver = '';

        if (this.imagen) {
            imagenParaDevolver = this.imagen;
        } else {
            if (!this.sexo) {
                imagenParaDevolver = 'otros.png';
            } else if (this.sexo === "M") {
                imagenParaDevolver = "masculino.png";
            } else if (this.sexo === "F") {
                imagenParaDevolver = "femenino.png";
            }
        }
        return imagenParaDevolver;
    }
}

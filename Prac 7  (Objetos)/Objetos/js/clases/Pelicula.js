class Pelicula {
    constructor(pNombre, pAnio, pGenero, pCantidadVotantes, pTotalPuntos) {
        this.nombre = pNombre;
        this.anio = pAnio;
        this.genero = pGenero;
        this.cantidadVotantes = pCantidadVotantes;
        this.totalPuntos = pTotalPuntos;
    }

    obtenerGenero() {
        let generoParaMostrar = '';

        if (!this.genero) {
            generoParaMostrar = ""
        } else if (this.genero == "com") {
            generoParaMostrar = "Comedia";
        } else if (this.genero == "dra") {
            generoParaMostrar = "Drama";
        } else if (this.genero == "cf") {
            generoParaMostrar = "Ciencia Ficcion";
        }

        return generoParaMostrar
    }

    calcularPromedio() {
        let promedio = 0
        if (this.cantidadVotantes > 0) {
            promedio = this.totalPuntos / this.cantidadVotantes
        }
        return promedio
    }

    
}
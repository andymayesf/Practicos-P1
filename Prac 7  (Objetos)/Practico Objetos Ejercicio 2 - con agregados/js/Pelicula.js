class Pelicula {
    constructor(pNombre, pAnio, pGenero, pCantidadVotantes, pTotalPuntos) {
        this.nombre = pNombre;
        this.anio = pAnio;
        this.genero = pGenero;
        this.cantidadVotantes = pCantidadVotantes;
        this.totalPuntos = pTotalPuntos;
    }

    promedio() {
        let promedio = 0;
        if (this.cantidadVotantes > 0) {
            promedio = this.totalPuntos / this.cantidadVotantes;
        }
        return promedio;
    }
}

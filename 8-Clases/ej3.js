class Rectangulo {
    constructor(largo, ancho){
        this.largo = largo,
        this.ancho = ancho

    }
    calcularArea(){
        return this.largo * this.ancho
    }

    calcularPerimetro(){
        return (this.largo+this.ancho)*2
    }
}

let rectangulo = new Rectangulo (6,4)

console.log(rectangulo.calcularArea())
console.log(rectangulo.calcularPerimetro())
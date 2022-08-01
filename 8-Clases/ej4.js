// Nota: 1€ = 1,03$ / 1$ = 0,97€

class Finanzas {
    dolaresToEuros(dolares){
        return dolares * 0.97
    }

    eurosToDolares(euros){
        return euros * 1.03
    }
}


let resultado = new Finanzas
console.log(resultado.dolaresToEuros(5))
console.log(resultado.eurosToDolares(10))
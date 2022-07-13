//para saber cómo se utiliza el paquete supervillians, vamos a npm para documentarnos. Utilizaremos 'all' para traernos el nombre de todos los supervillians

let supervillians = require ('supervillains')
let factorial = require('./funciones/funcion')


for (let i = 0; i < 4; i++) {
    
    console.log(supervillians.all[factorial(Math.floor(Math.random() * (5 - 1) + 1))])
    
}
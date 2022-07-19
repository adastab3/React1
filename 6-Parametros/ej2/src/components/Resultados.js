import {useParams, Link} from 'react-router-dom'


function Resultados(){
    let parametros = useParams()
    let num1 = parseInt(parametros.num1)
    let num2 = parseInt(parametros.num2)

    return (
        <>
        <h1>Resultados</h1>
        <p>Suma: {num1}+{num2} = {num1 + num2}</p>
        <p>Resta: {num1}-{num2} = {num1 - num2}</p>
        <p>Multiplicación: {num1}*{num2} = {num1 * num2}</p>
        <p>División: {num1}/{num2} = {num1 / num2}</p>
        <p>Resto: {num1}%{num2} = {num1 % num2}</p>
        <Link to="/">Ocultar</Link>
        
        </>

    )
}

export default Resultados
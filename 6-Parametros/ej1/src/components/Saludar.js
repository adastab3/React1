import {useParams} from 'react-router-dom'

function Saludar(){
    let parametros = useParams ()

    return (
        <>
        <h1>Hola {parametros.nombre}</h1>
        </>
    )
    
}
export default Saludar
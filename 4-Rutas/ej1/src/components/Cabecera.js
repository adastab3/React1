import {Link} from 'react-router-dom'

function Cabecera(){
    return (
        <>
        <div>
            <header>
                <h1>Aplicación Días/Meses</h1>
                <div>
                <nav>
                    <Link to= '/meses'>Meses</Link>
                    <Link to= '/dias/'>Dias</Link>
                </nav>
                </div>
            </header>
        </div>
        </>
    )
}
export default Cabecera
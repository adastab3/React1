
import {Link} from 'react-router-dom'

function Videojuego({videojuego, full}){
    if (!full) {
        return (
            <>
            <div>
            <Link to ={'/' + videojuego.titulo.replaceAll(" ", "-")}>
            <h1>{videojuego.titulo}</h1>
            </Link>
       
        </div>
        </>
            

        )
        
    } else {
        return (
   
        <div className="card">
            <img src={videojuego.portada} alt={videojuego.titulo}/>
            <h2>{videojuego.titulo}</h2>
            <p>{videojuego.informacion}</p>
            
        </div>
  
        

    )
    }
    
    
    
}


export default Videojuego

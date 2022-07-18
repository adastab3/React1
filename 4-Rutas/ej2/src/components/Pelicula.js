import {Link} from "react-router-dom";

function Pelicula(props) { 
    
    if(props.full){
        return (
            <div className="card">
            <img src={props.cartel} alt={props.titulo} />
            <Link to={'/' + props.titulo.replaceAll(" ", "-")}> 
            <h1>{props.titulo}</h1> 
             </Link>
             <p>{props.sinopsis}</p>
        </div>

        )
    } else {
        return (
            <div className="card">
            <img src={props.cartel} alt={props.titulo} />
            <Link to={'/' + props.titulo.replaceAll(" ", "-")}> <h1>{props.titulo}</h1> </Link>
        </div>
    )}

}
export default Pelicula;
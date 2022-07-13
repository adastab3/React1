function Casa (props){
    return (
        <div>
            <h2>{props.datos.nombre}</h2>
            <img src={props.datos.img} alt={props.datos.nombre} />
            <p>{props.datos.ciudad}</p>
            <p>{props.datos.precio}</p>
            <p>{props.datos.metros}</p>
            <p>{props.datos.caracteristicas}</p>
        </div>
    )
}

export default Casa;
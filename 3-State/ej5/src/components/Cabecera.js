function Cabecera(props){
    return (
        <>
        <header>
            <h1>Biblioteca</h1>
            <div>
                <p>{props.biblioteca.usuario.vip ? 'Hola' + props.biblioteca.usuario.nombre : props.biblioteca.usuario.nombre}</p>
                <img src ={props.biblioteca.usuario.imagen} alt = {props.biblioteca.usuario.name} />
            </div>
        </header>
        </>
    )
}

export default Cabecera
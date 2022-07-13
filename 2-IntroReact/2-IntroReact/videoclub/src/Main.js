//En este caso creamos el componente Tarjeta en el mismo componente Main, ya que va a ser utilizado por éste
// NO hace falta importarlo porque ya está definido aquí dentro.


function Tarjeta(props){
    return (
        <div className ="card">
            <img src={props.cartel} alt = {props.titulo} />
            <div className = "container">
                <h4>{props.titulo}</h4>
                <p>{props.sinopsis}</p>
            </div>
        </div>

    )

}

//con la funcion 'map' llamamos al componente tantas veces como peliculas (en este caso) hay en el array
//map manipula cada uno de los elementos del array (props.peliculas) y devuelve algo que mete en otro array
// la funcion map recibe dor argumentos: el 1ro. es cada uno de los elementos del array ( en este caso lo llamamos 'pelicula')
// y el 2do. es el índice que ocupaba cada uno de esos elementos ( lo llamaremos en este caso 'index')
// Main recibe el array de peliculas (props)
// Le hace un 'map' a ese props en el que acada pelicula, le encarga un componente Tarjeta
// cuando acabe de recorrer todo ese map (mapeo), lo que voy a tener es otro array (arrayFinal)
// si consultamos la consola en el inspector de chrome ( al hacer un console.log) lo que nos devuelve el map es en realidad un array de componentes de react



function Main (props){
    let arrayFinal = props.peliculas.map((pelicula, index) => {
        return (
        <Tarjeta 
            key = {index}
            cartel={pelicula.cartel} 
            titulo={pelicula.titulo} 
            sinopsis={pelicula.sinopsis} 
        />
        )
    })
    console.log(arrayFinal)
    return (
    <main className ="catalogo">
        {arrayFinal}
    </main>

    );
}

export default Main


// se podría simplificar la funcion Main, metiendo directamente entre {} en las etiquetas del <main>

/* function Main (props){
    return (
    <main>
        { props.peliculas.map((pelicula, index) => {
        return (
        <Tarjeta 
            cartel={pelicula.cartel} 
            titulo={pelicula.titulo} 
            sinopsis={pelicula.sinopsis} 
        />
        )
    })}
    </main>

    );
}*/



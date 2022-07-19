function Lista(props){
    return(
    <div>
      <ul>
        {props.lista.map((compositor, index)=> <li key ={index} >{compositor.nombre}</li>)}
      </ul>
    </div>
        
    )
    
}

export default Lista
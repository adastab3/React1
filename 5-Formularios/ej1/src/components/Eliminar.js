import {useState} from 'react'

function Eliminar(props){
    const [input2, setInput2] = useState('')

     function borrarCompositor(nombre){
        let array = props.init.filter(compositor => {return compositor.nombre !== nombre
    })
      props.setInit(array)
      setInput2('')

 } 
    return (
        <div>
        <input type='text' onChange={(event)=> {setInput2(event.target.value)}}  value ={input2}/>
        <button onClick={()=> {
          borrarCompositor(input2)
          }}>Eliminar</button>
        </div>

    )

    
}


export default Eliminar
import {useState} from 'react'
import './App.css';
//Import components
import EliminarCompositor from './components/EliminarCompositor'





function App() {
  const [input, setInput] = useState('')
  const [init, setInit] = useState(['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach'])
  const [input2, setInput2] = useState('')

  
 


  return (
    <>
    <div>
      <ul>
        {init.map((compositor)=> <li>{compositor}</li>)}
      </ul>
    </div>
    <div>
    <input type='text' value={input} onChange={(event)=>setInput(event.target.value)}/>
    <button onClick={()=> {
       let newArray=[...init]
       newArray.push(input)
       setInit(newArray)
       setInput('')
    }}>Añadir</button>
    </div>
    <input type='text' value ={input2} onChange={(event)=>setInput2(event.target.value)}/>
    <button onClick={}>Eliminar</button>
    
    </>
 
  );
}

export default App;

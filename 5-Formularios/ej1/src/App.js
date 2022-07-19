import {useState} from 'react'
import './App.css';
import Eliminar from './components/Eliminar';
import Lista from './components/Lista'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'




function App() {
  const [input, setInput] = useState('')
  const [init, setInit] = useState([
    {
    nombre: 'Ludwig van Beethoven',
    fecha: 1770,
    canciones: ['Symphonie No.5', 'Piano Sonata No.32']},
    {
    nombre: 'Johann Sebastian Bach',
    fecha: 1685,
    canciones: ['Vivace', 'Largo ma non tanto']}, 
    {
    nombre: 'Wolfgang Amadeus Mozart',
    fecha: 1756,
    canciones: ['Symphonie Nr 40', 'Don Giovanni']
    }
  ])
  


  return (
    <BrowserRouter>
    <header>
      <nav>
       
        <ul>
          <li> <Link to='/'>Inicio</Link></li>
          <li> <Link to='/eliminar' >Eliminar</Link></li>
        </ul>
        
      </nav>
    </header>
    <Routes>
      <Route path='/' element = {
        <>
        <Lista lista = {init} />
        <input type='text' value={input} onChange={(event)=>setInput(event.target.value)}/>
        <button onClick={()=> {
          let newArray=[...init]
          newArray.push({nombre:input})
          setInit(newArray)
          setInput('')
          }}>Añadir</button>
  
        </>
      } />
    
    <Route path="/eliminar" element = { <Eliminar init={init} setInit={setInit}/>} />
   
   
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;

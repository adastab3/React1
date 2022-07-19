import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import Saludar from './components/Saludar';
import './App.css';

function App() {
  let [input, setInput] = useState('')
  return (
    <BrowserRouter>
    <Routes>
      <Route index element= {
        <>
          <input type='text' placeholder='Introduce tu nombre' onChange={(e) =>setInput(e.target.value)} value ={input}/>
          <Link to={"/saludar/" + input}><button>Saludar</button></Link> 
        </>
      } />
      <Route path = "/saludar/:nombre" element = { <Saludar input={input} setInput={setInput} /> } />
        
      
    </Routes>
    </BrowserRouter>



  )


  
}

export default App;

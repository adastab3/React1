
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Resultados from './components/Resultados'

function App() {
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <h2>{num1}</h2> 
      <button onClick={()=> {setNum1(num1+1)}} >+</button>
      <button onClick={()=> {setNum2(num1-1)}} >-</button>
    </div>
     
    <div>
      <h2>{num2}</h2>
      <button onClick={()=> {setNum2(num2+1)}} >+</button>
      <button onClick={()=> {setNum2(num2-1)}} >-</button>
    </div>
    <Link to={`/resultados/${num1}/${num2}`}>Resultados</Link>
    <button onClick={()=>{setNum1(0); setNum2(0)}}>Reset</button>
    <Routes>
      <Route path="/resultados/:num1/:num2" element={
        <Resultados />

      }/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

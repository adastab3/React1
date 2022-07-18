import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import videoclub from './datos/catalogo'


import './App.css';
import Catalogo from './components/Catalogo';
import Pelicula from './components/Pelicula';


function App() {
  const [catalogo] = useState(videoclub)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Catalogo catalogo={catalogo}/>} />
      {catalogo.map((pelicula, index) =>{
        return (
        <Route path={'/' + pelicula.titulo.replaceAll(" ","-")} element = {<Pelicula key = {index} full ={true} sinopsis ={pelicula.sinopsis} cartel ={pelicula.cartel} titulo = {pelicula.titulo}/>}/>
        )
      })}     
   
    </Routes>
    </BrowserRouter>

  );
}

export default App;

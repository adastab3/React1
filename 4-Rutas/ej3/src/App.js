import './App.css';
import {useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import videojuegos from './datos/videojuegos'

//Import components
import Videojuego from './components/Videojuego';



function App() {
  const [juegos] = useState (videojuegos)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {juegos.map((videojuego, index) => {
    return <Videojuego full ={false} videojuego={videojuego} key = {index} />
    })
    } 
    />

    {juegos.map((videojuego, index) => {
      return (
      <Route path= {'/' + videojuego.titulo.replaceAll(" ","-")} element ={<Videojuego full = {true} videojuego={videojuego} key={index} />}  />
      )
    }
    )}

  
  </Routes>
  </BrowserRouter>
    
  
  );
}

export default App;



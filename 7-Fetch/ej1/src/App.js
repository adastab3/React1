import { useEffect, useState } from 'react'

import './App.css';



function App() {

  let [data, setData] = useState ([])
  let [url, setUrl] = useState ('https://rickandmortyapi.com/api/character/')
  let [next, setNext] = useState ('')
  let [prev, setPrev] = useState (null)

  useEffect(() => {
    fetch(url).then(res => res.json()).then(datos => {
      setData(datos.results)
      setNext(datos.info.next)
      setPrev(datos.info.prev)
    })
    
}, [url])

console.log(data)


  return (
    <>
    <div className='catalogo'>
    {data.map((personaje, index) => {
      return (
        <div className='card'>
          <img src={personaje.image} alt ={personaje.name} />
          <h4>{personaje.name}</h4>
        </div>
  
      ) 
    })}
    </div>
    {prev !== null ? (
    <button onClick={()=> setUrl(prev)}>Anterior</button>
    ) : (
      <button disabled >Anterior</button>
    )}

    {next !== null ? (  
    <button onClick={()=> setUrl(next)}>Siguiente</button>
    ) : (
      <button disabled >Siguiente</button>
    )}
  
    </>
  )
}

export default App;

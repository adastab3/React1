import {useEffect, useState} from 'react'

import './App.css';

function App() {
  let [data, setData] = useState ([])
  let [data2, setData2] = useState ([])
  let [data3, setData3] = useState ([])
  let [select, setSelect] = useState ("")
  let [loading, setLoading] = useState (true)

  useEffect(()=> {
    setLoading(true)
    fetch('https://swapi.dev/api/planets/').then (res =>res.json()).then(datos => {
      setData(datos.results)
      setLoading(false)

    })
  }, [])

  useEffect(()=>{
    setLoading(true)
    fetch(select).then (res =>res.json()).then(datos => {
      setData2(datos.residents)
      data.length > 1 ? setLoading(false) : setLoading(true)
      

    })

  },[select])

  useEffect(()=> {
    setLoading(true)
    Promise.all(data2.map((url)=> fetch(url))).then((respuesta)=> Promise.all(respuesta.map((res) => res.json()))).then((datos) =>{
      setData3(datos)
      data.length > 1 ? setLoading(false) : setLoading(true)
      
    });  

  },[data2])

  

  if (loading) {
    return <h1>Cargando...</h1>
  }else {
    return (
      <div>
    <h1>Personajes de Star Wars por planeta</h1>
      <select onChange={(e)=> setSelect(e.target.value)}>   
      {data.map((planeta, index)=>{
        return (
         <option key={index} value={planeta.url}>{planeta.name}</option>
         
        )
      })}
     </select>
     {/* NO SE POR QUÉ EN EL SELECT SIEMPRE SE QUEDA SELECCIONADO EL PRIMER ITEM DE LA LISLA */}
     <ul>
      {data3.map((personaje, index) => {
        return <li key={index}>{personaje.name}</li>
      })}
     </ul>
  
    </div>
    )
  }
  
   
  
}

export default App;

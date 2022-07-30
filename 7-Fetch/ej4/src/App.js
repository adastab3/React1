import {useEffect, useState} from 'react'
import './App.css';



function App() {
  let [data, setData] = useState ([])
  let [data2, setData2] = useState([])
  let [select, setSelect] = useState ("")
  let [loading, setLoading] = useState (false)
  let [loading2, setLoading2] = useState (true)

  useEffect(()=>{
    setLoading(true)
    fetch('https://api.magicthegathering.io/v1/sets').then(res=> res.json()).then(datos =>setData(datos.sets), setLoading(false))}, [])

  useEffect(()=>{
    setLoading2 (true)
    if(select !== '') {
    fetch(`https://api.magicthegathering.io/v1/cards/?set=${select}`).then(res=>res.json()).then(datos => setData2(datos.cards), setLoading2(false))
    }
  },[select])


  if (loading){
    return <h1>Loading...</h1>

  }else{

  return (
    <>
    <select onChange={(e)=>setSelect(e.target.value)}>
      {data.map((set, index)=> {
      return <option key={index} value={set.code}>{set.name}</option>})}
    </select>
    <div className='catalogo'>
      {data2.map((carta, index)=>{
        return (
          <div key={index} className='card'>
            <img src={carta.imageUrl} alt={carta.name} />
            <h3>{carta.name}</h3>
            <h5>
              Tipo: {carta.type} | Coste: {carta.manaCost}
            </h5>
            <p>{carta.text}</p>
          </div>

        )
      })}

    </div>
    </>
  )

   
  }

  
}

export default App

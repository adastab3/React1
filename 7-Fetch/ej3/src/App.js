import {useEffect, useState} from 'react'
import './App.css';

function App() {
  let [data, setData] = useState ([])
 
  let [select, setSelect] = useState ("")
  let [pokemons, setPokemons] = useState ([])


  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/type').then(res => res.json()).then((datos) => {setData(datos.results)
 
  }) 
},[])

  useEffect(()=>{
    fetch(select).then(res => res.json()).then((datos)=> {
      let data2 = datos.pokemon
      let pokemonsRND = []
      for (let i = 0; i < 3; i++) {
        let rnd = Math.floor(Math.random()*data2.length)
        pokemonsRND.push(data2[rnd].pokemon.name)
      }
      setPokemons(pokemonsRND)
    })
  }, [select])

  return (
    <>
    <select onChange={(e)=> setSelect(e.target.value)}>
      {data.map((tipo, index)=>{
        return <option key={index} value={tipo.url}>{tipo.name}</option>
      })}
    </select>
    <ul>
      {pokemons.map((pokemon, index)=> {
        return <li key={index}>{pokemon}</li> 
      })}
    </ul>
  

   </>
    
    
  );
}

export default App;


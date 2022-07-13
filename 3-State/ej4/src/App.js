import {useState} from 'react'

function App(){
    const [contador, setContador] = useState(0)
return (
    <>
    <h1>{contador}</h1>
    <button onClick = {()=>setContador(contador+1)}>+</button>
    <button onClick = {()=>setContador(contador-1)}>-</button>
    </>
)}

export default App
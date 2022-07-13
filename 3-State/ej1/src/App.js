
import './App.css';
import persona from './persona';

function App() {
  return (
    <>
    <h1>{persona.nombre}</h1>
    <div>
    <p>Edad: {persona.edad}</p>
    <p>Nacimiento: {persona.nacimiento}</p>
    <div>Dirección:
      <p>Calle: {persona.direccion.calle} , {persona.direccion.numero}</p>
      <p>Piso: {persona.direccion.piso}</p>
      <p>{persona.direccion.cp} - {persona.direccion.ciudad}</p>
    </div>
    <p>Grupo sanguíneo: {persona.grupoSanguinero.grupo} {persona.grupoSanguinero.rh}</p>
    </div>
    </>
 
  );
}

export default App;


import './App.css';

function App() {
  let array = ['Charmander', 'Bulbasur', 'Squirtle']
  return (
    <>
    <ul>
      {array.map((pokemon)=><li>{pokemon}</li>)}

    </ul>
    </>
 
  );
}

export default App;

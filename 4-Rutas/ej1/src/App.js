import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
//Import components
import Cabecera from './components/Cabecera';
import Dias from './components/Dias';
import Meses from './components/Meses';

function App() {
  return (
    <BrowserRouter>
    <Cabecera />
    <Routes>
      <Route path= '/meses' element= {<Meses/>}/>
      <Route path = '/dias' element ={<Dias />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

// este es nuestro archivo entry point
import './App.css';
import biblioteca from './service/biblioteca';

//Import components

import Cabecera from './components/Cabecera';
import Libro from './components/Libro';

function App(){
    return (
       <>
        <Cabecera biblioteca ={biblioteca} />
        <main className='catalogo'>
            {biblioteca.libros.map((librito, index) =>{
                return <Libro libro={librito} />
            })}
        </main>
        </>
        
    )
}

export default App
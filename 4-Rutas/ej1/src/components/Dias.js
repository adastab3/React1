function Dias (){
let dias = {
    uno: 'Lunes',
    dos: 'Martes',
    tres: 'Miércoles',
    cuatro: 'Jueves',
    cinco: 'Viernes',
    seis: 'Sábado',
    siete: 'Domingo',
}

{/* hay que meter el objeto 'dias' en un array, porque react solo puede hacer un mapeo de un array, no de un objeto .map devuelve siempre un array*/}


let diasLi=[]
for (const dia in dias) {
    diasLi.push((dias[dia]))

        
    }


return (
    <>
    <ul>
        {diasLi.map((dia) =><li>{dia}</li>)}   
    </ul>
    </>

);
}
export default Dias
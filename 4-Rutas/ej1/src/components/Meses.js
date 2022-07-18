function Meses(){
let meses = ['enero', 'febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    return (
        <>
        <ul>
            {meses.map((mes) => <li>{mes}</li>)}
        </ul>
        </>
        
    )
}

export default Meses    
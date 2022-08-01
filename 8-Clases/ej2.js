//Nota: 1 milla marina = 1609,34 metros

class Distancia {
   
    millasAMetros(millas){
        return millas * 1609.34
    }

    millasAKilometros(millas){
       
        return   (millas * 1609.34) / 1000
    }

}


let millas = new Distancia ()
console.log (millas.millasAMetros(1500), millas.millasAKilometros(1500))

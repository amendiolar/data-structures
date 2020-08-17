
/*
4.-  Un almacén tiene capacidad para apilar n contenedores. Cada contenedor tiene un número
de identificación. Cuando se desea retirar un contenedor específico, deben retirarse
primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro
y regresarlos. 
*/


pila = []

function almacen(n) {
    // construir la pila
    for(var i=0; i<n; i++){
        pila.push(`c${[i+1]}`)
    }
    return pila
}

newPila =[]
arregloFinal = []

function retirar(contenedor){
    for(var i=0; i<pila.length-1; i++){
        if(pila[i] < contenedor){
            newPila.push(pila[i])
        }
    }

    for(var j=0; j<newPila.length+1; j++){
            pila.shift()
        }    

     return `Contenedores retirados ${newPila} y contenedores remanentes ${pila}`
   
}

arregloFinal = []

function acomodar(){
    for(var i=0; i<newPila.length; i++){
        arregloFinal.push(newPila[i])
    }

    for(var j=0; j<pila.length; j++){
        arregloFinal.push(pila[j])
    }

    return `La nueva pila es ${arregloFinal}`

}


console.log(almacen(8))
console.log(retirar("c7"))
console.log(acomodar())

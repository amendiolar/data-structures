
/*
2.- Escribir una función reemplazar que tenga como parámetro una pila de elementos 
de tipo Number y dos valores también de tipo Number nuevo y viejo de forma que si 
el segundo valor aparece en algún lugar de la pila,sea reemplazado por el primero 
(Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,5,8,1,7]
*/





function remplazar(pila, numeroNuevo, numeroViejo) {
    for(var i=pila.length -1; i >= 0; i--){
        var numero = pila[i]
        if(numero != numeroViejo){
            pila.pop()
        } else if(numero == numeroViejo){
            pila.pop()
            pila.push(numeroNuevo)

            return pila
        }
    }
}

console.log(remplazar([3,2,3,4,6,8,1,2,5,5],7,2))



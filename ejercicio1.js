
/*
1.- Hacer una función que reciba una pila como parámetro, y un número, la función debe de sacar 
el número de elementos que diga el número (segundo parámetro)
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
Salida: ['Manzana','Cebolla','Apio','Naranja']
*/




var myPila = []
var numero = 0
var residuo = myPila

/*  Primera version Abel
function mifuncion(myPila,numero){
    for (var i= 0 ; i < numero; i++){
        console.log(myPila)
        console.log(numero)
        if(myPila != []){
            console.log(residuo[i])
        residuo[i].push(myPila - myPila.pop()) 
        console.log(myPila.pop())
        console.log(residuo[i])
        return residuo, myPila
        }
    }
} */

/* 2a version Abel
function mifuncion(myPila,numero) {
    console.log(myPila)
    console.log(numero)
    console.log(myPila.length)
    console.log(myPila.length - numero)
    while (myPila.length > (myPila.length -numero)){
        console.log(myPila.pop())
        residuo -= myPila.pop()
        return myPila
    }
    return residuo
}
*/

function miFuncion(pila, valor) {
        if (pila.length >= valor) {
            console.log(pila);
            for (let i = 0; i < valor; i++) {
                pila.pop()
            }
            return pila
        } else {
            return `valor invalido, ${valor} es mayor que ${pila.length}`
        }
    }
    




console.log(miFuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],3))



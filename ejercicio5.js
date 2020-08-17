
/*
5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola 1: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 2: [ amarillo, rojo, azul, morado]
Cola 3: [rosa, verde, negro, blanco]
*/

// Los metodos que tiene un queue:
// enqueue ---> encolar
// dequeue ---> sacar de la fila
// length ----> tamano de la fila
// isEmpty ---> si la pila esta vacia
// front ----> es el primer elemento de la fila

class Queue {

    constructor(){
        this.collection = [] // esto es la fila
    }

    enqueue(item){ // agrega un nuevo elemento a la fila
        this.collection.push(item)
    }

    dequeue (){
        return this.collection.shift() // siempre va a sacar el primero
    }

    length(){ // el numero de elementos en mi fila
        return this.collection.length
    }

    isEmpty(){
        return this.collection.length === 0
    }

    front(){
        return this.collection[0] // el primer elemento en la fila
    }
}

/* NO FUNCIONO
const cola2 = new Queue()
const cola3 = new Queue()
function encolar(cola1) {
    for(var i=0; i<cola1.length; i++){
       if(i%2 === 0) {
        cola2.enqueue(cola1[i])
       } else {
           cola3.enqueue(cola1[i])
       }    
    }
    console.log(`cola2 = ${cola2}`)
    console.log(`cola3 = ${cola3}`)
    
}
*/


var cola2 = []
var cola3 = []
function encolar(cola1) {
    for(var i=0; i<cola1.length; i++){
       if(i%2 === 0) {
        cola2.push(cola1[i])
       } else {
           cola3.push(cola1[i])
       }    
    }
    console.log(`cola2 = ${cola2}`)
    console.log(`cola3 = ${cola3}`)
    
}



var cola1 = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco']
console.log(encolar(cola1))



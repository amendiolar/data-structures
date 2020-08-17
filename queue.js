
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

const filaDeTortillas = new Queue()
filaDeTortillas.enqueue("Edwin")
filaDeTortillas.enqueue("Raul")
filaDeTortillas.enqueue("Mali")
filaDeTortillas.enqueue("Mau")
console.log(filaDeTortillas)
console.log("El primero en la fila", filaDeTortillas.front())
console.log("Atendiendo al cliente")
filaDeTortillas.dequeue()
console.log("El primero en la fila", filaDeTortillas.front())
console.log("Quedan por atender", filaDeTortillas.length())
console.log(filaDeTortillas.isEmpty())
console.log("Atendiendo al Cliente")
filaDeTortillas.dequeue()
console.log("El primero en la fila", filaDeTortillas.front())


class Song{
    constructor(title,duration){
        this.title = title
        this.duration = duration
    }

    play(){
        return `reproduciendo ${this.title}`
    }
}

const myPlayList = new Queue()
const song1 = new Song("El triste", "2:30")
const song2 = new Song('La Chona', "3:30")
const song3 = new Song("Cumbion Chido", "2:30")

myPlayList.enqueue(song1)
myPlayList.enqueue(song2)
myPlayList.enqueue(song3)

setInterval(function(){ //va a ejecutar esto cada tres segundos
    if(!myPlayList.isEmpty()){
        console.log(myPlayList.dequeue().play())
    }else{
        console.log('se acabo la fiesta')
    }
}, 3000) //3000 milisegundos
    








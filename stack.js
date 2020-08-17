
const myPila = [] // Esto es una pila vacia

// Vamos a pilar Libros

myPila.push("El Quijote de la Mancha")
myPila.push("El principito")
console.log("myPila",myPila)
myPila.pop()
console.log("myPila",myPila)

const word = "hannah"  // Comprobar si es un palindromo
var revert_word = ""; // Esta sirve para covertir el palindromo
const letters = [] // la pila de letras
word[0] // a
word[6] // espacio
for (var i=0; i < word.length; i++){
    if(word[i] != " "){
    letters.push(word[i])
    }
}
console.log(letters)

for (var i= 0 ; i < word.length; i++){
    if(word[i] != " "){
    revert_word = revert_word + letters.pop() // esta concatenando letras
    }
}
console.log("revert_word", revert_word)

if(word == revert_word){
    console.log(`${word} es un palindromo`)
} else{
    console.log(`${word} NO es un palindromo`)
}


class stack{
    // Este stack va a tener dos metodos: push y pop
    // peek ---> dice el ultimo elemento de la pila
    // length ---> dice el tamano de la pila

    constructor(){
    this.count = 0 // almacen la cantidad de elementos en la pila
    this.storage = {} // guarda los elementos de la pila
    }

    push(nuevoElemento){ // adiciona elementos a la pila
        // {0:"x", 1:"y", 2:"z"}
        this.storage[this.count] = nuevoElemento
        console.log("Stack -> push -> storage", this.storage)
        this.count++
        console.log("Stack -> push -> count", this.count)
    }

    pop(){
        if(this.count == 0){ // checa si la pila esta vacia
            return null
        } 
        console.log("Antes de hacer el pop")
        console.log("Stack -> pop -> storage", this.storage)
        console.log("Stack -> pop -> count", this.count)

        this.count-- // quita uno a count
        var result = this.storage[this.count] // va a guardar el ultimo elemento en la pila
        delete this.storage[this.count] // se borra el ultimo elemento
        console.log("Despues de hacer el pop")
        console.log("Stack -> pop -> storage", this.storage)
        console.log("Stack -> pop -> count", this.count)
        return result // regresa el ultimo elemento
    }

    length(){
        return this.count
    }
    // Regresa el ultimo alor en la pila, mas no lo elimina

    peek(){
        console.log("Estoy en peek")
        return this.storage[this.count - 1]
    }
}

const myNuevaPila = new stack()

myNuevaPila.push(2)
myNuevaPila.push(3)
myNuevaPila.push(7)
console.log(myNuevaPila)
console.log(myNuevaPila.peek())
console.log(myNuevaPila.pop())
console.log(myNuevaPila)
myNuevaPila.push(9)
console.log(myNuevaPila)



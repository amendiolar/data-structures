
class Node{
    constructor(dato){
        this.dato = dato
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null // no hay nada en la lista
        this.length = 0 // numero de elementos dentro de la lista
    }

    //Como agregamos algo a mi lista
    add(dato){
        const node = new Node(dato) // crea nodo con su dato
        if (this.head === null){
            this.head = node // asigno el primer nodo como la cabeza
        } else { // ejecuta esto cuando hay mas elementos en la lista
            // Tengo que buscar el ultimo elemento en la lista
            // yy asociarlo con el penultimo
            var currentNode = this.head // Siempre empiezo a buscar desde el Head

            while(currentNode.next){ // mientras que esto sea verdadero
                // Si el nodo actual tiene un siguiente nodo
                // esto va a continuar ejecutandose
                // mientras haya un nodo sigue buscando
                currentNode = currentNode.next
               
            }

            currentNode.next = node
             // aqui asocio el ultimo nodo con el nuevo nodo que cree
        }

        this.length++
        // para saber cuantos elementos hay en la lista
        // aumento en uno el numero de elementos dentro de mi lista
    }

    remove(datoBorrar){
        // tengo que especificar que dato va a ser borrado
        var currentNode = this.head
        var previousNode = null // almacenar el nodo con el 
        if(currentNode.dato === datoBorrar){ // esto para borrar el head
            this.head = currentNode.next // reasigno la cabeza de mi lista
        } else{
            while(currentNode.dato !== datoBorrar){
                previousNode = currentNode // el current se convierte en el previous node
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        this.length--
    }

}

const myList = new LinkedList()

myList.add(22)
console.log(myList)

myList.add(33)
console.log(myList)

myList.add(44)
console.log(myList)

myList.add(55)
console.log(JSON.stringify(myList))

myList.remove(44)
console.log("Aca borre un elemento", JSON.stringify(myList))

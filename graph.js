
const graph1 = [
    [0,1,1,0,0],
    [0,0,1,0,1],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,0]
] //Arreglo de dos demensiones

// console.log(graph1[2])

const graph2 = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [0,0,0,0,0],
    [0,1,0,0,0]
]

class Node {
    constructor(value){
        this.value = value
    }
}

class Graph{

    constructor(){
        this.nodes = []
        this.edges = []
    }

    addNode(value){ //agregamos un nodo al grafo
        const node = new Node(value)
      // console.log(`Nodo ${node.value}`)
        this.nodes.push(node)
    }

    getNode(value){ // Buscar un nodo especifico
        var nodo
        if(this.nodes.length == 0){
            return null // no hay nodos
        }
       // console.log(`Nodos ${this.nodes}`)
        for(var i=0; i < this.nodes.length; i++){
          // console.log(`NODO ${this.nodes[i].value}`)
            if(this.nodes[i].value === value){ // si encuentro el nodo
              //  console.log(`nodo ${value}`)
                nodo = this.nodes[i] // Este es el nodo que estoy buscando
                // asigno el nodo encontrado a la variable "nodo"
            }
        }
      //  console.log(nodo)
        return nodo // aqui regreso el nodo que encontre
    }

    addEdge(value1, value2){ // valor del nodo 1 y valor del nodo 2
        const nodo1 = this.getNode(value1) // busco el primer nodo
        const nodo2 = this.getNode(value2) // busco el segundo nodo
        const edge = [nodo1, nodo2] // esta es la representacion de la arista
        // el nodo 1 va hacia el nodo 2
       // console.log(edge)
        this.edges.push(edge)
    }

    print(){
        for(var i = 0; i < this.edges.length; i++){
            console.log(`${this.edges[i][0].value} ----> ${this.edges[i][1].value}`)
        }
    }

}

const mygrafo = new Graph()

// agregando nodos
mygrafo.addNode(0)
mygrafo.addNode(1)
mygrafo.addNode(2)
mygrafo.addNode(3)
mygrafo.addNode(4)

// agregando edges - relaciones
mygrafo.addEdge(0,1)
mygrafo.addEdge(0,2)
mygrafo.addEdge(1,4)
mygrafo.addEdge(1,2)
mygrafo.addEdge(2,3)
mygrafo.addEdge(3,4)

mygrafo.print()

// console.log(mygrafo)
console.log(JSON.stringify(mygrafo, null, 3))

function adjacencyMatrix(mygrafo){
    //va a ser codigo bien chido
}

//resultado
/* 
    const graph1 = [
    [0,1,1,0,0], // posicion  --> 0
    [0,0,1,0,1], // posicion  --> 1
    [0,0,0,1,0], // posicion  --> 2
    [0,0,0,0,1], // posicion  --> 3
    [0,0,0,0,0],  // posicion  --> 4
] /
*/

// Crear una funcion que a partir de un grafo genere la matriz de adyancencias


function adjacencyMatrix(mygrafo){
    //va a ser codigo bien chido
    //mi matriz empieza vacia
    const matrix  = []
    //primero necesito saber cuantos nodos tengo y apartir de eso puedo agrgear nuevos arreglos
    for(var i = 0; i < mygrafo.nodes.length; i++){
        var row = []
        for(var j=0; j < mygrafo.nodes.length; j++){
            //relleno la matriz de puros ceros solo necesito las pocisiones
            //despues los cambiare por los 1 correspondientes
            row.push(0)
        }
       matrix.push(row)
    }
    
    //ahora tengo que buscar las relaciones  por cada nodo
    for(var i = 0; i < mygrafo.nodes.length; i++){
        //vamos a ir buscando nodo por nodo donde  y vemos que edges tiene
        const nodo = mygrafo.nodes[i]
        for(var j = 0; j < mygrafo.edges.length; j++){ //busco en las aristas
            if( mygrafo.edges[j][0].value === nodo.value){
                //encontre un una arista que concatena ese mi nodo actual con otro nodo
               const row = matrix[i] // obtengo mi fila
               const nodoConected = mygrafo.edges[j][1]// este es el nodo con el que estoy conectado
               row[nodoConected.value] = 1; //encontramos una relacion ahora estamos seguros de agregar el 1
               //ocupamos el value por que nos indica en que poscicion debo agregar el 1
            }

        }

    }

    return matrix //regreso ya la matriz completa
}

console.log("matriz de adjacencias",adjacencyMatrix(mygrafo))





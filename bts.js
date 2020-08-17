
// binary tree search
// La primera clase representa a los nodos
// La segunda clase representa el arbol

class Node{

    constructor(dato,left,right){
        this.dato = dato
        this.left = left
        this.right = right
    }


}

class Tree{
    // Tiene el metodo agregar nodo
    // Tiene el metodo verificar si existe nodo

    constructor(){
        this.root = null
    }

    add(dato){
        if(this.root === null){
            this.root = new Node(dato,null,null)
            console.log("Esta es la raiz", this.root)
            return // RETURN Para que acabe aqui el metodo
        }
        var currentNode = this.root
        while(true){ //loop infinito 
            if(currentNode.dato > dato){ // A la izquierda

                if(currentNode.left){ //hay otro nodo a la izquierda
                    currentNode = currentNode.left
                } else {
                    currentNode.left = new Node(dato,null,null)
                    return
                }
                } else { // va a la derecha
                    if(currentNode.right !== null){
                        currentNode = currentNode.right
                    } else {
                        currentNode.right = new Node(dato,null,null)
                        return
                    }
                }

            }
        }
    

    contains(dato){
        // Solo verifica si existe el dato en el arbol
        // retorna true o false
        var currentNode = this.root
        while(currentNode !== null){ // Mientras haya un current
            if(dato === currentNode.dato){
                return true
            } else {
                if(dato < currentNode.dato){
                    // Buscar a la izquierda
                    currentNode = currentNode.left
                } else {
                    currentNode = currentNode.right
                }
            }

        }
        
        return false
    }
}

const mytree = new Tree()

mytree.add(30)
mytree.add(15)
mytree.add(60)
mytree.add(7)
mytree.add(22)
mytree.add(17)
mytree.add(27)
mytree.add(45)
mytree.add(75)

console.log(JSON.stringify(mytree,null,2))





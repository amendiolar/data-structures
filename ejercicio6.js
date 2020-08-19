
/*
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo,
llegada la hora de inicio hay muchos "colados", es por esto que se le ordena al vigilante
que retire a todos aquellos que no tienen ticket. Muestre la cola inicial, qué elementos
fueron retirados de la cola y la cola final. Sugerencia: desencole cada elemento, si tiene
ticket se vuelve a encolar, sino se retira. 
Cola: [{user:'User1',ticket:true},{user:'User2',ticket:true},{user:'User3',ticket:false},
{user:'User4',ticket:true},{user:'User5',ticket:false},{user:'User6',ticket:false},
{user:'User7',ticket:true},{user:'User8',ticket:true},{user:'User9',ticket:true},
{user:'User10',ticket:false},{user:'User11',ticket:true}]
*/

cola= [{user:'User1',ticket:true},{user:'User2',ticket:true},{user:'User3',ticket:false},
{user:'User4',ticket:true},{user:'User5',ticket:false},{user:'User6',ticket:false},
{user:'User7',ticket:true},{user:'User8',ticket:true},{user:'User9',ticket:true},
{user:'User10',ticket:false},{user:'User11',ticket:true}]


// console.log("Entries --->", Object.entries(cola)) // Convierte un objeto en un arreglo

// const fila = Object.entries(cola)

const colaFinal = cola.filter((usuario) => {
    return usuario.ticket == true
});

const retirados = cola.filter((usuario) =>{
    return usuario.ticket == false
})

console.log("Cola Final: ")
console.log(colaFinal)
console.log("Elementos retirados de la fila: ")
console.log(retirados)
//console.log(fila[0])








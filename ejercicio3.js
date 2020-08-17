/*
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/

var ida = []
var regreso = []

function conductor(ruta) {
 //   console.log(`Completa${ruta}`)
 //   console.log(ruta[1])
 //   console.log(ida)
        for(var i=0;i<ruta.length; i++){
            ida.push(ruta[i])
        //    console.log(`Ida: ${ida}`)
        }
 //       console.log(ruta)
       // console.log(ida)
 //     console.log(ida.length)
        for(var j=ida.length-1; j >= 0; j--){
            regreso.push(ida[j])
       //    console.log(`Regreso:  ${regreso}`)
        }
        console.log(`Ida: ${ida} `)
        console.log(`Regreso: ${regreso}`)
}

console.log(conductor([" Pueblo Origen ", " Pueblo 1 ", " Pueblo 2 "," Destino "]))



// let nombre = prompt("Ingrese su nombre");

// while(nombre === ""){
//     nombre = prompt("Debes ingresar un nombre");
// }

// if(nombre !== "" && nombre !== null){
//     alert(nombre)
// }else{
//     alert("Ejecución cancelada")
// }

// for(let i = 1; i<=10; i++){
//     console.log(`El contador es: ${i} `)
// }

// let n1 = Number(prompt("Ingrese un numero"))

// for(let i = 1; i<= 10; i++){
//     let result = i * n1;
//     console.log(`${n1} x ${i} = ${result}`);
// }

// console.log("==========================")

// for(let i = 1; i<= 10; i++){
//     let result = i * n1;

//     if(i === 6){
//         break;
//     }
//     console.log(`${n1} x ${i} = ${result}`);
// }

// console.log("==========================")

// for(let i = 1; i<= 10; i++){
//     let result = i * n1;

//     if(i === 6){
//         continue;
//     }
//     console.log(`${n1} x ${i} = ${result}`);
// }


// // Funciones
// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
//    }

// //Anonimas
// const suma = function (a, b) { return a + b }
// const resta = function (a, b) { return a - b }
// console.log( suma(15,20) )
// console.log( resta(15,5) )

// //Fat arrow funtion
// const suma1 = (a, b) => { return a + b }
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta1 = (a, b) => a - b ;
// console.log( suma(15,20) )
// console.log( resta(20,5) )


// literal objects
// const producto = {
//     //props
//     //key //value
//     nombre: 'Teclado mecanico',
//     precio: 300,
//     disponible: true,
// }


// // Add
// producto.imagen = "http://google.cl"

// // Delete
// delete producto.disponible;

// function Producto(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.disponible = true;
// }

// const producto2 = new Producto("Monitor", 200)

// console.log(producto2)

let array = [1, 2, 3, 4, 5]
// for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]);  
// }
// console.log(array);

// // push() Agrega una posición al final de la lista
// array.push(7)

// console.log(array);

// //.unshift Agrega una posición al inicio de la lista
// array.unshift(900)
// console.log(array)


// //splice Permite eliminar elementos de un array en cualquier posición
// array.splice(0,3)
// console.log(array+" splice")

// //join Une un array según caracter aplicado
// console.log(array.join(","))


// //concat Une dos arreglos
// let array2 = [800, 700, 600]
// console.log(array.concat(array2))

// //slice Devuelve una copia de una parte del array dentro
// const nuevoArray = array.slice(0, 2)
// console.log(nuevoArray)

// // includes nos entrega un true o false si existe el objeto
// console.log(array.includes(5))


// let arrayx = ["Name"]
// console.log(arrayx)

// arrayx[0] = "Nuevo nombre"
// console.log(arrayx)

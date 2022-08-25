
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

let n1 = Number(prompt("Ingrese un numero"))

for(let i = 1; i<= 10; i++){
    let result = i * n1;
    console.log(`${n1} x ${i} = ${result}`);
}

console.log("==========================")

for(let i = 1; i<= 10; i++){
    let result = i * n1;

    if(i === 6){
        break;
    }
    console.log(`${n1} x ${i} = ${result}`);
}

console.log("==========================")

for(let i = 1; i<= 10; i++){
    let result = i * n1;

    if(i === 6){
        continue;
    }
    console.log(`${n1} x ${i} = ${result}`);
}

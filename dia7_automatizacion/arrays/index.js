//arrays

let misAmigos = [
    'Monica',
    'Ross',
    'Chandler',
    'Phoebe',
]


let eliminado = misAmigos.pop();// elimina el ultimo item del array
console.log(misAmigos[0]);
console.log(misAmigos.length);
console.log(misAmigos.indexOf('Ross'));

console.log(eliminado); 
console.log(misAmigos);

let agregado = misAmigos.push(eliminado); // agrega un item al final del array

console.log('agregado', agregado);
console.log(misAmigos);

// .shift() elimina el primer item del array
// .unshift() agrega adelante del primer item del array
// .splice() elimina items en cualquier parte del array
//ej:

//let amigosConSplice = misAmigos.splice(2, 1); //elimina 1 item a partir de la posicion 2

//forEach
let forEach = misAmigos.forEach(function(amigo){
    console.log(amigo);
})

let forEach2 = misAmigos.forEach(function(amigo, index){
    console.log(index + ": " + amigo);
} );
/* let notas = [6, 9, 7, 5, 1, 5, 4, 3];
 
function promedio() {
    let suma = 0;
    for (let num of notas) {
        suma += num;
    }
    console.log(suma/notas.length);
} */

let notas = [6, 9, 7, 5, 1, 5, 4];
 
function menorNota() {
    let menor = notas[0];
    
    for (let nota of notas) {
        if (nota < menor) {
            menor = nota;
        }
    }
    
    console.log(menor);
}



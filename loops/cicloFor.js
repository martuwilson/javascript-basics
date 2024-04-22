// el ciclo FOR es un ciclo que se ejecuta un numero determinado de veces
// y se utiliza cuando se conoce el numero de veces que se va a ejecutar
// el ciclo FOR tiene 3 partes importantes que son:
// 1. la inicializacion de la variable
// 2. la condicion que se debe cumplir para que el ciclo se ejecute
// 3. el incremento o decremento de la variable
// la sintaxis del ciclo FOR es la siguiente:
// for (inicializacion; condicion; incremento/decremento) {
//     codigo a ejecutar
// }

// ejemplo 1
// imprimir los numeros del 1 al 10 y mostrar la suma de todos los numeros por consola

// ejemplo de la variable for

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Implementa un Loop For, dentro de la función testLoop() ya declarada, que cumpla 5 iteraciones inicializando a la variable x en 0 y que en cada vuelta de ciclo (iteración), escriba en nuestro código html (document.write) etiquetas <p> cuyo contenido de la etiqueta sea Vuelta 0, Vuelta 1, Vuelta 2, etc. Es decir, el texto Vuelta concatenado con el valor de la variable x del ciclo

function testLoop() {
    for (let x = 0; x < 5; x++) {
        document.write(`<p>Vuelta ${x}</p>`);
        console.log(`<p>Vuelta ${x}</p>`);
    }
}

testLoop();
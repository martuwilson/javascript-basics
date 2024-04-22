// validar si es mayor de edad:

let bool;

function esMayor (edad) {
    if (edad >= 18) {
        bool = true;
    } else {
        bool = false;
    }
    return bool;
}




// ej2

// let bool;
 
function validar(edad) {
    bool = edad == 10 || edad == 20;
}

/* Programar la función actualizar, que si el parámetro cambiar sea igual a 1, actualice la variable contenido y le asigne el valor del parámetro cambiar. */

let contenido = 0;
 
function actualizar(cambiar) {
    if (cambiar == 1) {
        contenido = cambiar;
    }
}

/* Programe la función calcular, donde si el valor del parámetro cantidad es mayor a 10, entonces la variable precio debe ser igual a 50 y en caso contrario (cantidad es menor o igual a 10), la variable precio debe ser igual a 80. */

let precio = 0;

function calcular(cantidad) {
    if (cantidad > 10) {
        precio = 50;
    } else {
        precio = 80;
    }
}

/* En base al ejercicio anterior, programe ahora la función calcular para definir la siguiente lógica.

Si la cantidad es mayor a 10, la variable precio debe ser igual a 50.

Si la cantidad es menor a 5, la variable precio debe ser igual a 100.

Entre 5 y 10, el precio debe ser igual a 80. */

//let precio = 0;
 
function calcular(cantidad) {
    if(cantidad > 10) {
        precio = 50;
    } else {
        if (cantidad < 5){
            precio = 100;
        } else {
            precio = 80;
        }
    }
}
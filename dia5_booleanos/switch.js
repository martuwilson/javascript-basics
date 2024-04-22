// cuando hay millones de IF es mejor usar SWITCH
// permite que se ejecute un bloque de código diferente según cada caso que se presente.

// Sintaxis
// switch (expresión) {
//     case valor1:
//         // código
//         break;
//     case valor2:
//         // código
//         break;
//     case valor3:
//         // código
//         break;
//     default:
//         // código
// }

// Ejemplo
// let dia = 4;
// let nombreDia;
//
// switch (dia) {
//     case 1:
//         nombreDia = "Lunes";
//         break;
//     case 2:
//         nombreDia = "Martes";
//         break;
//     case 3:
//         nombreDia = "Miércoles";
//         break;   
//     case 4:
//         nombreDia = "Jueves";
//         break;
//     case 5:
//         nombreDia = "Viernes";
//         break;
//     case 6:
//         nombreDia = "Sábado";
//         break;
//     case 7:
//         nombreDia = "Domingo";
//         break;
//     default:
//         nombreDia = "Día inválido";
// }
//
// console.log(nombreDia); // Jueves
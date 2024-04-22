function extraerNumeroDeElemento(elemento) { //se encarga de extraer el valor numerico del elemento
    let miElemento = document.getElementById(elemento);
    let texto = miElemento.value;

    let  textoANumero = Number(texto);

    return textoANumero;
}

function calcular(){
    let ventas = [];
    ventas[0] = extraerNumeroDeElemento("ventas1");
    ventas[1] = extraerNumeroDeElemento("ventas2");
    ventas[2] = extraerNumeroDeElemento("ventas3");
    ventas[3]= extraerNumeroDeElemento("ventas4");
    ventas[4]= extraerNumeroDeElemento("ventas5");
    ventas[5]= extraerNumeroDeElemento("ventas6");


    let totalVentas = sumarTotal(ventas);
    let mayorVenta = calcularMayorVenta(ventas);
    let menorVenta = calcularMenorVenta(ventas);

    let mensajeSalida = "El total de ventas es: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;

    let mensajeMayorVenta = "La mejor venta es: " + mayorVenta;
    let elementoMayorVenta = document.getElementById("mejorVenta");

    elementoMayorVenta.textContent = mensajeMayorVenta;

    let mensajeMenorVenta = "La peor venta es: " + menorVenta;
    let elementoMenorVenta = document.getElementById("peorVenta");

    elementoMenorVenta.textContent = mensajeMenorVenta;

}

function sumarTotal(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

function calcularMayorVenta(array){
    let mayor = array[0];
    for(let venta of array){
        if(venta > mayor){
            mayor = venta;
        }
    }
    return mayor;
}

function calcularMenorVenta(array){
    let menor = array[0];
    for(let venta of array){
        if(venta < menor){
            menor = venta;
        }
    }
    return menor;
}
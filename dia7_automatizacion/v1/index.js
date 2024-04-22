function extraerNumeroDeElemento(elemento) { //se encarga de extraer el valor numerico del elemento
    let miElemento = document.getElementById(elemento);
    let texto = miElemento.value;

    let  textoANumero = Number(texto);

    return textoANumero;
}

function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6 ;
    ventas1 = extraerNumeroDeElemento("ventas1");
    ventas2 = extraerNumeroDeElemento("ventas2");
    ventas3 = extraerNumeroDeElemento("ventas3");
    ventas4 = extraerNumeroDeElemento("ventas4");
    ventas5 = extraerNumeroDeElemento("ventas5");
    ventas6 = extraerNumeroDeElemento("ventas6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "El total de ventas es: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;

}
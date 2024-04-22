function multiplicar(){
    // obtener el numero
    let elementoNumero = document.getElementById("numero");
    let numero = elementoNumero.value;
    let numeroTabla = Number(numero);

    // obtener el elemento donde se va a mostrar la tabla
    let elementoTabla = document.getElementById("listaTabla");

    // producir y mostrar resultados
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabla * i;
        
        let textoResultado = `${numeroTabla} x ${i} = ${resultado}`;

        let elementoResultado = document.createElement("li");
        elementoResultado.innerText = textoResultado;

        elementoTabla.appendChild(elementoResultado);
    }
    
}
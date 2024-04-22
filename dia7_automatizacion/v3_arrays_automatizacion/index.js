
function crearTienda(containerId, min, cantidadTiendas){
    //entontrar contenerdo por id
    let elementoContendor = document.getElementById(containerId);

    //loop para crear la cantiad solicitadas
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++){
        
        //crear texto del label para llamar la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //crear parrafo
        let elementoParrafo = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContendor.appendChild(elementoParrafo);
    }
}

function crearParrafoTienda(textoLabel, minValue){
    //crear etiquetas de parrafo
    let elementoParrafo = document.createElement("p");

    //crear etiquetas de label
    let elementoLabel = document.createElement("label");
    elementoLabel.innerText = textoLabel + ": ";
    
    // conectar con el input
    elementoLabel.setAttribute("for", textoLabel)


    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos del input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", minValue);
    elementoInput.setAttribute("value", 0);


    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;
}

function extraerNumeroDeElemento(elemento) { //se encarga de extraer el valor numerico del element
    let texto = elemento.value;

    let  textoANumero = Number(texto);

    return textoANumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas"); // aca llamaria al div entero con sus elementos dentro (p => input, input)

    for(let item of elementosVentas.children){  //recorrer los elementos dentro del div
        let valorVenta = extraerNumeroDeElemento(item.children[1]); //extraer el valor del input porque seria [1] y en [0] esta el label
        
        ventas[posicionVentas] = valorVenta; //guardar el valor en el array

        posicionVentas++; //aumentar la posicion para el siguiente valor
    }


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


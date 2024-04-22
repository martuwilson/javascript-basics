function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch(fruta){
        case "1":
            elementoRespuesta.textContent = "El precio de la manzana es $1.00";
            break;
        case "2":
            elementoRespuesta.textContent = "El precio de la pera es $2.00";
            break;
        case "3":
            elementoRespuesta.textContent = "El precio de la piña es $3.00";
            break;
        case "4":
            elementoRespuesta.textContent = "El precio de la sandía es $4.00";
            break;
        case "5":
            elementoRespuesta.textContent = "El precio de la naranja es $5.00";
            break;
        default:
            elementoRespuesta.textContent = "Fruta no encontrada";
    }
}
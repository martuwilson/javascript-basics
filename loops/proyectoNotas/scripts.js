let array = [7, 4, 2, 9, 6];

//mostrar notas:
function mostrarNotas() {
    let listaNotas = document.getElementById("listaNotas");

    for(
        let nota of array
    ){
        let itemNota = document.createElement("li");
        itemNota.innerText = nota; 
        listaNotas.appendChild(itemNota);
    }
}

//calcular promedio:

function promedio(){
    let suma = 0;
    for( i = 0; i < 5; i++){
        suma += array[i];
    }

    let promedio = suma / 5;
    let elementoPromedio = document.getElementById("promedio");
    elementoPromedio.innerText = promedio;
}

// nota mas alta:
function notaAlta(){
    let notaAlta = 0;
    let i = 0;

    while(i < 5){
        if(array[i] > notaAlta){
            notaAlta = array[i]; 
        }
        i++;
    }

    let elementoNotaAlta = document.getElementById("nota");
    elementoNotaAlta.innerText = notaAlta;
}

// aplazo o no aplazo:
function aplazo(){
    let aplazo = "No aplazo";
    let i = 0;

    do {
        if(array[i] < 4){
            aplazo = "Aplazo";
            break;
        }
        i++;
    } while ( i < 5);

    let elementoAplazo = document.getElementById("aplazo");
    elementoAplazo.innerText = aplazo;
    
}
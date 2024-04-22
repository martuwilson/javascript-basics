let automovil = { 
    marca: 'Ford', 
    modelo: 'Fiesta', 
    anio: 2015, 
    arrancar() { console.log("En marcha") }
};

function modificarAnio() {
    automovil.anio = 2018;
    console.log(automovil);
}

// ejercicio 2

let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
    fabricar() { console.log("Polo fabricado") }
};

function agregarPropiedad() {
 polo["genero"] = "Masculino";   
}
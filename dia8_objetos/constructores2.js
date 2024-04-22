let coche1 = new Object();

coche1.marca = "Ford";
coche1.modelo = "Fiesta";
coche1.anio = 2015;

// manera dos

let coche2 = new Object();
coche2["marca"] = "Ford";
coche2["modelo"] = "Fiesta";
coche2["anio"] = 2015;

// manera tres

let coche3 = new Object({
    marca: "Ford",
    modelo: "Fiesta",
});

// manera cuatro

let coche4 = Object.create(coche2) // coche4 hereda las propiedades de coche2
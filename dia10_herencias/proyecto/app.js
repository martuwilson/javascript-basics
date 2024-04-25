

class Animal {
    constructor(nombre, peso,edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `Nombre: ${this.nombre}, Peso: ${this.peso}, Edad: ${this.edad}`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso,edad, raza) {
        super(nombre, peso,edad);
        this.raza = raza;
    }

    informacion(){
        return `${super.informacion()}, Raza: ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso,edad, sexo) {
        super(nombre, peso,edad);
        this.sexo = sexo;
    }

    informacion(){
        return `${super.informacion()}, Sexo: ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso,edad, color) {
        super(nombre, peso,edad);
        this.color = color;
    }

    informacion(){
        return `${super.informacion()}, Color: ${this.color}`;
    }
}

let perro1 = new Perro('Firulais', 10, 5, 'Pastor Aleman');

let gato1 = new Gato('Michi', 5, 3, 'Hembra');

let conejo1 = new Conejo('Bugs Bunny', 3, 2, 'Blanco');


let animales = [perro1, gato1, conejo1];

function mostrarAnimales(){

    let lista = document.getElementById('listaAnimales');

    for(let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }

}
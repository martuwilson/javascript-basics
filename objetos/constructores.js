//constructor de objetos en javascript es una funcion que se utiliza para crear objetos de un tipo especifico o clase

function Gato(){
    this.patas = 4;
    this.cola = true;
    this.ladrar = function(){
        console.log("guau guau");
    }
}

let ron = new Gato();

//ejercicio 2

function Automovil (){
    this.marca = "Ford";
    this.modelo = "Fiesta";
    this.anio = 2015;
    this.arrancar= function(){
        console.log("En marcha");
    };
}

//Parametros de un constructor

function Gato(nombre, edad, color){
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.ladrar = function(){
        console.log("miau miau");
    }
}

let Ron = new Gato("Ron", 1, "Naranja");

//ejercicio 2

function Automovil (marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.arrancar= function(){
        console.log("En marcha");
    };
}
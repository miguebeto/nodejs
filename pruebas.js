const numero= [1,2,3,4,5]
const UltimosTres = numero.filter(x =>  x  >  2 );
console.log(UltimosTres);
const mitadUltimosTres =  UltimosTres.map (m => m /2)
console.log(mitadUltimosTres);



const producto1 = "                           monitor de 27 pulgadas                                           ";
const producto2 = String('                    monitor de 27 pulgadas')
const producto3 = new String('                monitor de 27 pulgadas');
const producto4 = "Monitor, De, 27, pulgadas ";


console.log(producto1.concat (producto1.length));
console.log(producto2.trim());
console.log(producto3.trimEnd());
console.log(producto1.indexOf('de'));
console.log(producto1.includes('no'));
console.log(producto4.replace("pulgadas", '"'));
console.log(producto4.slice(8,10));
console.log(producto4.charAt(0));
console.log(producto4.repeat(2));
console.log(producto4.split(","));
console.log(producto4.toUpperCase());
console.log(producto4.toLowerCase());
console.log(producto4.toString());



let resultado; 
resultado= Math.PI;
resultado= Math.round(2.4);
resultado= Math.round(2.5);
resultado= Math.ceil(2.1);
resultado= Math.floor(2.1);
resultado= Math.sqrt(36);
resultado= Math.abs(-36);
resultado= Math.pow(2, 2);
resultado= Math.min(-3, 6);
resultado= Math.max(-3, 6);
resultado= Math.random(-3, 6);
resultado= Math.floor(Math.random() * 30);

console.log(resultado);


let numerosDecimal = (0.1 + 0.2).toFixed(1);
console.log(numerosDecimal);

let numeroMaximo = -(2**54) + 1;
console.log(numeroMaximo);

let numeroMinimo = (2**54) + -1;
console.log(numeroMinimo);

let resultadoNumeros;

resultadoNumeros= 20 + 30 * 5;
resultadoNumeros= (20 + 30 + 50 ) * 2;

console.log(resultadoNumeros);  


let puntaje = 2 ;
puntaje--;
puntaje++;
puntaje += 3;

console.log(puntaje);



let numeroString = "2";

console.log(Number.parseInt(numeroString));


//operador ternario
let autenticado = true;
console.log(autenticado ? 'si está autenticado' : 'no esta autenticado');


//object constructor
function objetoConstructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;   
    this.disponible = true;
    
}

const objetoConstructorNew = new objetoConstructor('televisor 24 pulgadas', 3800);
console.log(objetoConstructorNew);
const objetoConstructorNew2 = new objetoConstructor('tablet', 1500);
console.log(objetoConstructorNew2);


//objeto literal
let objetoLiteral = {
    nombre: 'televisor 27 pulgadas',
    precio: 1000,
    disponible: true,
    información: {
        peso: '1kg',
        tamaño: '4mt'
    }
}

 const objetoLiteral2 = {
    nombre: 'tablet',
    precio: 1000,
    disponible: true,
    nombrePrducto:  function() {
    console.log(`Este prducto es una ${this.nombre} con el valor de ${this.precio} `);
    },
    información2: {
        peso2: '3kg',
        tamaño2: '5mt'
    }
}

let objetoLiteral3 = {
    nombre: 'celular',
    precio: 3500,
    disponible: true,
    información: {
        peso: '1kg',
        tamaño: '4mt'
    }
}

let objetoLiteral4 = {
    nombre: 'teclado',
    precio: 500,
    disponible: true,
    información: {
        peso: '1kg',
        tamaño: '4mt'
    }
}

//mostrar contenido de los objetos
console.log(Object.keys(objetoLiteral));
console.log(Object.values(objetoLiteral));
console.log(Object.entries(objetoLiteral));

// El uso de this se refiere a este objeto para el uso de la propiedades dentro de la variable
objetoLiteral2.nombrePrducto();

//congelar obejeto
Object.freeze("nameobjeto");
console.log(Object.isFrozen(objetoLiteral));

//congelar para agregar con seal (permite modifica los existentes pero no eliminarlos)
Object.seal("nameobjeto");
console.log(Object.isSealed(objetoLiteral));

//Unir objetos
const objetosLiterales = Object.assign(objetoLiteral, objetoLiteral2)
console.log(objetosLiterales);

//espread operator o rest operator
const restObjetosLiterales = {...objetoLiteral, ...objetoLiteral2};
console.log(restObjetosLiterales);

//Agregar propiedades a objetos
objetoLiteral.imagen = "imagen.jpg";
 console.log(objetoLiteral);

 //eliminar propiedades a objetos
delete objetoLiteral.imagen;
console.log(objetoLiteral);

//sacar propiedades a objetos
const disponible = objetoLiteral.disponible;
 console.log(disponible);

 //sacar propiedades a objetos {destructuring}
 const {precio , nombre} =objetoLiteral;
 console.log(precio, nombre);

 //agregar propiedades a objetos anidados
 console.log(objetoLiteral.información.peso);

 //sacar propiedades a objetos anidados
 //const {precio , nombre, disponible, información, información: {peso}} = objetoLiteral;
 //console.log(precio, nombre, disponible, información, peso);


 //ARRAY_________________________________________________________________________________________________________________________
 const carritoLleno = [
     {nombre: 'televisor 27 pulgadas', precio: 1000},
     {nombre: 'Tablet', precio: 500},
     {nombre: 'Teclado', precio: 100},
     {nombre: 'Celular', precio: 1500},
     {nombre: 'Mouse', precio: 80},
     {nombre: 'Audifonos', precio: 40},
 ]
 const carritoVacio = [];
const myArrayNumeros = [2, 4, 8, 10, [1, 2 ,3]];
const detodo = ['Hola', 10, true, false, "si", null, undefined, [2, 4, 8], {nombre: 'miguel', trabajo: 'progrmador'}];
const newmyArrayNumeros = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'mayo', 'junio', 'julio', 'agosto');
console.log(newmyArrayNumeros);
console.table(myArrayNumeros );
console.log(detodo);

//iteraciones con for y foreach
for (let i = 0; i < carritoLleno.length; i++) {
    console.log(`${carritoLleno[i].nombre} - ${carritoLleno[i].precio} `); 
    
}

carritoLleno.forEach(function(productos) {
    console.log(`${productos.nombre} - ${productos.precio} `);
});

//iteraciones con map
const reducirMapConFuncion = productos => {
    return`${productos.nombre} - ${productos.precio} `;
}
const carritoLlenoMap =carritoLleno.map(reducirMapConFuncion);
console.log(carritoLlenoMap);

//Destructuring de arreglos
const [primero, , tercero, ...resto] = myArrayNumeros;
console.log(primero,tercero,resto);

//Acceder al arreglo
console.log(myArrayNumeros[4][0]);

//tamaño del arreglo (propiedad)
console.log(newmyArrayNumeros.length);

//metodos de Array
myArrayNumeros.push([11]); 
//myArrayNumeros[6]= 11;
console.log(myArrayNumeros);
myArrayNumeros.unshift(1);
console.log(myArrayNumeros);
console.log(myArrayNumeros.pop());
console.log(myArrayNumeros.shift());
console.log(myArrayNumeros.splice(0,4));
console.log(myArrayNumeros);

carritoVacio.push(objetoLiteral2,objetoLiteral3,objetoLiteral4);
console.log(carritoVacio);
carritoVacio.unshift(objetoLiteral);
console.table(carritoVacio);

//carrito de compras con interacciones en arreglos
for (let i = 0; i < newmyArrayNumeros.length; i++) {
  console.log(newmyArrayNumeros[i]); 
    
}

for (let i = 0; i < newmyArrayNumeros.length; i++) {
    newmyArrayNumeros[i];
    
}


// Agregar nuevos valores a un ARRAY sin tocarlo directamente
let carritoVacioRest = [objetoLiteral, ...carritoVacio];
console.log(carritoVacioRest);


//ordenar array con sort "usar= return a.locatecompare(b);" para cuando tienen tildes o mayus"
let arr = [4, 2, 10, 9, 20 , 110];

arr.sort();

console.log(arr);

//ultimo array
const lastArr = arr.slice(-1)
console.log(lastArr);


//sin modificar el objeto
let arrsort = [...arr].sort((a ,b) => a - b);

console.log(arrsort);


let objeto = [    
    {nombre: 'miguel', edad: 26},
    {nombre: 'angel', edad: 22},
    {nombre: 'blanco', edad: 20},
    {nombre: 'castilla', edad: 29}
]

objeto.sort((a , b) =>{
    if (a.nombre < b.nombre) return -1;
    if (b.nombre < a.nombre) return 1;
    return 0;
    });
console.log(objeto);

objeto.sort((a , b) =>{
    if (a.edad < b.edad) return -1;
    if (b.edad < a.edad) return 1;
    return 0;
    });
console.log(objeto);



//ARRAY METHODS
// Extraer string de un arreglo
const newmyArrayNumeros = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'mayo', 'junio', 'julio', 'agosto');

newmyArrayNumeros.forEach((mes, i)=> {
  if (mes=== 'Enero'){
    console.log(`el mes de ${mes} si está includio en el indice ${i}`);
  }})

// con array methods
const extraerMes = newmyArrayNumeros.includes("enero");
console.log(extraerMes);

// con array methods en arreglos de objetos
const carritoLlenosome = [
  {nombre: 'televisor 27 pulgadas', precio: 1000},
  {nombre: 'Tablet', precio: 500},
  {nombre: 'Teclado', precio: 100},
  {nombre: 'Celular', precio: 1500},
  {nombre: 'Mouse', precio: 80},
  {nombre: 'Audifonos', precio: 40},
]

const ExtraerProducto = carritoLlenosome.some(producto=>{
  if (producto.nombre === 'Celular') {
    console.log(`Si tenemos ${producto.nombre} disponibles`);
  }
})

const ExtraerProducto2 = carritoLlenosome.some(producto=>{producto.nombre === 'Celular' })
console.log(ExtraerProducto);

const ExtraerMes = newmyArrayNumeros.some(mes => mes == 'Enero' )
console.log(ExtraerMes);

//metodo reducer
let total = 0;
carritoLlenosome.forEach((producto)=> total += producto.precio)
console.log(total);

const carritoReducer = carritoLlenosome.reduce((i,parametro)=> i + parametro.precio,0)
console.log(carritoReducer);

//metodo filter
const arr = [10, 12, 5, 15, 2, 32, 20, -5, 23];
console.log(arr.filter((element) => element > 10));

//concat method
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const num4 = num1.concat(num2,num3);
console.log(num4);
console.log(num1.concat(num2)); // single argument
console.log(num1.concat(num2, num3)); // multiple argument
console.log(num1.concat(num2, 24, [10, 20, 30])); // passing values

//spread operator
const num5 = [...num1, ...num2, ...num3, ...num4, 'otro numero'];
console.log(num5);
const productoSpread = {nombre: 'Disco Duro', precio: 300};
const carritoSpread = [...carritoLlenosome, productoSpread];
const carritoSpread2 = [productoSpread, ...carritoLlenosome];
console.log(carritoSpread);

//method entries
const arr = ["a", "b", "c", "d", "e"];
const iterator1 = arr.entries();
console.log(iterator1.next());
console.log(iterator1.next().value);


for (const [index, value] of arr.entries()) {
console.log(index);
console.log(value, index);}

//method fill
const arr = ["a", "a", "a", "a", "a", "a", "a", 'a'];
console.log(arr.fill("b"));
console.log(arr.fill("c", 2));
console.log(arr.fill("d", 4, 7));

//method .find
let resultado = '';
carritoLlenosome.forEach((producto, index)=>{
  if (producto.nombre === 'Mouse') {
    resultado = carritoLlenosome[index];
  }
})
console.log(resultado);

const resultado2 = carritoLlenosome.find((producto)=> producto.nombre === 'Mouse')
console.log(resultado2);

//method every (and)
const resultado2 = carritoLlenosome.every((producto)=> producto.precio < 2000)
console.log(resultado2);

//method every (or)
const resultado2 = carritoLlenosome.some((producto)=> producto.precio < 50)
console.log(resultado2);

//funciones________________________________________________________________________________________________________________________

let total = 0;

function agregarCarrito(precio){
    return total += precio
}

function impuestos(total){
    return total * 1.15
}

total = agregarCarrito(1000);
total = agregarCarrito(2000);
total = agregarCarrito(3000);
total = agregarCarrito(4000);

console.log(total);

const totalapagar = impuestos(total);
console.log(totalapagar);

hello(); // run successfully
function hello() { // function declaration
  return "Hello World!";
}

hello1(); // error function not declared
let hello1 = function() { // function expression
  return "Hello World!";
}

//The variables defined inside IIFE is not accessible outside the function.

(function(){
  console.log("Function executed immediately after it is declared.")
})();


//If you assign IIFE to some variable then it stored function's return value not the function itself.

var example = (function(){
  return "Returned value is stored."
})();
console.log(example);


//Crear funciones dentro de los objetos

const reproductor = {
    reproducir: function (id) {
        console.log(`reproduciendo cancion numero ${id}`);
    },
    pausando: function () {
        console.log(`Pausando cancion ...`);
    },
    borrando: function (id) {
        console.log(`borrando cancion numero ${id}`);
    },
    creandoPlaylist: function (nombre) {
        console.log(`reproducionedo cancion con el nombre ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`reproducionedo playslit por defecto ${nombre}`);
    },
    
}



console.log(reproductor.reproducir(10));
reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausando(10);
reproductor.borrando(10);
reproductor.creandoPlaylist("Salsa");
reproductor.reproducirPlaylist("Salsa");


//Arrow function vs funtion literals

const aprendiendo = function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
};
aprendiendo('javaScript');

// Con Arrow function
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2('javaScript'));

// Map vs Foreach

const carritoLlenoMvsF = [
    {nombre: 'televisor 27 pulgadas', precio: 1000},
    {nombre: 'Tablet', precio: 500},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 1500},
    {nombre: 'Mouse', precio: 80},
    {nombre: 'Audifonos', precio: 40},
]

//iteraciones con break y continue
for (i = 0; i <10; i++){

    if (i===5) {
        console.log('Este es el final');
        break
    }
    console.log(i);
}

for (i = 0; i <10; i++){

    if (i===5) {
        console.log('salto de emergencia');
        continue
    }
    console.log(i);
}



//iteraciones con for
for (let i = 0; i < carritoLlenoMvsF.length; i++) {
   console.log(`${carritoLlenoMvsF[i].nombre} - ${carritoLlenoMvsF[i].precio} `); 
   
}

//iteraciones con map y foreach

carritoLlenoMvsF.forEach( (productos) => {
    console.log(`${productos.nombre} - ${productos.precio} `);
})


//iteraciones con map
const reducirMapConFuncionMvsF = ( productos => `${productos.nombre} - ${productos.precio} `);

const carritoLlenoMapvs = carritoLlenoMvsF.map(reducirMapConFuncionMvsF);
console.log(carritoLlenoMapvs);

// Clean code with Arrow Function
const reproductor2 = {
    reproducir: id => `reproduciendo cancion numero ${id}`,
    pausando: () => `Pausando cancion ...`,
    borrando: id => `borrando cancion numero ${id}`,
    creandoPlaylist: nombre => `reproducionedo cancion con el nombre ${nombre}`,
    reproducirPlaylist: nombre => `reproducionedo playslit por defecto ${nombre}`,
}

console.log(reproductor2.reproducir(10));
console.log(reproductor2.reproducir(20));
console.log(reproductor2.reproducir(30));
console.log(reproductor2.pausando(10));
console.log(reproductor2.borrando(10));
console.log(reproductor2.creandoPlaylist("Salsa"));
console.log(reproductor2.reproducirPlaylist("Salsa"));


// Switch en js

const metodoPago = 'efectivo';

switch (metodoPago) {
    case "efectivo":
        pagar();
        break;
    case "cheque":
        console.log(`ha seleccionado metodo de pago ${metodoPago}`);
         break;   
    case "tarjeta":
        console.log(`ha seleccionado metodo de pago ${metodoPago}`);
         break;
    default:
        console.log(`ha seleccionado metodo de pago no válido`);
        break;
}
function pagar() {
    console.log('pagando...');
    
}

//operador ternario nested
const puntaje2 = 451;
function revisarPuntaje() {
    
    puntaje2 >= 300 ? puntaje2 > 450 ? console.log('Felicitaciones.. aquirió un puntaje superior') : console.log('Felicitaciones.. aprobó la materia') : console.log('usted reprobó la materia');
    }


revisarPuntaje();



const year = new Date().getFullYear();
const isLeapYear = year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? "a leap year" : "not a leap year") : "a leap year") : "not a leap year";
console.log(year + " is " + isLeapYear);


//iteraciones con for

for (let i = 0; i <10 ; i+=2) {
    console.log(i);
    
}

//imprimir numeros pares e impares

for (let i = 1; i <8 ; i++) {
    if (i % 2 === 0) {
        console.log(`Este es un numero par ${i}`);
        
    } else {
        console.log(`Este es un numero impar ${i}`);
        
    }
    
}

//  prueba del fizz buzz
let i = 1;
for (i = 1; i<100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} fizzBuzz`); 
     }
    if (i % 3 === 0) {
       console.log(`${i} fizz`); 
    }
    if (i % 5 === 0) {
        console.log(`${i} fizz`); 
     }
    
}

// iteraciones con while y do while
 while (i < 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} fizzBuzz`); 
     }
    if (i % 3 === 0) {
       console.log(`${i} fizz`); 
    }
    if (i % 5 === 0) {
        console.log(`${i} fizz`); 
     }
     i++;
 }

 // Do While
 let i= 1000;

 do {
     console.log(i);
     i++;
 } while (i<100);

 // iteraciones con for of (para arreglos)

 const carritoLlenoof = [
    {nombre: 'televisor 27 pulgadas', precio: 1000},
    {nombre: 'Tablet', precio: 500},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 1500},
    {nombre: 'Mouse', precio: 80},
    {nombre: 'Audifonos', precio: 40},
]
for (productos of carritoLlenoof) {
    console.log(productos.nombre);
      
  }
  

 const myArrayNumeros2 = [2, 4, 8, 10, [1, 2 ,3]];
for (productos of myArrayNumeros2) {
   console.log(productos);
     
 }

// iteraciones con for in  (para objetos)
 const carritoLlenoin = {
    nombre: 'televisor 27 pulgadas', precio1: 1000,
    nombre1: 'Tablet', precio2: 500,
    nombre2: 'Teclado', precio3: 100,
    nombre3: 'Celular', precio4: 1500,
    nombre4: 'Mouse', precio5: 80,
    nombre5: 'Audifonos', precio6: 40,
}
for (productos in carritoLlenoin) {
    console.log(`${carritoLlenoin[productos]}`);
      
  }

  for (let [llave, valor]  of Object.entries(carritoLlenoin)){
    console.log(llave);
    console.log(valor);}

//numeros aleatorios de 0 a 10
    const randomFrom0To10 = Math.random() * 11;
    const floor = Math.floor(randomFrom0To10); //redondear abajo
    const numberFrom1To10 = floor + 1; // redondear arriba
    console.log(randomFrom0To10);
    console.log(floor);
    console.log(numberFrom1To10);

//rangos asignados por los usuarios
    function rangoNumeros(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      console.log(rangoNumeros(1, 100));


//prototipos y constructores

function Oferta(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.saludo= function () {
        console.log(`Hola, me llamo:  ${this.nombre}`);
    }
}

/* const miguel = new Oferta('miguel','masculino'),
marcela = new Oferta('marcela','femenino'); */

/* 
console.log(miguel);
console.log(marcela);
 */


//Asignando metodos al prototipo

function Oferta(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

}

//Metodo asignado al prototipo de la funcion constructora
Oferta.prototype.saludo= function () {
    console.log(`Hola, me llamo  ${this.nombre} y soy de género ${this.genero}`);
}

const miguel = new Oferta('miguel','masculino');
const marcela = new Oferta('marcela','femenino');


console.log(miguel);
console.log(marcela);

miguel.saludo();
marcela.saludo();


//Metodo asignado al prototipo de la funcion constructora

class Car {
    constructor(nombre, modelo){
        this.nombre= nombre;
        this.modelo= modelo;
    }
     //metodos
     nombrar(){
        console.log(`El nombre del carro es ${this.nombre}`);
    }

    modelar(){
        console.log(`El modelo del carro es ${this.modelo}`);
    }
    age(){
        let date = new Date();
    return date.getFullYear() - this.modelo;
    }
}


class Gasolina extends Car{
    constructor(nombre, modelo, Gasolina){
        super(nombre,modelo);
        this.Gasolina = Gasolina;
    }
    //sobreescritura de metodo
    modelar(){
        console.log(`El modelo del carro es ${this.modelo} a ${this.Gasolina}`);
    }
}

//Asignando metodos a variables
const Giovanny = new Car("Susuki T-Cross", "2021")
//const Libardo = new Car("chevrolet captiva","2012");
const age = new Car("chevrolet captiva","2012");
const gasolinaGiovanny = new Gasolina("Susuki T-Cross", "2021", "Corriente");
const gasolinaLibardo = new Gasolina("chevrolet captiva","2012", "Extra");
const Libardo = new Gasolina("chevrolet captiva","2012", "Diesel");

       
//llamando las variables
console.log(Giovanny);
Giovanny.nombrar();
Giovanny.modelar();
console.log(Libardo);
Libardo.nombrar();
Libardo.modelar();
console.log(`El carro de libardo tiene ${Libardo.age()} años`);
console.log(`El carro de Giovanny tiene ${Giovanny.age()} años`);
console.log(gasolinaGiovanny);
console.log(gasolinaLibardo);

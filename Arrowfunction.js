// 1ra forma
hola1();
function hola1 (){
    console.log('hola mundo');
}

//2da forma
const hola = function (){
    console.log('hola mundo');
}


hola();

//3ra forma
const hola2 = ()=>{
    console.log('hola mundo');
}
hola2();

//4ta forma
const hola3 = () => console.log('hola mundo');
hola2();


//ejemplos
const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("miguebeto")



//ejemplos
// const sumar = function(a,b) {
//     return a+b;
// }

const sumar = (a,b) => a+b

console.log(sumar(1,2));

//ejemplos
const funciondevariaslineas = () => {
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}

funciondevariaslineas();

//ejemplos
const numueros = [1,2,3,4,5]
numueros.forEach((el,index) => console.log(`${el} está en la posición ${index}`))


funciondevariaslineas();


//ejemplos
const perro ={
    nombre: 'Violeta',
    ladrar (){
        console.log(this);
    } 
        
    }


perro.ladrar();




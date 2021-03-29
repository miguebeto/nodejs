
let x = 10;

const promesa = new Promise((resolve, reject)=> {
    
   

setTimeout(()=>{
    x = x * 3 +2 ;
    console.log("2... Proceso ejecutándose");
    resolve(x);

}, 1500);
});


console.log("1... Proceso inciado");

promesa.then ((resolve) =>{
    console.log("3... Proceso terminado su respuesta es:" + resolve);   
  });


  
function cuadradopromesa (value) {
    if (typeof value!== "number") {return Promise.reject (`Error, el valor ${value} ingresado no es un numero`);}

    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve({
               value,
               result: value * value
           });
        }, 0 | Math.random()*10000);
    })
}

cuadradopromesa("0")
.then((obj)=> {
    //console.log(obj);
    console.log("Inicio Promesa");
    console.log(`promise: ${obj.value}, ${obj.result}`);
    return cuadradopromesa (1);
})
.then(obj=>{
    console.log(`promise: ${obj.value}, ${obj.result}`);
    return cuadradopromesa (2);
})
.then(obj=>{
    console.log(`promise: ${obj.value}, ${obj.result}`);
    return cuadradopromesa (3);
})
.then(obj=>{
    console.log(`promise: ${obj.value}, ${obj.result}`);
    return cuadradopromesa (4);
})
.then(obj=>{
    console.log(`promise: ${obj.value}, ${obj.result}`);
   return cuadradopromesa (5);
})
.then(obj=>{
    console.log(`promise: ${obj.value}, ${obj.result}`);
    console.log("End promise");
})
.catch(err=>console.error(err)
);
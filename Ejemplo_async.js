function cuadradopromesa (value) {
    if (typeof value!== "number") {return Promise.reject (`Error, el valor ${value} ingresado no es un numero`);}

    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve({
               value,
               result: value * value
           });
        }, 0 | Math.random()*1000);
    })
}


async function funcionasyncDeclarada() {
    try {
        console.log("Inciio async function");
        let obj = await cuadradopromesa(0);
        console.log(`Async funtion: ${obj.value},${obj.result}`);

        obj= await cuadradopromesa(1);
        console.log(`Async funtion: ${obj.value},${obj.result}`);

        obj= await cuadradopromesa(2);
        console.log(`Async funtion: ${obj.value},${obj.result}`);

        obj= await cuadradopromesa(3);
        console.log(`Async funtion: ${obj.value},${obj.result}`);

        obj= await cuadradopromesa(4);
        console.log(`Async funtion: ${obj.value},${obj.result}`);

        obj= await cuadradopromesa("5");
        console.log(`Async funtion: ${obj.value},${obj.result}`);

        
    } catch (err){
        console.error(err);
    }
}

funcionasyncronaDeclarada= async()=>{
try {
    console.log("Inciio async function");
    let obj = await cuadradopromesa(6);
    console.log(`Async funtion: ${obj.value},${obj.result}`);

    obj= await cuadradopromesa(7);
    console.log(`Async funtion: ${obj.value},${obj.result}`);

    obj= await cuadradopromesa(8);
    console.log(`Async funtion: ${obj.value},${obj.result}`);

    obj= await cuadradopromesa(9);
    console.log(`Async funtion: ${obj.value},${obj.result}`);

    obj= await cuadradopromesa("10");
    console.log(`Async funtion: ${obj.value},${obj.result}`);

    console.log(`Fin Async funtion`);
} catch (err){
    console.error(err);
}
}

funcionasyncDeclarada();
funcionasyncronaDeclarada();
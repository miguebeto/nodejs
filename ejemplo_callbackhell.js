function callbackalcuadrado (value,callback) {
    setTimeout(() => {
        callback(value,value*value);
    }, 0 | Math.random()*10000);
}

callbackalcuadrado(2,(value,result)=>{
    console.log("Ejecutando callback...");
    console.log(`El cuadrado de ${value} es igual a: ${result}`);
    callbackalcuadrado(3,(value,result)=>{
        console.log(`El cuadrado de ${value} es igual a: ${result}`);
        callbackalcuadrado(4,(value,result)=>{
        console.log(`El cuadrado de ${value} es igual a: ${result}`);
            callbackalcuadrado(5,(value,result)=>{
            console.log(`El cuadrado de ${value} es igual a: ${result}`);
                callbackalcuadrado(6,(value,result)=>{
                console.log(`El cuadrado de ${value} es igual a: ${result}`);
                console.log("Fin callbackhell");
                console.log("callbackhell!!!!");
                console.log("htttp://callbackhell.com");
                })
            })
        })
    })
})
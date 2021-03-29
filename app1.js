console.log('Hola Mundo!!');

var hello = function (name) {
    
    let color="red";

return function(){
    console.log("hello" + name);
    console.log(color);
};
    
 };

 var hellopedro = hello("pedro");
 hellopedro();
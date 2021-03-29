const nombre = 'Deathpool';
const real = 'Wade Wiston';
const normal = nombre + ' ' + real;
const template = `${ nombre} ${real}`;

console.log(normal);
console.log(template);
console.log(normal === template);

const html =`<h1> Hola </h1>
 <P>Mundo</p>`;

console.log(html);

var hello = function (name) {
    
    let color="red";

return function(){
    console.log("hello" + name);
    console.log(color);
};
    
 };

 var hellopedro = hello("pedro");
 hellopedro();
 


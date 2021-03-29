const adduserbyid =(id,nombre) => {

const usuario ={
    id,
    nombre: "Miguel"
}

setTimeout( () => {
    console.log(usuario);
}, 1500 )

}


adduserbyid (10, (usuario) => {
console.log(usuario.id);
console.log(usuario.nombre.toUpperCase());
});


function addiduser (fn){
    setTimeout(function (){
        console.log("este es el usuario 1");
        fn()
    }, 1500)

};

addiduser( function (name){
    var name = "miguel";
    console.log(name);
});







function funcion1 (fn){
    setTimeout(function(){
console.log("esta es la funcion 1");
fn();
    }, 1500);

}

function funcion2 (){
    console.log("esta es la funcion 2");

}; 

funcion1(funcion2); 

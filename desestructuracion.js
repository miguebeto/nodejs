const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneración',
    edad: 50,
getnombre() {
return `${this.nombre} ${this.apellido} ${this.poder}`
}
}


//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeheroe   ({nombre, apellido, poder, edad= 0}){

    console.log(nombre, apellido, poder, edad);

}

//imprimeheroe(deadpool);

const heroes = ['Deadpool' , 'Superman', 'Batman'];
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [h1, h2,h3] = heroes;


console.log(h1, h2, h3); 
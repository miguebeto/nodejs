// metodo filter= const masBaratos = numeros.filter(function(numero){return condicion;});recomend=use func in var aparte
const numeros= [1,2,3,4,5,6,7,8,9]
const mascotas=[
{nombre: "puchini", Edad:12, tipo:"perro"},
{nombre:"chanchito", Edad:3, tipo:"perro"},
{nombre:"pulga", Edad:10, tipo:"perro"},
{nombre:"pelusa", Edad:12, tipo:"gato"},
];

const numerosfiltrados = numeros.filter(x => x < 5)
console.log(numerosfiltrados, numeros);

const perros = mascotas.filter(x => x.tipo == "perro" );
console.log(perros);

const gatos = mascotas.filter(x => x.tipo == "gato" );
console.log(gatos);


// metodo map= const dobles = numeros.map(function(newnumero, posicion, numeros(no suele usarse)){return newnumero*2;}); recomend=use func in var ap

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length ; i++ ){
        acumulado += ns[i];
    }
    return acumulado
}

const edades = mascotas.map(x => x.Edad)
console.log(edades);

const numero= [1,2,3,4,5]
const multiplicados = numero.map(x => x * 2)
console.log(multiplicados);

const triples = numero.map(function(newnumero){return newnumero * 3;});
console.log(triples);

const parejas = numero.map(x => [x,x])
console.log(parejas);


const resultado1 = suma(edades)
console.log(resultado1/ edades.length)


//metodo reduce

//const reducer = numeros.reduce ((acumulador, valoractual, posicion(opcional), numeros(opcional))=> {nuevoacumulado o acu+valoractual}, 0)



const reducido = [1,2].reduce((acumulador, valorActual)=> acumulador + valorActual, 0)
console.log(reducido);

const resultados = numero.reduce((acu, ele) => acu + ele, 0)
console.log(resultados);


const indexed = mascotas.reduce((acu, ele) => ({
    ...acu, [ele.nombre]: ele,}),{})
console.log(indexed["pelusa"]);


const anidados = [1, [2 , 3] , 4 , [5] ];
const plano = anidados.reduce((acu , ele) => acu.concat(ele), []);
console.log(plano);

//ordenar numeros con sort
const numDesordenados= [9, 12, 11, 26];
numDesordenados.sort((a, b)=> a-b)
console.log(numDesordenados);

//ordenar edad con sort
let personas = [
    {nombre: "miguel", edad: 28},
    {nombre: "blanco", edad: 24},
    {nombre: "castilla", edad: 21}
];
personas.sort((a, b)=> a.edad-b.edad);
console.log(personas);

//ordenar string con sort

personas.sort((a, b)=> {
  if (a.nombre<b.nombre) return -1;
  if (a.nombre<b.nombre) return 1;
  return 0;
});
console.log(personas);

["miguel", "angel", "blanco", "castilla", "árabe"].sort();
["miguel", "angel", "blanco", "castilla", "árabe"].length

//ordenar string con tildes
["miguel", "angel", "blanco", "castilla", "árabe"].sort((a,b)=>a.localeCompare(b));


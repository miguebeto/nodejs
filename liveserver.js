const carritoLlenosome = [
  {nombre: 'televisor 27 pulgadas', precio: 1000},
  {nombre: 'Tablet', precio: 500},
  {nombre: 'Teclado', precio: 100},
  {nombre: 'Celular', precio: 1500},
  {nombre: 'Mouse', precio: 80},
  {nombre: 'Audifonos', precio: 40},
]


const productoSpread = {nombre: 'Disco Duro', precio: 300};
const carritoSpread = [...carritoLlenosome, productoSpread];
const carritoSpread2 = [productoSpread, ...carritoLlenosome];
console.log(carritoSpread);
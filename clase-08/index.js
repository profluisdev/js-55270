// For each

// El método forEach itera por cada uno de los elementos del array obteniendo su valor
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);

// numeros.forEach( numero => console.log(numero) )

// for (let numero of numeros) {
//   console.log(numero);
// }

// numeros.forEach((numero) => {
//   console.log(`El elemento del array en este ciclo es ${numero}`)
// });

// const nombres = ["Juan", "Pedro", "Maria", "Pepe"]

// nombres.forEach( nombre => console.log(`El nombre en este elemento es ${nombre}`))
// nombres.forEach( nombre => alert(nombre))

// Find

/* 
El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo 
y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumpla con esa condición:
*/

// const cursos = [
//   { nombre: "Javascript", precio: 15000 },
//   { nombre: "ReactJS", precio: 22000 },
// ];

// const resultado = cursos.find( curso => curso.nombre === "Javascript") 
// const resultado2 = cursos.find( curso => curso.precio === 22000) 
// const resultado3 = cursos.find( curso => curso.nombre === "pepe")  // undefined
//console.log(cursos.find(curso => curso.nombre.toLowerCase().includes("js"))); 


// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

// const cursoBuscado = prompt("Ingrese el curso que desea ver");

// // const resultado = cursos.find( curso => curso.nombre === cursoBuscado);
// const resultado = cursos.find( curso => curso.nombre.toLowerCase() === cursoBuscado.toLowerCase());

// if(resultado) {
//   alert(`El curso solicitado:\nNombre: ${resultado.nombre}\nPrecio: ${resultado.precio}`)
// } else {
//   alert("No se encontro el curso buscado")
// }

// Filter
/* 
El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array 
con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacío
*/

// const cursos = [
//   { nombre: "Javascript", precio: 15000, categoria: "Programación" },
//   { nombre: "ReactJS", precio: 22000, categoria: "Programación" },
//   { nombre: "AngularJS", precio: 22000, categoria: "Algoritmos" },
//   { nombre: "Desarrollo Web", precio: 16000, categoria: "Programación" },
// ];

// // Retorna un nuevo array que lo almacenamos en una constante

// const cursosFiltrados = cursos.filter( curso => curso.precio < 21000 );
// console.log(cursosFiltrados);

// // Quitar curso

// const sinAngular = cursos.filter( curso => curso.nombre !== "AngularJS"); 
// console.log(sinAngular);

// const nombres = ["Juan", "Pedro", "Maria", "Maria", "Pepe"]

// const marias = nombres.filter( nombre => nombre === "Maria")
// const sinMarias = nombres.filter( nombre => nombre !== "Maria")
// const cursosDeProgramacion = cursos.filter( curso => curso.categoria === "Programación")

// console.log(marias);
// console.log(`En el listado de nombres encontramos a ${marias.length} Marias`);

// console.log(sinMarias);

// console.log(cursosDeProgramacion);


// Some
// const cursos = [
//   { nombre: "Javascript", precio: 15000 },
//   { nombre: "ReactJS", precio: 22000 },
//   { nombre: "AngularJS", precio: 22000 },
//   { nombre: "Desarrollo Web", precio: 16000 },
// ];

// // Es muy similar al método find, es un método de búsqueda solo que en lugar de retornar el objeto, retorna un booleano true o false

// console.log(cursos.some(curso => curso.nombre === "AngularJS")); // true
// console.log(cursos.some(curso => curso.nombre === "pepe")); // false
// console.log(cursos.some(curso => curso.nombre.includes("Java"))); // true
// console.log(cursos.find(curso => curso.nombre.toLowerCase().includes("js"))); 


// Map

/* 
El método map() nos crea un nuevo array, con la misma cantidad de elementos del array, 
solo que se almacenan en los mismos el retorno de la función establecida
*/

// const cursos = [
//   { nombre: "Javascript", precio: 15000 },
//   { nombre: "ReactJS", precio: 22000 },
//   { nombre: "AngularJS", precio: 22000 },
//   { nombre: "Desarrollo Web", precio: 16000 },
// ];

// const nombresCursos = cursos.map( curso => curso.nombre ); 
// const preciosCursos = cursos.map( curso => curso.precio ); 
//  // atajo funciones flecha anf   

// console.log(nombresCursos);
// console.log(preciosCursos);

// const cursos2 = cursos.map( curso => {
//   curso = {
//     nombre: curso.nombre,
//     precio: curso.precio,
//     categoria: " "
//   }
//   return curso; 
// })

// console.log(cursos2);

// const cursosConDescuento = cursos2.map(curso => {
//   curso = {
//     nombre: curso.nombre,
//     precio: curso.precio - (curso.precio * 0.10),
//     categoria: " "
//   }

//   return curso;
// })

// console.log(cursosConDescuento);


// Reduce

// El método reduce() nos permite obtener un único valor tras iterar sobre todo el array

// const numeros = [1, 2, 3, 4, 5, 6];

// const total = numeros.reduce( (acumulador, elemento) => acumulador + elemento, 0);

// console.log(total);

// const carrito = [
//   {
//     nombre: "Camisa",
//     precio: 200,
//   },
//   {
//     nombre: "Pantalon",
//     precio: 300,
//   },
//   {
//     nombre: "Remera",
//     precio: 333,
//   },
// ];

// const totalCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

// console.log(totalCarrito);

// Sort
// Debemos recordar que el método sort modifica el array original
// const numeros = [40, 1, 5, 200];

// // Ordenamos de manera ascendente
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// // Ordenamos de manera descendente
// numeros.sort((a, b) => b - a);
// console.log(numeros);

// Ejemplo de como retornar un valor booleano en una comparación de orden alfabético
// console.log("a" > "b");
console.log("Jose" < "Pedro");

const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]

// Ordenar alfabéticamente
items.sort((a, b) => {
  if (a.name > b.name) { // Pikachu > Charmander

      return 1;
  }
  if (a.name < b.name) { 
      return -1;
  }
  // a es igual a b
  return 0;
})

console.log(items);

// Ordenar por precios de menor a mayor
items.sort((a, b) => {
  if (a.price < b.price) {

      return 1;
  }
  if (a.price > b.price) {
      return -1;
  }
  // a es igual a b
  return 0;
})

console.log(items);
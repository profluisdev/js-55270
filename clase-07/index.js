
// // Ejemplo de abstracción en Javascript

// let nombre = "Juan";

// console.log(nombre.toLowerCase());

// // Funciones de orden superior
// // Retornar funciones

// function mayorQue(numeroReferencia) {
//   return (numero) => numero > numeroReferencia
// }

// // Almacenamos en una variable la función retornada

// let mayorQueDiez = mayorQue(10);

// // let mayorQueDiez = (numero) => numero > 10

// console.log(mayorQueDiez(9));

// const resultado = mayorQueDiez(12);

// console.log(resultado);

// function saludar(mensaje) {
//   return (nombre) => `Hola ${nombre} mensaje: ${mensaje}`
// }

// let saludoJuan = saludar("Mensaje de prueba")

// console.log(saludoJuan("Juan"));

// function asignarOperacion(operacion) {
//   if (operacion == "sumar") {
//     return (num1, num2) => num1 + num2;
//   } else if (operacion == "restar") {
//     return (num1, num2) => num1 - num2;
//   }
// }

// let suma = asignarOperacion("sumar"); 

// console.log(suma(5, 5));

// let resta = asignarOperacion("restar");

// console.log(resta(20, 5));

// Recibir funciones por parámetro

// let numeros = [1, 2, 3, 4, 5];

// let numerosCopia = [];

// function insertarArray(arrayOriginal, arrayCopia) {
//   for(let elemento of arrayOriginal) {
//     arrayCopia.push(elemento);
//   }
// }

// function copiarArray(arrayOriginal, arrayCopia, funcion) {
//   funcion(arrayOriginal, arrayCopia);
// }

// console.log(numerosCopia);

// copiarArray(numeros, numerosCopia, insertarArray);

// console.log(numerosCopia);

// Math

// console.log(Math);
// console.log(Math.E);
// console.log(Math.PI);

// // Min & Max

// // Calcula el número máximo de los números enviados por parámetros
// console.log(Math.max(3, 6, 43, 5, 23));

// // Calcula el número mínimo de los números enviados por parámetros
// console.log(Math.min(3, 6, 43, 5, 23));

// const numeros = [15, 23, 33, 56, 21, 34, 29];
// console.log(...numeros);
// /* 
// Los ... es una operador de propagación lo que hace es descomponer el array 
// en sus elementos individuales
// */

// console.log(Math.max(...numeros));
// // Es equivalente a colocar así
// console.log(Math.max(15, 23, 33, 56, 21, 34, 29)) 

// console.log(Math.min(...numeros));

// // Ceil, Floor & Round

// const pi = Math.PI // 3.141592653589793

// // CEIL: devuelve el entero mayor o igual más próximo
// console.log(Math.ceil(pi));

// // FLOOR: devuelve el entero más cercano redondeado hacia abajo
// console.log(Math.floor(pi));

// // ROUND: retorna el valor de un número redondeado al entero más cercano si es por ejemplo 3.5 redondea hacia arriba
// console.log(Math.round(pi));

// // Square Root
// // Retorna la raíz cuadrada de un número, si le pasa un número negativo devuelve NaN
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(-3));

// // Random
// // El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.
// console.log(Math.random());

// // Números aleatorios con rango deseado

// // Números entre 0 y 10 
// console.log(Math.random() * 10);

// // Números entre 0 y 50 
// console.log(Math.random() * 50);

// // Números entre 5 y 10
// console.log(Math.random() * 5 + 5);

// // números entre 20 y 50
// console.log(Math.random() * 30 + 20)
// // 30 es el número de rango de números que tiene y el 20 es el límite inferior
// // entonces a partir el número 20 tiene un rango de 30 números para elegir

// // Redondeo

// // Redondeamos números entre el 0 y 20
// console.log(Math.round( Math.random() * 20 ));

// // Redondeamos números entre el 1 y 10
// console.log(Math.round( Math.random() * 10 + 1))

// Date

// console.log(new Date());
// // En Date los meses comienzan a partir de 0, enero  = 0, febrero = 1, marzo = 2 ... 
// console.log(new Date(2020, 1, 15));

// const casiNavidad = new Date(2021, 11, 25, 23, 59, 59);
// console.log(casiNavidad);

// Métodos que devuelven valores singulares

const hoy = new Date(); 

// Obtenemos el mes entre 0 y 11 recordando que enero es 0 y diciembre 11 
console.log(hoy.getMonth());

// Obtenemos el año en números ej: 2023
console.log(hoy.getFullYear());

// Obtenemos el día entre 1 y 7 recordando que el lunes es 1 y domingo 7
console.log(hoy.getDay());

// Mes día y año 
console.log(hoy.toDateString());

// Mes día y año en formato fecha y la hora 
console.log(hoy.toLocaleString());

// Mes día y año en formato fecha 
console.log(hoy.toLocaleDateString());

// Hora 
console.log(hoy.toTimeString());

const hora = new Date().toTimeString().split(":")

if(parseInt(hora[0]) >= 22) {
  console.log("Happy Hour promoción 2x1 pague dos y lleve uno");
} else {
  console.log("No hay promo a esta hora");
}

// Ejemplo de aplicación 
// Si quieren poner en un e-commerce un happy hour para que en determinado horario los productos tengan un determinado descuento
// Un Cyber Monday entre determinadas fechas los productos pueden tener un descuento 
// En determinado horario su aplicación se pone en dark mode 

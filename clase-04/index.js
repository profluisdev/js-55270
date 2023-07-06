// Declarar una función

// function saludar() {
//     console.log("Hola a todos !!!");
// }

// // Llamar una función
// saludar();

// Ejemplo de utilidad

// function solicitarNombre() {
//   let nombre = prompt("Ingrese un nombre");
//   alert("El nombre ingresado es " + nombre);
// }

// solicitarNombre();
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();

// Ejemplo con condicionales

// function avisoError() {
//     console.log("No cumple con la condición");
// }

// function avisoOk() {
//     console.log("Cumple con la condición");
// }

// let texto = prompt("Ingrese un texto como mínimo de 3 caracteres");
// console.log(texto.length); // Mide el largo de le caracteres de una cadena de texto

// if (texto.length < 3) {
//     avisoError()
// } else {
//     avisoOk()
// }

// Funciones con parámetros

// function mensajeDosPalabras(parametro1, parametro2) {
//     console.log(parametro1 + " " + parametro2);
// }

// mensajeDosPalabras("Hola", "Alumnos");

//Declaración de variable para guardar el resultado de la suma
// let resultado = 0;

// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
//   }

//   // Valor de resultado antes de llamar a la función
// console.log(resultado);
// let num1 = parseInt(prompt("Ingrese un número"))
// let num2 = parseInt(prompt("Ingrese un número"))
// sumar(num1, num2);
// console.log(resultado);

// Función cambiar nombre

// let nombre = "Jose";

// function cambiarNombre(nuevoNombre) {
//     nombre = nuevoNombre;
// }

// console.log(nombre);
// cambiarNombre("Mateo");
// console.log(nombre);

// Funciones con retorno

// function retornaSuma(num1, num2) {
//     return num1 + num2
// }

// console.log(retornaSuma(10, 5));

// let resultadoSuma = retornaSuma(10, 5);

// console.log(resultadoSuma);

// let precio = 400;

// function mostrarPrecioConDescuento(descuento) {

//     return precio - descuento
// }

// console.log(mostrarPrecioConDescuento(20));

// Calculadora

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//       case "+":
//         return primerNumero + segundoNumero;
//         break;
//       case "-":
//         return primerNumero - segundoNumero;
//         break;
//       case "*":
//         return primerNumero * segundoNumero;
//         break;
//       case "/":
//         return primerNumero / segundoNumero;
//         break;
//       default:
//         return 0;
//         break;
//     }
//   }
//   console.log("El resultado es: " + calculadora(10, 5, "/"));

// Scope

// let nombre = "John Doe"; // variable global

// function saludar() {
//   let nombre = "Juan Coder"; // variable local
//   console.log(nombre);
// }
// //Accede a nombre global
// console.log(nombre); // → “John Doe”

// //Accede a nombre local
// saludar(); // → “Juan Coder”

// Funciones anónimas

// const suma = function (a, b) {
//     return a + b;
//   };

// const resta = function (a, b) {
//     return a - b;
//   };

//   console.log(suma(10, 6));
//   console.log(resta(10, 6));

// Funciones flecha

// const suma = (numero1, numero2) => {
//   return numero1 + numero2;
// };

// console.log(suma(10, 3));

// const calcularPrecioConDescuento = (precio, descuento) => {
//     return precio - descuento;
// }

// console.log(calcularPrecioConDescuento(100, 20));

// Funciones flecha con return implícito

// const suma = (numero1, numero2) => numero1 + numero2;
  


// console.log(suma(10, 3));

// Funciones flecha con un solo argumento y return implícito

// const mostrarTexto = (texto) => "El texto a mostrar es: " + texto;

// console.log(mostrarTexto("Hola a todos")); // El texto a mostrar es: Función flecha
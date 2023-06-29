//Valores booleanos true o false

let verdadero = true;
let falso = false;
let nombre;

// Estructura if

// if (true) {
//     console.log("El valor es verdadero")
//     nombre = "Luis";
//     console.log(nombre);
// }

// Operador de equivalencia ==

// let valor1 = 2;
// let valor2 = 2;

// if (valor1 == valor2) {
//     console.log("Los valores son iguales")
// }

// if (2 == 2) {
//     console.log("Los valores son iguales")
// }

// Estructura if else

// let color = "Azul";

// if (color == "Rojo") {
//     console.log("El color es Azul");
// } else {
//     console.log("El color no es Azul");
// }

// let color = prompt("Ingrese un color");

// if (color == "Azul") {
//     console.log("El color es Azul");
// } else {
//     console.log("El color no es Azul");
// }

// const nombreUsuario = prompt("Ingrese el nombre de usuario");

// if (nombreUsuario == "") {
//     alert("No ingreso un nombre de usuario")
// } else {
//     alert("El nombre de usuario es " + nombreUsuario)
// }

// If else if

// let precio = parseInt(prompt("Ingrese un número"));

// if (precio < 20) {
//   console.log("El precio es menor que 20");
// } else if (precio < 50) {
//   console.log("El precio es menor que 50");
// } else if (precio < 100) {
//   console.log("El precio es menor que 100");
// } else {
//   console.log("El precio es mayor que 100");
// }

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 18) {
//     console.log("Usted es menor de edad");
// } else if ( edad >= 18) {
//     console.log("Usted es mayor de edad");
// } else {
//     console.log("Usted no ingreso una edad");
// }

// Operadores lógicos

let numero1 = 20;
let numero2 = 10;
let numeroTexto = "10";
// Operador ==
// let resultado = numero1 == numeroTexto;
// console.log(resultado);

// Operador === estrictamente igual
// let resultado = numero1 === numeroTexto;
// console.log(resultado);

// Operado != es distinto
// let resultado = numero1 != numeroTexto;
// console.log(resultado);

// Operado !== es estrictamente distinto
// let resultado = numero1 !== numeroTexto;
// console.log(resultado);

// Operador < menor
// let resultado = numero1 < numero2;
// console.log(resultado);

// Operador <= menor o igual
// let resultado = numero1 <= numero2;
// console.log(resultado);

// Operador > mayor
// let resultado = numero1 > numero2;
// console.log(resultado);

// Operador >= mayor o igual
// let resultado = numero1 >= numero2;
// console.log(resultado);

// Operador and &&
// if ((numero1 > numero2) && (numero2 == numeroTexto) && (numero1 === 30)) {
//     console.log("Es verdad que numero1 es mayor que numero2 y es verdad que numero2 es igual a numeroTexto y es verdad que numero1 es estrictamente igual a 20");
// } else {
//     console.log("No se cumplen las condiciones");
// }

// Operador or ||

// if (numero1 > numero2 || numero1 == numeroTexto) {
//     console.log("Alguna de las dos condiciones es verdadera");
// } else {
//     console.log("Ninguna condición es verdadera");
// }

// Ejercicio

alert("Bienvenidos a la montaña rusa, primero debemos verificar su edad y estura para poder ingresar");

let edad = parseInt(prompt("Ingrese su edad"));
let estatura = parseFloat(prompt("Ingrese su estura"));
let edadMinima = 16;
let estaturaMinima = 1.6;

if (edad >= edadMinima && estatura >= estaturaMinima) {
  alert("Bienvenido puede ingresar");
} else if (edad >= edadMinima && estatura < estaturaMinima) {
  alert("No cumple con la estura mínima para ingresar");
} else if (edad < edadMinima && estatura >= estaturaMinima) {
  alert("No cumple con la edad mínima para ingresar");
} else {
  alert("No cumple ninguna de las condiciones para ingresar");
}

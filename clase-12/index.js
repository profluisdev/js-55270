// Operador ++

let num = 10;

// aumentar en 1 el valor
num = num + 1;

// primera simplificación
num += 1;

// o bien
num++;

let numeroContador = document.querySelector("#numeroContador");
let btnSuma = document.querySelector("#btnSuma");
let btnResta = document.querySelector("#btnResta");

let contador = 0;

btnSuma.onclick = () => {
  contador++;
  numeroContador.innerHTML = contador;
};

btnResta.onclick = () => {
  contador--;
  numeroContador.innerHTML = contador;
};

// Operadores ternarios

/* Es una simplificación de la estructura condicional if…else.
Es un condicional que consta sí o sí de tres partes:  */

// let edad = 13;

// // if(edad >= 18) {
// //   console.log("Es mayor de edad");
// // } else {
// //   console.log("Es menor de edad");
// // }

// // Resumimos el código en una sola linea con un operador ternario
// edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

// const producto = {
//   nombre: "Remera",
//   precio: 144,
// };

// let precio;

// if (producto.precio < 200) {
//   precio = true;
// } else {
//   precio = false;
// }

// console.log(precio);

// precio = producto.precio > 200 ? true : false;

// producto.precio < 200 ? mostrarMensaje()  : false;

// function mostrarMensaje() {
//   console.log(`La condición des verdadera el precio es ${producto.precio}`)

// }

// // Almacenando el retorno en una variable
// let precio = producto.precio < 200 ? mostrarMensaje()  : false;

// function mostrarMensaje() {
//   console.log(`La condición des verdadera el precio es ${producto.precio}`)
//   return "Hola"
// }
// console.log(precio);

// Operador Lógico and &&

/* Es una reducción de un condicional, pero trata de ejecutar (o retornar) algo sólo si la condición es verdadera,
reduce un if sencillo con un solo bloque de ejecución */

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacío!");
// }

// // con operador AND
// carrito.length === 0 && console.log("El carrito está vacío!");
// let resultado = carrito.length === 2 && console.log("El carrito está vacío!");
// console.log(resultado);

// // Sintaxis if simple

// if (carrito.length === 0) console.log("El carrito está vacío!");

// const usuario = {
//   nombre: "John Doe",
//   edad: 24
// }


// usuario.edad >= 18 && mostrarEdad(usuario.edad)

// function mostrarEdad (edad) {
//     return console.log(`La edad del usuario es ${edad}`);
// }

// Operador Lógico or ||

/* OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos
operandos y no de una condición explícita: operando1 || operando2.
 */

// Tabla de evaluación de valores Falsy
// console.log( 0 || "Falsy")  // Falsy
// console.log( 40 || "Falsy")  // 40
// console.log( null || "Falsy")  // Falsy
// console.log( undefined || "Falsy")  // Falsy
// console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
// console.log( "" || "Falsy")  // Falsy
// console.log( NaN || "Falsy")  // Falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy")  // Falsy

// let inputNombre = document.querySelector("#nombre");

// const stock = 0 || "No hay stock";
// const nombre = inputNombre.value || "Nombre no ingresado";

// console.log(stock);
// console.log(nombre);

// console.log(localStorage.getItem("tareas"));
// let tareas;

// if (localStorage.getItem("tareas") == null) {
//   tareas = [];
// } else {
//   tareas = JSON.parse(localStorage.getItem("tareas"));
// }

// let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// console.log(tareas);



// Operador Nullish Coalescing ??

/* Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’.
En este caso, sólo obtenemos nullish en dos casos: null y undefined */

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const stock = 0 ?? "No hay stock";

// console.log(stock);

// Acceso condicional a un objeto

/* Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error.
Pero, si usamos el operador ? sobre la referencia de un objeto para condicionar su acceso
podemos tener un mejor control de errores en la ejecución:
 */

// const persona = null;

// // console.log(persona.nombre || "El usuario no tiene la propiedad nombre");

// console.log(persona?.nombre || "El usuario no tiene la propiedad nombre");

// Desestructuración de objetos

/* Es una técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa. */

const persona = {
  nombre: "Jose",
  edad: 22,
};

// let nombre = persona.nombre;
// let edad = persona.edad;


const { nombre, edad, email } = persona;

console.log(nombre);
console.log(edad);
console.log(email); // undefined

const persona2 = {
  nombre: "Miguel",
  edad: 42,
  hijos: {
    nombre: "lucas"
  },
  telefonos: {
    cel: 112932032,
    casa: 32992,
    trabajo: 222878,
  },
};

// const { nombre, edad, telefonos: { trabajo, casa, cel} } = persona2;

// console.log(nombre);
// console.log(edad);
// console.log(trabajo);

// function mostrarNombre(parametro) {
//   console.log(`El nombre es ${parametro}`);
// } 

// mostrarNombre(nombre);


// Alias

// const { nombre: nombrePersona2, edad: edadPersona2 , telefonos: { trabajo: telTrabajo, casa, cel}, hijos: {nombre : nombreHijo} } = persona2;

// console.log(nombrePersona2);
// console.log(edadPersona2);

// console.log(telTrabajo);

// Desestructurando arrays

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];


const [nombre1, nombre2, otroNombre, ultimoNombre] = nombres;

console.log(nombre1); // Juan
console.log(nombre2); // Julieta
console.log(otroNombre); // Carlos
console.log(ultimoNombre); // Mariel

const [, , carlos] = nombres;
console.log(carlos); // Carlos


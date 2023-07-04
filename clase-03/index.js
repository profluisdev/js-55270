// Estructura del ciclo for

// for( let i = 0; i <= 28; i++ ) {
//     // i++ equivale a i = i + 1
//     console.log(i);
// }

// Algoritmo para calcular la tabla de multiplicar de un número

// let ingresarNumero = parseInt(prompt("Ingrese un número"));

// for(let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     console.log(ingresarNumero + " X " + i + " = " + resultado);
// }

// Algoritmo para dar turno del 1 al 5 a los nombres ingresados.

// for(let i = 1; i <= 5; i++) {
//     let ingresarNombre = prompt("Ingresar nombre");
//     alert("Turno N° " + i + " Nombre " + ingresarNombre);
// }

// Estructura del ciclo for con control de flujo
// Imprimir todos los números del 0 al 10 menos el número ingresado

// let numeroIngresado = parseInt(prompt("Ingrese Número"));
// if(isNaN(numeroIngresado)) { // isNaN() verifica si el valor ingresado no es un número el resultado es true sino es false
//     alert("El valor ingresado no es un número")
// }
// for(let i = 0; i <=10; i++) {
//     if(i != numeroIngresado) {
//         console.log(i);
//     }
// }

// Sentencia Break

// for(let i = 1; i<=10; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }

// Sentencia Continue

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// Ciclo While
// Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”

// let entrada = prompt("Ingresar un dato");

// while(entrada != "ESC") {
//     alert("El usuario ingreso " + entrada)
//     entrada = prompt("Ingresar un dato");
// }

// Ejemplo de un login para un admin

// let usuario = prompt("Ingrese un nombre de usuario administrador").toLowerCase(); // toLowerCase() transforma el texto ingresado a minúsculas
// let contrasenia = prompt("Ingrese una contraseña de administrador").toUpperCase(); // toUpperCase() transforma el texto ingresado a mayúsculas 

// while ((usuario != "admin") || (contrasenia != "ADMIN123")) {
//   alert("El usuario o contraseña no son válidos");
//   usuario = prompt("Ingrese un nombre de usuario administrador");
//   contrasenia = prompt("Ingrese una contraseña de administrador");
// }

// alert("Bienvenido al programa");

// Do While

// let numero = 0;

// do {
//     numero = prompt("Ingrese un número");
//     console.log(numero);

// } while(parseInt(numero));


// let numero = parseInt(prompt("Ingrese un número del 1 al 10"));

//  while(numero > 10) {
//     numero = parseInt(prompt("Ingrese un número del 1 al 10"));
//     console.log(numero);
//  }


// Switch

let continuar = true;

while(continuar) {
    // Mostrar un mensaje de opciones 
    let opcion = parseInt(prompt("Selecciona una opción:\n 1. Saludar\n 2. Despedir\n 3. Salir"));

    // Evaluar la opción seleccionada 
    switch(opcion) {
        case 1: // if opcion === 1 
            alert("Hola Bienvenido");
            break;
        case 2: // else if opcion === 2 
            alert("Hasta luego");
            break;
        case 3: // else if opcion === 3 
            continuar = false;
            break;
        default: // else
            alert("Opción inválida por favor ingrese una opción correcta");
            break;
    }

}

alert("Gracias por venir")
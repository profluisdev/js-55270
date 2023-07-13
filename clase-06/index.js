// Array

// Algunos tipos de array

const array = [];
console.log(array);

// const numeros = [1, 2, 3, 4, 5];

// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

const booleanos = [true, false, false, true];

const mix = ["Bienvenidos", true, 39];

// console.log(numeros);
// console.log(nombres);
// console.log(booleanos);
// console.log(mix);

// console.log(nombres[2]);
// console.log(mix[2]);

// let suma = numeros[2] + mix[2];
// console.log(suma);

// for(let i = 0; i < 5; i++) {
//     console.log(numeros[i]);
//     // numeros[0] en el primer ciclo, numeros[1] en el segundo ciclo y asi ...
// }

// Métodos de arrays

// console.log(`El array tiene ${nombres.length} elementos`);

// for(let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
//     // numeros[0] en el primer ciclo, numeros[1] en el segundo ciclo y asi ...
// }
// console.log(nombres[1].length);

const numeros = [1, 2, 3, 4, 5];

// Agregar elementos en la última posición del array con el método push

// numeros.push(6)
// console.log(numeros);

// numeros.push("Ultimo")
// console.log(numeros);

// Agregar elementos en la primera posición del array con el método unshift

// numeros.unshift(0);
// console.log(numeros);

// Quitar elementos en la primera posición del array con el método shift

// numeros.shift();
// console.log(numeros);

// Quitar elementos en la última posición del array con el método pop

// numeros.pop()
// console.log(numeros);

// numeros.pop()
// console.log(numeros);

// Quitar elementos de un array en cualquier posición con el método splice

// numeros.splice(2, 2)
// console.log(numeros);

// Método join

// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

// console.log(nombres.join("."));
// console.log(nombres.join(", "));
// console.log(nombres.join("*"));
// console.log(nombres.join(" | "));
// alert(nombres.join("\n"));

// Método concat
// const nombres = ["Luis", "Juan", "Maria", "Pedro"];
// const nombres2 = ["Dario", "Mateo", "Lorena", "Ana"]

// const listaNombres = nombres.concat(nombres2)
// console.log(listaNombres);

//Método Slice
// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

// const sinLuis = nombres.slice(1, 4)

// console.log(sinLuis);

// Método indexOf
// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

// console.log(nombres.indexOf("Maria"));
// console.log(nombres.indexOf("Pepe"));

// Método includes

// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

// console.log(nombres.includes("Luis")); // true
// console.log(nombres.includes("Juan")); // true

// Método reverse

// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

// nombres.reverse()
// console.log(nombres); // ['Pedro', 'Maria', 'Juan', 'Luis']

// Ejercicio

// const listadoTiposMascotas = [];

// let cantidad = parseInt(prompt("Ingrese la cantidad de mascotas a guardar"));

// do {

//     let nombre = prompt("Ingrese el tipo de mascota");
//     listadoTiposMascotas.push(nombre.toUpperCase())

// } while(listadoTiposMascotas.length != cantidad) 


// alert(listadoTiposMascotas.join("\n"));
// console.log(listadoTiposMascotas);

// const eliminar = (tipoMascota) => {
//     let indice = listadoTiposMascotas.indexOf(tipoMascota);
        // Verifica que encuentre el tipo de mascota
//     if(indice === -1) {
//         alert("Lo siento no encontramos el tipo de mascota indicado")
//     } else {
//         listadoTiposMascotas.splice(indice, 1)
//         alert(`Se elimino a ${tipoMascota} de la lista`)
//     }
// }

// const tipoEliminar = prompt("Ingrese que tipo tipo de mascota desea eliminar");

// eliminar(tipoEliminar)

// alert(listadoTiposMascotas.join("\n"));

// For of

// const productos = [
//     {
//         id: 1,
//         nombre: "Zapato"
//     },
//     {
//         id: 2,
//         nombre: "Remera"
//     },
//     {
//         id: 3,
//         nombre: "Camisa"
//     }
// ]

// console.log(productos);

// for (let producto of productos) {
//     console.log(producto.nombre);
// }


// Ejemplo con clases

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//     }
// }

// const productos = [];

// const producto1 = new Producto("Zapato", 200);

// productos.push(producto1);

// console.log(productos);

// productos.push(new Producto("Remera", 100));

// console.log(productos);

// Cambiar el valor de un elemento de un array
// const nombres = ["Luis", "Juan", "Maria", "Pedro"];

// nombres[1] = "Dario"

// console.log(nombres);
// Objetos

// const persona1 = {
//     nombre: "Homero",
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// }

// console.log(persona1);

// // Mostramos el valor de una propiedad del objeto
// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.calle);

// // Otra forma de obtener el valor de una propiedad con corchetes
// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["calle"]);

// // Re asignar valores a las propiedades

// persona1.nombre = "Bart"
// persona1.edad = 10
// console.log(persona1);

// const producto1 = {
//     nombre: "Zapato",
//     precio: 100,
//     stock: 0
// }

// const producto2 = {
//     nombre: "Remera",
//     precio: 200,
//     stock: 3
// }

// console.log(producto1);

// // Ejemplo de uso
// if( producto1.stock <= 0) {
//     console.log("No hay stock");
// } else {
//     console.log("Hay " + producto1.stock + " en stock");
// }

// Función constructora

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle
// }

// const persona1 = new Persona("Dante", 31, "Av. Falsa 123");
// console.log(persona1);

// const persona2 = new Persona("Homero", 39, "Av. Siempreviva 742");
// console.log(persona2);

// function Producto(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
// }

// const producto1 = new Producto("Zapato", 100, 10);
// const producto2 = new Producto("Pantalon", 200, 10);
// const producto3 = new Producto("Remera", 150, 2);
// console.log(producto1, producto2, producto3);
// alert(producto1.nombre);
// console.log(producto2);
// console.log(producto3);

// Métodos
// let hola = "Saludo";

// console.log(hola.length);
// console.log(hola.toLowerCase());
// console.log(hola.toUpperCase());
// console.log(hola.includes("S"));

// function Producto(nombre, precio, stock) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.stock = stock;
//   this.iva = precio * 0.21;
//   this.precioSinIva = this.precio - this.iva;
//   this.descuentoIva = function () {
//     this.precio = this.precio - this.iva;
//   };
//   this.descuento = function (descuento) {
//     this.precio = this.precio - descuento;
//   };
//   this.cambiarNombre = function (nuevoNombre) {
//     this.nombre = nuevoNombre;
//   };
// }

// const producto1 = new Producto("Zapato", 100, 3);
// console.log(producto1.precio);
// console.log(producto1.precioSinIva);
// producto1.descuento(20);
// console.log(producto1.precio);
// producto1.descuento(20);
// console.log(producto1.precio);

// producto1.cambiarNombre("Remera");

// console.log(producto1);

// Operador in
// console.log("nombre" in producto1);

// Bucle for in

// Mostrar el listado de propiedades
// for (let prop in producto1) {
//     console.log(prop);
// }

// Mostrar el listado de valores
// for (let propiedad in producto1) {
//     console.log(producto1[propiedad]);
//     // producto1["nombre"]
// }

// Clases

// class Producto {
//   constructor(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }

//   descuento(descuento) {
//     this.precio = this.precio - descuento;
//   }

//   comprar() {
//     if (this.stock > 0) {
//       this.stock--;
//       console.log("Muchas gracias por su compra");
//     } else {
//       console.log("No nos queda más stock");
//     }
//   }

//   agregarStock(cantidad) {
//     this.stock += cantidad;
//   }

//   cambiarNombre(nuevoNombre) {
//     this.nombre = nuevoNombre;
//   }
// }
// const producto1 = new Producto("Zapato", 100, 3);
// // console.log(producto1);
// // producto1.descuento(20);
// // console.log(producto1);

// console.log(producto1.stock);
// producto1.comprar();
// console.log(producto1.stock);
// producto1.comprar();
// producto1.comprar();
// producto1.comprar();
// producto1.agregarStock(2);
// console.log(producto1.stock);
// producto1.comprar();
// console.log(producto1.stock);

// producto1.cambiarNombre("Chuletas");
// console.log(producto1);

class Persona {

    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    saludar() {
        console.log("Hola soy " + this.nombre);
    }

    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

const persona1 = new Persona("Juan", 20, "Av. Falsa 123")
console.log(persona1);

persona1.cambiarNombre("Marcelo")
console.log(persona1);

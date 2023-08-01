// localStorage

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento 
// valor = valor/contenido del elemento 

/* La información persiste reinicio de navegador y hasta del sistema operativo. */

// Guardar datos en localStorage con setItm
// Los datos que se almacenan en el localStorage se transforman y guardan en string

localStorage.setItem("mensaje", "Hola mundo");
localStorage.setItem("activo", true);
localStorage.setItem("nombre", "Juan");
localStorage.setItem("edad", 34);

// Recuperad los datos del localStorage con getItem

// Los datos recuperados del localStorage siempre son string

let mensaje = localStorage.getItem("mensaje");
console.log(mensaje);

let activo = localStorage.getItem("activo");
console.log(activo);
console.log(typeof activo);
console.log(typeof 23);
console.log(typeof true);

let nombre = localStorage.getItem("nombre");
console.log(nombre);

let edad = localStorage.getItem("edad");
console.log(edad);

// sessionStorage

/* La información almacenada en sessionStorage se almacena en el navegador hasta que el usuario cierra la ventana. 
Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma página tendrá otro sessionStorage distinto*/

// Guardar datos en el sessionStorage

sessionStorage.setItem("email", "alumno@coder.com");
sessionStorage.setItem("numeros", [1,2,3]);

// Recuperar información del sessionStorage

let email = sessionStorage.getItem("email");
console.log(email);

let numeros = sessionStorage.getItem("numeros");
console.log(numeros);
console.log(numeros.split(","));

// Veamos el localStorage

console.log(localStorage);
console.log(localStorage.length);
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log(`La clave es: ${clave}`);
    console.log(`El valor es: ${localStorage.getItem(clave)}`);
    console.log("-------------------");
}

// Eliminando datos del storage funcionan tanto en el localStorage como en el sessionStorage

// Eliminar un item especifico
localStorage.removeItem("edad");

// Eliminar todo el localStorage
localStorage.clear();

// Almacenando objetos en localStorage

let productos = [
    {
        nombre: "Remera",
        precio: 200
    },
    {
        nombre: "Pantalon",
        precio: 500
    },
    {
        nombre: "Camisa",
        precio: 300
    },
];

localStorage.setItem("productos", productos);

// JSON

/* Cuando sea necesario enviar un objeto Javascript al servidor o almacenarlo en storage, será necesario convertirlo a 
un JSON (una cadena) antes de ser enviado. */

// JSON Stringify 

/* Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON. */

localStorage.setItem("productosStringify", JSON.stringify(productos));

let productosStringify = localStorage.getItem("productosStringify");
console.log(productosStringify);
console.log(typeof productosStringify);

// JSON Parse
/* Con JSON.parse podemos transformar string en formato JSON a objeto JavaScript. */

let productosParseados = JSON.parse(localStorage.getItem("productosStringify"));
console.log(productosParseados);

productosParseados.forEach( producto => console.log(producto));

console.log(productosParseados[0]);

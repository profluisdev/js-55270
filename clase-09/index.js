// console.log(document);
// console.log(document.body);
// console.log(document.head);

// Métodos para acceder a DOM (Document Object Model)

// getElementById()

/* El método getElementById() sirve para acceder a un elemento de la estructura HTML, 
utilizando su atributo ID como identificación. 
En caso de no encontrar nos devuelve un null  */

//* Recuerden que los id son identificadores únicos no se deben repetir

// const contenedor = document.getElementById("contenedor");

// console.log(contenedor);

// let parrafo1 = document.getElementById("parrafo1");

// console.log(parrafo1);

// getElementsByClassName()
/* El método getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML,
utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias:*/

// let paises = document.getElementsByClassName("paises");

// console.log(paises);
// console.log(paises[0]);
// console.log(paises[1]);
// console.log(paises[2]);

// getElementsByTagName()

/* El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML,
utilizando su nombre de etiqueta como identificación. Esta opción es la menos específica de todas,
ya que es muy probable que las etiquetas se repitan en el código HTML */

// let etiquetasDiv = document.getElementsByTagName("div");

// console.log(etiquetasDiv);
// console.log(etiquetasDiv[0]);
// console.log(etiquetasDiv[1]);
// console.log(etiquetasDiv[2]);

// querySelector()

/* El método querySelector() devuelve el primer elemento que coincide con el selector proporcionado (iguales a los de css).
Si no se encuentra ningún elemento que coincida, se devuelve null. */

// let titulo = document.querySelector("h1");
// console.log(titulo);

// let contenedor = document.querySelector("#contenedor");
// console.log(contenedor);

// let parrafo1 = document.querySelector(".parrafo1");
// console.log(parrafo1);

// querySelectorAll()

/* A diferencia de querySelector(), que solo devuelve el primer elemento que coincide, querySelectorAll() nos devuelve
un listado de todos los elementos que coincidan en una NodeList en formato de array */

// let paises = document.querySelectorAll(".paises");
// console.log(paises);

// paises.forEach( pais => console.log(pais));

// let etiquetasDiv = document.querySelectorAll("div");

// console.log(etiquetasDiv);

// etiquetasDiv.forEach( div => console.log(div))

// InnerText

/* La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar
el contenido textual de algún elemento del DOM. */

// const subTitulo = document.querySelector("#subTitulo");

// console.log(subTitulo);

// subTitulo.innerText = "DOM Editado";

// InnerHtml

/* innerHTML permite definir el código html interno del elemento seleccionado.
El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde un string crear
una nueva estructura de etiquetas y contenido. */

// const contexto = document.querySelector("#contexto");

// console.log(contexto.innerHTML);

// contexto.innerHTML = "<p>Reemplazo de Hola</p>";
// console.log(contexto.innerHTML);

// // Multi linea

// contexto.innerHTML = `
// <div>
// <p>Parrafo </p>
// </div>
// `;

// console.log(contexto.innerHTML);


// ClassName

/* A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y
definir cuáles van a ser sus clases */

// const contexto = document.querySelector("#contexto");

// console.log(contexto.className);

// contexto.className = "contexto_estilo2";


// Creación de elementos

// document.createElement()

/* Para crear elementos se utiliza el método createElement(), y se debe indicar el nombre de 
etiqueta HTML que representará ese elemento. Luego debe agregarse como hijo el nodo creado con append(), 
al body o a otro nodo del documento actual. */

// // Creamos el elemento, etiqueta p
// let parrafo = document.createElement("p");

// // Agregamos un HTML interno
// parrafo.innerHTML = "<h2>Hola Mundo</h2>";

// // Añadimos el elemento en el body
// document.body.append(parrafo);

// // Añadimos el elemento creado a un nodo exitente
// const contexto = document.querySelector("#contexto");

// contexto.append(parrafo);

// Eliminar elementos del DOM

// remove()

// const contexto = document.querySelector("#contexto");
// contexto.remove()

// Creamos una lista a partir de un array

// let lista = document.querySelector("#lista");

// let personas = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];

// personas.forEach( persona => {
//   // Creamos la etiqueta li 
//   let li = document.createElement("li");
//   // Añadimos la persona en la etiqueta li
//   li.innerHTML = persona;

//   // Añadimos la etiqueta li creada como hija de la etiqueta ul
//   lista.appendChild(li);
// })

// Mostramos un listado de personas

const personas = [
  {
    nombre: "Juan",
    edad: 33,
    pais: "Argentina",
  },
  {
    nombre: "Hernan",
    edad: 23,
    pais: "Argentina",
  },
  {
    nombre: "Maria",
    edad: 22,
    pais: "Colombia",
  },
  {
    nombre: "Ana",
    edad: 38,
    pais: "Venezuela",
  },
  {
    nombre: "Ruben",
    edad: 29,
    pais: "Paraguay",
  },
];

personas.forEach( persona => {
  let contenedorPersona = document.createElement("div"); 
  contenedorPersona.innerHTML = `
  <p class="contexto_estilo">Nombre: ${persona.nombre}</p>
  <p>Edad: ${persona.edad}</p>
  <p>País: ${persona.pais}</p>
  <p>----------------------</p>
  `
  document.body.append(contenedorPersona);
})



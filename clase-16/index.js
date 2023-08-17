// Fetch

// Método GET

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then( resp => resp.json())
//   .then( data => console.log(data))

// Usar la información del servidor para mostrar en el DOM

// const postsDiv = document.querySelector("#postsDiv");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then( resp => resp.json())
//   .then( posts => {

//     posts.forEach(post => {
//         const { title, body } = post;
//         let div = document.createElement("div");
//         div.innerHTML = `
//           <h5>Título: ${title}</h5>
//           <p>${body}</p>
//           <p>------------------------------------------------------</p>
//         `
//         postsDiv.appendChild(div);
//     });
//   })
//   .catch( error => console.log(error))

// Método POST

// const postForm = document.querySelector("#postForm");
// const inputTitulo = document.querySelector("#inputTitulo");
// const textBody = document.querySelector("#textBody");

// postForm.addEventListener("submit", (e) => {
//     e.preventDefault()

//     let data = {
//       title: inputTitulo.value,
//       body: textBody.value
//     }

//     // Petición post con fetch
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//      })
//      .then( resp => resp.json())
//      .then( data => console.log(data))
//      .catch( error => console.log(error))

// })

// Rutas relativas json

// let productosArray = [
//   { nombre: "Producto 1", precio: 1500, id: 1 },
//   { nombre: "Producto 2", precio: 2500, id: 2 },
//   { nombre: "Producto 3", precio: 3500, id: 3 },
//   { nombre: "Producto 4", precio: 4500, id: 4 },
//   { nombre: "Producto 5", precio: 5500, id: 5 },
// ];

// fetch("./db/productos.json")
//   .then((resp) => resp.json())
//   .then((data) => localStorage.setItem("productos", JSON.stringify(data)));

// Async y Await

// const obtenerProductos = async() => {
//     const resp = await fetch("./db/productos.json");
//     const data = await resp.json();

//     console.log(data);
// }

// obtenerProductos()

// async function obtenerProductos2() {
//   const resp = await fetch("./db/productos.json");
//   const data = await resp.json();

//   console.log(data);
// }

// obtenerProductos2()

// Api de Rick and Morty

const personajes = document.querySelector("#personajes");

const obtenerCharacters = async () => {
  const resp = await fetch("https://rickandmortyapi.com/api/character");
  const data = await resp.json();
  console.log(data.results);
  mostrarPersonajes(data.results);
};

obtenerCharacters();

const mostrarPersonajes = (personajesApi) => {
  personajesApi.forEach((personaje) => {
    const { name, image } = personaje;
    let div = document.createElement("div");
    div.innerHTML = `
      <p>Nombre: ${name}</p>
      <img src=${image} alt="">
      `;

    personajes.appendChild(div);
  });
};

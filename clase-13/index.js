// Operador Spread

/*
Spread ( … ) es una herramienta que nos permite, como su nombre indica, desparramar un array u objeto.
En otras palabras, cambiar la forma en la que presentamos este array u objeto.
*/

// Spread de Arrays

// let nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// console.log(...nombres);

// const numeros = [15, 23, 33, 56, 21, 34, 29];
// console.log(...numeros);

// console.log(Math.max(...numeros));

// const clientes = [
//   {
//     id: 1,
//     nombre: "María",
//     edad: 25,
//     estatura: 1.65,
//   },
//   {
//     id: 2,
//     nombre: "Pedro",
//     edad: 15,
//     estatura: 1.78,
//   },
//   {
//     id: 3,
//     nombre: "Ana",
//     edad: 15,
//     estatura: 1.55,
//   },
//   {
//     id: 4,
//     nombre: "Carlos",
//     edad: 40,
//     estatura: 1.85,
//   },
//   {
//     id: 5,
//     nombre: "Luisa",
//     edad: 22,
//     estatura: 1.44,
//   },
// ];

// console.log(...clientes);

// //   let copiaNombres = [...nombres];

// //   console.log(copiaNombres);

// // Podemos copiar 2 array o más en uno solo

// const nombres1 = ["Juan", "Julieta"];
// const nombres2 = ["Carlos"];

// const todosLosNombres = [...nombres1, ...nombres2];

// console.log(todosLosNombres);

// const todosLosNombres2 = [...nombres1, ...nombres2, 1, 2, { nombre: "Ana", edad: 22 }];

// console.log(todosLosNombres2);

// // spread del array en un objeto

// const nombresObjeto = {
//     ...nombres
// }

// console.log(nombresObjeto);

// // Ejercicio de nombres
// const inputNombre = document.querySelector("#inputNombre");
// const formularioNombre = document.querySelector("#formularioNombre");
// const listaNombres = document.querySelector("#listaNombres");

// let nombres = JSON.parse(localStorage.getItem("nombres")) || [];

// const mostrarNombres = () => {
//     listaNombres.innerHTML = " ";

//     nombres.forEach( nombre => {
//         let li = document.createElement("li");
//         li.innerHTML = nombre;
//         listaNombres.appendChild(li);
//     })
// }

// mostrarNombres()

// const agregarNombre = (nombre) => {

//     nombres = [...nombres, nombre];

//     localStorage.setItem("nombres", JSON.stringify(nombres));
// }

// formularioNombre.onsubmit = (event) => {
//     event.preventDefault()

//     agregarNombre(inputNombre.value);
//     mostrarNombres();

//     formularioNombre.reset();
// }

// Spread en objetos

// const cliente = {
//     nombre: "María",
//     edad: 25,
//     estatura: 1.65,
//   };

//   console.log(cliente);

// const clienteMaria = {
//     nombre: cliente.nombre,
//     edad: cliente.edad,
//     estatura: cliente.estatura
// }

// console.log(clienteMaria);

// let clienteMariaConSpread = {
//     ...cliente
// }

// console.log(clienteMariaConSpread);

// const clienteMario = clienteMaria;

// clienteMario.nombre = "Ferran";
// clienteMaria.edad = 100

// // console.log(clienteMario);
// // console.log(clienteMaria);

// clienteMariaConSpread = {
//     ...clienteMariaConSpread,
//     edad: 45
// }

// console.log(clienteMariaConSpread);

// clienteMariaConSpread = {
//     ...clienteMariaConSpread,
//     pais: "Argentina"
// }

// console.log(clienteMariaConSpread);

// const productos = [
//     {
//         nombre: "Zapatilla",
//         precio: 22
//     },
//     {
//         nombre: "Zapato",
//         precio: 22
//     },
// ]

// let carrito = [];

// let contador = 5;
// productos.forEach( producto => {

//     let productoCarrito = {
//         ...producto,
//         cantidad: contador,
//         nombre: producto.nombre == "Zapatilla" ? "Camisa" : producto.nombre
//     }

//     carrito.push(productoCarrito);
// })

// console.log(carrito);

// Res params

/* El operador spread también puede utilizarse dentro de la declaración de una función para indicar
que queremos recibir una cantidad indeterminada de parámetros.
 */

// function arrayElementos(...elementos) {
//   // Agrupa dentro de un array los parámetros que reciba
//   console.log(elementos);
// }

// arrayElementos(1, 2, 4, 5, 32, 23, 432);
// arrayElementos("Alexia", "Luis", "Maria");
// arrayElementos("Alexia", { nombre: "Juan", edad: 22 }, [1, 2, 3]);

// const listaNombres = document.querySelector("#listaNombres");

// function mostrarNombres(...nombres) {
//   nombres.forEach((nombre) => {
//     let li = document.createElement("li");
//     li.innerHTML = nombre;
//     listaNombres.appendChild(li);
//   });
// }

// mostrarNombres("Juan", "Veronica")
// mostrarNombres("Ana", "Ferran")

// Ejercicio 2

const listaNombres = document.querySelector("#listaNombres");
const inputNombre = document.querySelector("#inputNombre");
const inputEdad = document.querySelector("#inputEdad");
const inputEstatura = document.querySelector("#inputEstatura");
const formClientes = document.querySelector("#formClientes");
const datosCliente = document.querySelector("#datosCliente");

let nuevoCliente;
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const editarNuevoCliente = (input) => {
  const { name, value } = input;
  nuevoCliente = {
    ...nuevoCliente,
    [name]: value,
  };
};

inputNombre.oninput = () => {
  editarNuevoCliente(inputNombre);
  console.log(nuevoCliente);
};

inputEdad.oninput = () => {
  editarNuevoCliente(inputEdad);
  console.log(nuevoCliente);
};

inputEstatura.oninput = () => {
  editarNuevoCliente(inputEstatura);
  console.log(nuevoCliente);
};

formClientes.onsubmit = (event) => {
  event.preventDefault();
  nuevoCliente = {
    ...nuevoCliente,
    id: Date.now().toString(36)
  }
  clientes = [...clientes, nuevoCliente];

  localStorage.setItem("clientes", JSON.stringify(clientes));
  listarClientes();
  formClientes.reset();
};

const listarClientes = () => {
  listaNombres.innerHTML = " ";
  
  let option = document.createElement("option");
  option.innerHTML = "Clientes";
  listaNombres.appendChild(option);

  clientes.forEach((cliente) => {
    let option = document.createElement("option");
    const { nombre, id } = cliente;
    option.innerHTML = nombre;
    option.value = id;

    listaNombres.appendChild(option);
  });
};

listarClientes();

listaNombres.onchange = (event) => {
  let id = event.target.value
  mostrarDatosCliente(id);
}

const mostrarDatosCliente = (id) => {
  datosCliente.innerHTML = " ";

  const clienteBuscado = clientes.find((cliente) => cliente.id === id);

  let div = document.createElement("div");
  
  if (!clienteBuscado) return (div.innerHTML = " ");

  const { nombre, edad, estatura } = clienteBuscado;

  div.innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Edad: ${edad}</p>
    <p>Estatura: ${estatura}</p>
    `;

  let btnEliminar = document.createElement("button");
  btnEliminar.innerHTML = "Eliminar";
  div.appendChild(btnEliminar);

  btnEliminar.onclick = () => eliminarCliente(id);
  datosCliente.appendChild(div);
}

const eliminarCliente = (id) => {
  clientes = clientes.filter((cliente) => cliente.id !== id);
  localStorage.setItem("clientes", JSON.stringify(clientes));
  mostrarDatosCliente(id);
  listarClientes();
};



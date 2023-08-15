// setTimeOut

/* 
Es una función que permite realizar acciones asincrónicamente . La función recibe dos parámetros:
Una función de callback y un valor numérico que representa milisegundos
 */

// function mensaje() {
//     console.log("Primer proceso asincrónico");
// }

// setTimeout(mensaje, 3000);

// setTimeout(()  => {
//     console.log("Segundo proceso asincrónico");
// }, 5000)

// console.log("Inicio del proceso"); // proceso sincrónico

// setTimeout(()=> { // proceso asincrónico
//     console.log("Mitad del proceso");
// }, 0);

// console.log("Fin del proceso"); // proceso sincrónico

// CALL STACK (PILA)

/* 
Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded,
 o de un único hilo, lo que significa que tiene un único stack o pila de ejecución. De ahí que la ejecución es implícitamente 
 sincrónica.
*/

// console.log("Inicio del proceso");

// function dos() {
//     console.log("Dos");
//   }

//   function uno() {
//     console.log("Uno");

//     dos()

//     console.log("Tres");
//   }

//   uno()

//   console.log("Fin del proceso");

// Event loop funciones asincrónicas con EventLoop

// console.log("Inicio del proceso");

// function dos() {
//   setTimeout( function() {
//     console.log("Dos");
//   }, 0 )

// }

// function uno() {
//   setTimeout( function() {
//     console.log("Uno");
//   }, 0 )

//   dos()

//   console.log("Tres");
// }

// uno()

// console.log("Fin del proceso");

// setInterval

// let contador = 0;
// setInterval(() => {
//     console.log(contador++);
//   }, 1000)

// Promesas

// let mensajeAprobado = "Aprobado";
// let mensajeDesaprobado = "Desaprobado";
// function mensajeDeError() {
//     console.log("Error, promesa rechazada");
// }

// const promesa = new Promise((resolve, reject) => {
//   let transferencia = false;

//   if (transferencia) {
//     resolve(mensajeAprobado);
//   } else {
//     reject(mensajeDeError);
//   }
// });

// // console.log(promesa);

// promesa
//     .then( respuesta => console.log(`El tutor me puso la nota ${respuesta}`) )
//     .catch( respuesta => respuesta())

const usuarios = [
    {
      id: 1,
      nombre: "Juan",
    },
    {
      id: 2,
      nombre: "Maria",
    },
    {
      id: 3,
      nombre: "Pedro",
    },
  ];

// const buscarUsuario = (id) => {
//   // Buscamos el usuario con el id que recibimos por parámetro
//   const usuarioBuscado = usuarios.find( usuario => usuario.id === id );

//     return new Promise( (resolve, reject) => {
//         if(usuarioBuscado) {
//             resolve(usuarioBuscado);
//         } else {
//             reject(`No se encontró el usuario con el id ${id}`)
//         }
//     } )
// }

// buscarUsuario(1)
//     .then( resp => console.log(resp) )
//     .catch( error => console.log(error))

// Simulamos una petición cargando en el html

const buscarUsuarios = () => {
  
      return new Promise( (resolve, reject) => {

        let estadoServidor = true; 

          if(estadoServidor) {
              setTimeout( () => {
                resolve(usuarios)
              }, 3000)
          } else {
              reject("Error 500 servidor no encontrado")
          }
      } )
  }
  

let estado = document.querySelector("#estado");

estado.innerHTML = "Cargando usuarios ...";

function mostrarUsuarios(usuarios) {
    estado.innerHTML = " ";

    usuarios.forEach( usuario => {
        let div = document.createElement("div");
        div.innerHTML = `
          <p>Nombre: ${usuario.nombre} </p> 
          `;
        document.body.append(div);
    })
} 



buscarUsuarios() 
    .then( resp => mostrarUsuarios(resp))
    .catch( error => console.log(error))
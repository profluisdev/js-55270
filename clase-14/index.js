// SweetAlert 2

// https://sweetalert2.github.io/

// const btn = document.querySelector("#myBtn");

// btn.addEventListener("click", () => {
//   Swal.fire({
//     title: "Hola",
//     text: "Haz clickeado el botón!",
//     // html: `<h3>${subtitulo}</h3>`,
//     imageUrl: "url de la imagen",
//     icon: "success",
//     timer: 2000,
//     confirmButtonText: "Aceptar",
//   });
  
// })

// let subtitulo = "Holis";

// const btnEliminar = document.querySelector("#btnEliminar");
// const btnComprar = document.querySelector("#btnComprar");
// const btnAgregar = document.querySelector("#btnAgregar");
 
// const numeroTicket = 24314321432432;
// btnComprar.addEventListener("click", () => {
//   Swal.fire({
//     title: "Muchas Gracias por su compra",
//     icon: "success",
//     timerProgressBar: 1500,
//     confirmButtonText: "Aceptar",
//     timer: 2500,
//     text:`$Ticket N°: ${numeroTicket}`,
//     showConfirmButton: false,
//   });

// })

// let producto = {
//   nombre: "Cerveza",
//   precio: 10,
//   stock: 10,
// };

// let cantidad = 6;

// btnAgregar.addEventListener("click", () => {
//   let { nombre, precio, stock } = producto;

//   if (cantidad > stock) {
//     Swal.fire({
//       title: "No hay suficiente stock",
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       timer: 2500,
//     });

//   } else {
//     stock = stock - cantidad;
//     Swal.fire({
//       title: "Muchas Gracias por su compra",
//       icon: "success",
//       html: `
//     <h4>${cantidad} productos ${nombre} agregado al carrito</h4>
//     <p>Quedan ${stock} en stock</p>`,
//       confirmButtonText: "Aceptar",
//     });
//   }
// })


// let usuario = {
//   nombre: "Jose",
//   edad: 30,
// };


// btnEliminar.addEventListener("click", () => {
  
//   Swal.fire({
//     title: "Eliminar",
//     titleText: "¿Estás seguro de que deseas eliminar al usuario?",
//     icon: "question",
//     html: `
//     <p>Nombre: ${usuario.nombre}</p>
//     <p>Edad: ${usuario.edad}</p>
//     `,
//     confirmButtonText: "Aceptar",
//     cancelButtonText: "Cancelar",
//     showCancelButton: true

//   }).then(respuesta => {
//     console.log(respuesta.isConfirmed);
     
//     if(respuesta.isConfirmed) {
//       Swal.fire({
//         title: "Usuario eliminado",
//         icon: "success",
//         confirmButtonText: "Aceptar",
//       });
      
//      } 
//   })

// })

// Toastify

// https://apvarun.github.io/toastify-js/

// const btn = document.querySelector("#myBtn");

// function mensaje() {
//   Toastify({
//     text: "La otra",
//     className: "info",
//     // duration: 3000,
//     // gravity: "bottom",
//     // position: "left",
//     // destination: "./pages/carrito.html",
//     onClick: mensaje,
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     }
//   }).showToast();
// }

// btn.onclick = () => {
//   Toastify({
//     text: "Hicimos click",
//     className: "info",
//     // duration: 3000,
//     // gravity: "bottom",
//     // position: "left",
//     // destination: "./pages/carrito.html",
//     onClick: mensaje,
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     }
//   }).showToast();
// }

// Luxon
// https://moment.github.io/luxon/#/?id=luxon


const DateTime = luxon.DateTime;

console.log(DateTime.now());
console.log(DateTime.now().toString());
console.log(DateTime.now().year); // Año
console.log(DateTime.now().month); // Mes
console.log(DateTime.now().day); // Día
console.log(DateTime.now().second); // Segundo
console.log(DateTime.now().minute); // Minuto
console.log(DateTime.now().hour); // Hora
console.log(DateTime.now().weekday); // Día de la semana
console.log(DateTime.now().zoneName); // Zona horaria
console.log(DateTime.now().daysInMonth); // Días que tiene el mes

// Formateo de fecha
// https://moment.github.io/luxon/#/formatting

console.log(DateTime.now().toLocaleString()); // Nos formatea la fecha según nuestra zona horaria
console.log(DateTime.now().toLocaleString(DateTime.DATE_MED)); // Fecha abreviada
console.log(DateTime.now().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)); // Fecha abreviada con día de la semana abreviado
console.log(DateTime.now().toLocaleString(DateTime.DATE_FULL)); // Fecha completa
console.log(DateTime.now().toLocaleString(DateTime.DATE_HUGE)); // Fecha completa con día de la semana completo
console.log(DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)); // Hora y minutos

// Definir los evento

// Opción 1

// let btnPrincipal = document.querySelector("#btnPrincipal");

// // const respuestaClick = () => console.log("Respuesta evento click");

// btnPrincipal.addEventListener("click", () => console.log("Respuesta evento click"));

// Opción 2

// let btnPrincipal = document.querySelector("#btnPrincipal");

// btnPrincipal.onclick = () => console.log("Click on con onclick");

// Opción 3

// const evento = () => console.log("Evento llamado desde el HTML");

// Eventos de Mouse
/* Se producen por la interacción del usuario con el mouse. */

const box = document.querySelector("#box");

// mousemove
// El movimiento del mouse sobre el elemento activa el evento.

// box.onmousemove = () => console.log("Moviendo el mouse sobre box");

// mousedown
// Se oprime el botón del ratón sobre un elemento.
// box.onmousedown = () => {
//   console.log("Evento mousedown");
// }

// mouseup
// Se suelta el botón del ratón sobre un elemento.
// box.onmouseup = () => {
//   console.log("Evento mouseup");
// }

// mouseout
// El puntero del mouse se mueve sale del elemento
// box.onmouseout = () => {
//   console.log("Evento mouseout");
// }

// click
// Cuando se hace click con el botón izquierdo el mouse
// box.onclick = () => {
//   console.log("Evento click");
// }

// Eventos de Teclado
// let nombre = document.querySelector("#nombre");
// let edad = document.querySelector("#edad");

// keyup: Cuando se suelta una tecla.
// nombre.onkeyup = () => console.log("KeyUp");

//keydown: Cuando se presiona.
// edad.onkeydown = () => console.log("KeyDown");

// Eventos de change
/* El evento change se activa cuando se detecta un cambio en el valor del elemento. 
 Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.
 */
// nombre.onchange = () => console.log("Valor nombre");
// edad.onchange = () => console.log("Valor edad");

// Eventos de input
/* Si queremos ejecutar una función cada vez que se tipea sobre el campo, 
conviene trabajar directamente con el evento input. */

// nombre.oninput = () => {
//   console.log(nombre.value);
// }

// Eventos de submit
/* El evento submit se activa cuando el formulario es enviado. 
Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o 
bien para abortar el envío y procesarlo con JavaScript.*/


let formulario = document.querySelector("#formulario");

formulario.onsubmit = (e) => {
  e.preventDefault()
  console.log(e.target);
  console.log(e.target.children[0]);
  console.log(e.target.children[1]);
  console.log(e.target.children[2]);
  console.log(e.target.children[3]);
}
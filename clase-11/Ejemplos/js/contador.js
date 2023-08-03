// Obtener referencia al elemento del contador
const contadorElemento = document.querySelector("#contador");

// Obtener referencia a los botones
const sumarBoton = document.querySelector("#sumar");
const restarBoton = document.querySelector("#restar");

// Variable para almacenar el valor del contador
let contador = 0;

// Deshabilitamos el botón de restar para que no pueda poner números negativos
restarBoton.disabled = true;

const actualizarContador = () => {
  // Mostramos el el html el valor del contador modificado
  contadorElemento.innerHTML = contador;

  // Verificamos si el contador sigue en 0 sino lo habilitamos para que pueda restar
  if (contador === 0) {
    restarBoton.disabled = true;
  } else {
    restarBoton.disabled = false;
  }
};

sumarBoton.onclick = () => {
  // Sumamos el contador de 1 en 1 y actualizamos
  contador++;
  actualizarContador();
};

restarBoton.onclick = () => {
  // Restamos el contador de 1 en 1
  contador--;
  actualizarContador();
};



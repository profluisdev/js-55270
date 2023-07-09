// Juego para adivinar un número

// Declaramos la variable numeroUsuario sin asignarle ningún valor
let numeroUsuario;

// Generar un número aleatorio entre 1 y 10
let numeroAleatorio = Math.round(Math.random() * 10 + 1); // Genera un número aleatorio entre 1 y 10
alert(numeroAleatorio);

// Mensaje de bienvenida y reglas del juego
alert("Bienvenido al juego de adivinar un número, tienes 3 intentos para adivinar el número entre 1 y 10");

// Pedimos el nombre del usuario
let nombreUsuario = prompt("¿Cual es tu nombre?");

// Número de intentos
let intentos = 0;

// Funciones

function pedirNumeroUsuario() {
  // Pedir el número al usuario
  numeroUsuario = parseInt(prompt("Introduce el un número del 1 al 10"));

  // Cada ves que se pida un número vamos a incrementar los intentos
  intentos++;
  
  if (3 - intentos > 0 && numeroUsuario !== numeroAleatorio) {
    alert("Te quedan " + (3 - intentos) + " intentos");
  }
}

// Función que verifica si el número introducido es correcto
const verificarNumero = (numeroIngresado) => {
  if (numeroIngresado < numeroAleatorio) {
    alert("El número es mayor");
  } else if (numeroIngresado > numeroAleatorio) {
    alert("El número es menor");
  } else {
    alert("Felicidades " + nombreUsuario + " has acertado el número en " + intentos + " intentos");
  }
};

// Función que verifica el número de intento
const verificarIntentos = () => {
  if (intentos > 3) {
    alert(
      "Lo siento " +
        nombreUsuario +
        " has perdido no te quedan más intentos, en número a adivinar era " +
        numeroAleatorio
    );
  }
};

// Bucles

while (numeroUsuario !== numeroAleatorio && intentos < 3) {
  pedirNumeroUsuario();
  verificarNumero(numeroUsuario);
  verificarIntentos();
}

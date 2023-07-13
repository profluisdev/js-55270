// Simulador de empleados

// Declaramos un array vacío de empleados
let empleados = [];

// Hacemos una clase empleado
class Empleado {
  constructor(nombre, edad, puesto) {
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
  }
}

// Función para crear y agregar empleados al array
const agregarEmpleado = () => {
    // Pedimos los datos del empleado
  let nombre = prompt("Ingrese el nombre del empleado");
  let puesto = prompt("Ingrese el puesto del empleado");
  let edad = parseInt(prompt("Ingrese la edad del empleado"));

    // Instanciamos la clase Empleado y almacenamos en la variable empleado con los datos ingresados por el usuario 
  let empleado = new Empleado(nombre, edad, puesto);

  // Agregamos el empleado en el array empelados 
  empleados.push(empleado);

  // Llamamos la función para que nos muestre la lista de empleados actualizada por consola
  mostrarEmpleados(empleados);
};

// Función para eliminar empleados 
const eliminarEmpleado = () => {
    // Le pedimos al cliente el nombre del empleado  que desea eliminar 
  let nombreEmpleado = prompt("Ingrese el nombre del empleado a eliminar");
    // Opcional: Se puede hacer una función pra verificar si el empleado ingresado existe

  let indice = 0; // Iniciamos los indices en 0 pra verificar la posición del objeto dentro del array
  
  for (let empleado of empleados) { // Hacemos un ciclo for dentro del array de empleados

    // La variable existe retorna un booleano si se cumple la condición planteada
    let existe = empleado.nombre === nombreEmpleado;

    if (existe) { // Si existe tiene el valor true 
      empleados.splice(indice, 1); // indicamos en que posición y cuantos elementos del array vamos a eliminar
    }
    indice++; // si no se cumple la condición anterior el indice aumenta su valor en 1 
  }

  // Llamamos la función para que nos muestre la lista de empleados actualizada por consola
  mostrarEmpleados(empleados);
};

// Función que recibe el array de empleados por parámetros y los muestra en un listado de la consola
// Se opto por poner en una función aparte ya que tanto en la función de eliminar y agregar empleados necesitamos mostrar
// el listado de empleados, al ser una tarea repetitiva lo más optimo es ponerla en una función y llamara
const mostrarEmpleados = (empleados) => {
  console.log("Empleados registrados");
  for (let empleado of empleados) {
    console.log(empleado); // Mostramos de manera individual los objetos por consola
  }
};

let encendido = true; // indicamos si la aplicación esta encendida

// Ciclo while que maneja la aplicación
while (encendido) {
  alert("Menú principal:\n 1 - Agregar un empleado\n 2 - Eliminar un empleado\n 3 - Apagar");
  let opcion = parseInt(prompt("Ingrese una opción"));

  switch (opcion) {
    case 1:
      agregarEmpleado();

      break;
    case 2:
      eliminarEmpleado();
      break;
    case 3:
      encendido = false;
      break;
    default:
      alert("Inserte una opción correcta");
  }
}

alert("Gracias vuelva pronto");
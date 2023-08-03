// Elementos del Html
const nombre = document.querySelector("#nombre");
const puesto = document.querySelector("#puesto");
const edad = document.querySelector("#edad");
const form = document.querySelector("#form");
const contenedorEmpleados = document.querySelector("#contenedorEmpleados");
const buscar = document.querySelector("#buscar");
const btn = document.querySelector("#btn");

let modoEdicion = false;
let empleadoEditar;

// Creamos una clase que sirve de modelo de empleado
class Empleado {
  constructor(nombre, puesto, edad) {
    this.id = Date.now().toString(36); // Generamos un id único
    this.nombre = nombre;
    this.puesto = puesto;
    this.edad = edad;
    this.sueldo = 0;
  }

  pagarSueldo(monto) {
    this.sueldo += monto;
  }
}

let empleados = [new Empleado("Juan Perez", "Sr", 44)];

form.onsubmit = (event) => {
  // Prevenimos el comportamiento por defecto que tienen los formularios de recargarse la página
  event.preventDefault();

  if (modoEdicion) {
    let confirmar = confirm("¿Estas seguro que deseas editar el empleado?");
    if (confirmar) {
      let index = empleados.findIndex((empleado) => empleado.id === empleadoEditar.id);
      empleados[index].nombre = nombre.value;
      empleados[index].puesto = puesto.value;
      empleados[index].edad = edad.value;

      alert("Edición exitosa");
    } else {
      alert("Edición cancelada");
    }
    edicion = false;
    btn.value = "Agregar";
    mostrarEmpleados(empleados);
  } else {
    empleados.push(new Empleado(nombre.value, puesto.value, edad.value));
    mostrarEmpleados(empleados);
  }
  console.log(empleados);
  // Reseteamos los valores el formulario a 0
  form.reset();
};

const mostrarEmpleados = (empleados) => {
  // Borramos el html para poner el array actualizado
  contenedorEmpleados.innerHTML = "";

  empleados.forEach((empleado, index) => {

    const { nombre, puesto, edad, sueldo } = empleado;
    
    let empleadosContenedor = document.createElement("div");
    empleadosContenedor.classList.add( "mt-2","border","border-2","p-3","shadow","shadow-md");
    empleadosContenedor.innerHTML = `
      <p>Nombre: ${nombre}</p>
      <p>Puesto: ${puesto}</p>
      <p>Edad: ${edad}</p>
      <p>Sueldo: $${sueldo}</p>
    `;

    // Agregamos el botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.innerHTML = "Eliminar";
    empleadosContenedor.appendChild(btnEliminar);

    btnEliminar.onclick = () => {
      let confirmar = confirm("¿Estas seguro que deseas eliminar el empleado?");
      if (confirmar) {
        eliminarEmpleado(index);
        alert("Eliminación Exitosa");
      } else {
        alert("Eliminación cancelada");
      }
    };

    // Agregamos el botón editar
    let btnEditar = document.createElement("button");
    btnEditar.classList.add("btn", "btn-info", "ms-2");
    btnEditar.innerHTML = "Editar";
    empleadosContenedor.appendChild(btnEditar);

    btnEditar.onclick = () => editarEmpleado(index);

    // Agregamos el botón de pagar
    let btnPagar = document.createElement("button");
    btnPagar.classList.add("btn", "btn-success", "ms-2");
    btnPagar.innerHTML = "Pagar";
    empleadosContenedor.appendChild(btnPagar);

    btnPagar.onclick = () => {
      let pagoInput = document.createElement("input");
      pagoInput.type = "number";
      pagoInput.placeholder = "Ingrese el monto a pagar y presione pagar";
      pagoInput.classList.add("form-control", "mt-2");
      empleadosContenedor.appendChild(pagoInput);

      btnPagar.onclick = () => depositarSueldoEmpleado(index, pagoInput);
    };

    contenedorEmpleados.appendChild(empleadosContenedor);
  });
};

mostrarEmpleados(empleados);

// Función de eliminar empleado
const eliminarEmpleado = (index) => {
  empleados = empleados.filter((empleado) => empleado.id !== empleados[index].id);
  mostrarEmpleados(empleados);
};

// Función de editar empleado
const editarEmpleado = (index) => {
  empleadoEditar = empleados[index];
  nombre.value = empleadoEditar.nombre;
  puesto.value = empleadoEditar.puesto;
  edad.value = empleadoEditar.edad;

  modoEdicion = true;
  btn.value = "Editar";
};

// Función para depositar sueldo
const depositarSueldoEmpleado = (index, pagoInput) => {
  let confirmar = confirm(
    `¿Está seguro que desea depositar los $${pagoInput.value} al empleado?`
  );

  if (confirmar) {
    empleados[index].pagarSueldo(parseFloat(pagoInput.value));
    mostrarEmpleados(empleados);
  } else {
    alert("Pago Cancelado");
    mostrarEmpleados(empleados);
  }
};

// Buscar y filtrar los empleados por nombre
buscar.oninput = (event) => {
  if (event.target.value === " ") {
    mostrarEmpleados(empleados);
  } else {
    let empleadosFiltrados = empleados.filter((empleado) =>
      empleado.nombre.toLowerCase().includes(event.target.value)
    );
    mostrarEmpleados(empleadosFiltrados);
  }
};

let formTarea = document.querySelector("#formTarea");
let inputTarea = document.querySelector("#inputTarea");
let tareasContenedor = document.querySelector("#tareasContenedor");
const DateTime = luxon.DateTime;

let tareas;

if (localStorage.getItem("tareas") == null) {
  tareas = [];
} else {
  tareas = JSON.parse(localStorage.getItem("tareas"));
}

// Agregamos una tarea

formTarea.onsubmit = (event) => {
  event.preventDefault();
  let nuevaTarea = {
    id: Date.now().toString(36),
    tarea: inputTarea.value.trim(),
    estado: false,
    fecha: DateTime.now().toLocaleString(),
  };

  // Guardar en el array
  tareas.push(nuevaTarea);

  // Guardar en localStorage
  localStorage.setItem("tareas", JSON.stringify(tareas));

  console.log(tareas);
  mostrarTareas();
  formTarea.reset();
};

const mostrarTareas = () => {
  tareasContenedor.innerHTML = " ";

  tareas.forEach((tarea, index) => {

    const {tarea: descripcion, fecha} = tarea;

    let tareaBox = document.createElement("div");
    tareaBox.classList.add(
      "d-flex",
      "mt-3",
      "justify-content-between",
      "align-items-center"
    );
    tareasContenedor.appendChild(tareaBox);

    let tareaTexto = document.createElement("p");
    tareaTexto.classList.add("align-self-end");
    if (tareas[index].estado === true) {
      tareaTexto.classList.add("text-decoration-line-through");
    }
    tareaTexto.innerHTML = `${fecha} - ${descripcion}`;
    tareaBox.appendChild(tareaTexto);

    let div = document.createElement("div");
    tareaBox.appendChild(div);

    // Boton eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger", "ms-2");
    btnEliminar.innerHTML = "Eliminar";
    div.appendChild(btnEliminar);

    btnEliminar.onclick = () => {
      Swal.fire({
        title: "Eliminar",
        titleText: `¿Estás seguro de que deseas eliminar la tarea "${descripcion}"?`,
        icon: "question",
        confirmButtonText: "Aceptar",
        showCancelButton: true,
      }).then((resp) => {
        if (resp.isConfirmed) {
          eliminaTarea(index);
          Swal.fire({
            title: "Tarea Eliminada",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        }
      });

    };

    // Boton realizado
    let btnRealizado = document.createElement("button");
    btnRealizado.classList.add("btn", "btn-success", "ms-2");
    btnRealizado.innerHTML = "Realizado";
    div.appendChild(btnRealizado);

    btnRealizado.onclick = () => {

      Toastify({
        text: "Check",
        duration: 3000,
        gravity: "top",
        position: "right",
      }).showToast();


      if (tareas[index].estado === false) {
        tareas[index].estado = true;
        tareaTexto.classList.add("text-decoration-line-through");
        localStorage.setItem("tareas", JSON.stringify(tareas));
      } else if (tareas[index].estado === true) {
        tareas[index].estado = false;
        tareaTexto.classList.remove("text-decoration-line-through");
        localStorage.setItem("tareas", JSON.stringify(tareas));
      }
    };
  });
};


const eliminaTarea = (index) => {
  tareas = tareas.filter((tarea) => tarea.id !== tareas[index].id);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
};

mostrarTareas();

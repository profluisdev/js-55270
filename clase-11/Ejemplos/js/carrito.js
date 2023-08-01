const carritoElemento = document.querySelector("#carrito");
const productosElemento = document.querySelector("#productos");

let productos = [
  {
    nombre: "Remera",
    precio: 200,
    stock: 10,
  },
  {
    nombre: "Pantalon",
    precio: 500,
    stock: 23,
  },
  {
    nombre: "Camisa",
    precio: 300,
    stock: 5,
  },
];

let carrito = [];



const mostrarProductos = () => {
    productosElemento.innerHTML = " ";
    productos.forEach((producto, index) => {
        let productoBox = document.createElement("div");
        productoBox.innerHTML = `
          <p>Nombre:${producto.nombre}</p>
          <p>Precio: ${producto.precio}</p> 
          <p>Stock: ${producto.stock}</p> 
          `;
        productosElemento.appendChild(productoBox);
      
        let btnAgregar = document.createElement("button");
        btnAgregar.innerHTML = "Agregar";
        productoBox.appendChild(btnAgregar);
        
        btnAgregar.onclick = () => agregarProducto(index);
      });
}

// A modo de ejemplo de como pueden utilizar variables de otro archivo js
// Recuerden que para utilizar las variables de contador.js debe estar indexado en el html antes que el archivo actual
const agregarProducto = (index) => {
// Agregamos la cantidad del contador
productos[index].cantidad =  contador; // la variable contador la toma del archivo contador.js

// Verificamos que la cantidad deseada no supere el stock que tenemos
if(contador > productos[index].stock) {
    return alert(`No hay stock suficiente el máximo de productos es ${productos[index].stock}`)
}

// Agregamos el producto al carrito con su cantidad tomada del contador general, ustedes deberían hacer un contador
// individual para cada producto, ya sea en las tarjetas de productos o en el carrito
  carrito.push(productos[index]);

  // Descontamos el stock del producto
  productos[index].stock -= contador;

  // Ponemos el contador en 0 y lo actualizamos
  contador = 0;
  actualizarContador(); // la función actualizar contador la usamos del archivo contador.js

  // Mostramos los productos y el carrito actualizado
  mostrarProductos();
  mostrarCarrito();
};

const mostrarCarrito = () => {
    
  carritoElemento.innerHTML = " ";

  carrito.forEach((producto) => {
    let productoBox = document.createElement("div");
    productoBox.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio: ${producto.precio}</p> 
    <p>Cantidad: ${producto.cantidad}</p> 
    <p>Subtotal: ${producto.precio * producto.cantidad}</p> 
    `;
    carritoElemento.appendChild(productoBox);
  });
};

mostrarProductos();
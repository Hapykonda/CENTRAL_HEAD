// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        carrito.push({ nombre: nombreProducto, precio: precioProducto, cantidad: 1 });
    }

    // Actualizar la visualización del carrito
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-car
::contentReference[oaicite:0]{index=0}
 

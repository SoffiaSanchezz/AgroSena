// Obtener productos del localStorage o inicializar un arreglo vacío
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

// Referencias a los elementos del DOM
const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const botonComprar = document.querySelector(".carrito-acciones-comprar");

// Función para cargar los productos en el carrito
function cargarProductosCarrito() {
    if (productosEnCarrito.length > 0) {
        contenedorCarritoVacio.style.display = 'none';
        contenedorCarritoProductos.style.display = 'block';
        contenedorCarritoAcciones.style.display = 'flex';
        contenedorCarritoComprado.style.display = 'none';

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML = `
                <img src="${producto.Image}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <h3 class="titulo">${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small class="titulo">Cantidad</small>
                    <p class="texto">${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <p class="titulo">Precio</p>
                    <p class="texto">$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <p class="titulo">Subtotal</p>
                    <p class="texto-bold">$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="fas fa-trash-alt"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });

        actualizarBotonesEliminar();
        actualizarTotal();
    } else {
        contenedorCarritoVacio.style.display = 'block';
        contenedorCarritoProductos.style.display = 'none';
        contenedorCarritoAcciones.style.display = 'none';
        contenedorCarritoComprado.style.display = 'none';
    }
}

// Función para actualizar los botones de eliminar
function actualizarBotonesEliminar() {
    let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Función para vaciar el carrito
function vaciarCarrito() {
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.length} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito = [];
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
    });
}

// Función para actualizar el total del carrito
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    document.querySelector('#total').innerText = `$${totalCalculado}`;
}

// Función para procesar la compra
function comprarCarrito() {
    productosEnCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.style.display = 'none';
    contenedorCarritoProductos.style.display = 'none';
    contenedorCarritoAcciones.style.display = 'none';
    contenedorCarritoComprado.style.display = 'block';
}

// Event listeners
botonVaciar.addEventListener("click", vaciarCarrito);
botonComprar.addEventListener("click", comprarCarrito);

// Cargar los productos al iniciar
cargarProductosCarrito();

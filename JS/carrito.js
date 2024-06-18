const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');

if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');
    // contenedorCarritoComprado.classList.add('disabled');

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
} else {
    contenedorCarritoVacio.classList.remove('disabled');
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
    contenedorCarritoComprado.classList.add('disabled');
}

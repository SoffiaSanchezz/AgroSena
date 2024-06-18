const productos = [
    {
        id: 'Tomates',
        titulo: 'Tomates',
        Image: "../img/tomate.jpg",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: "Tomates al horno"
        },
        precio: 1000
    },
    {
        id: 'Yogurt',
        titulo: 'Yogurt',
        Image: "../img/yogurt.jpg",
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 1000
    },
    {
        id: 'Miel',
        titulo: 'Miel',
        Image: "../img/miel.avif",
        categorias: {
            nombre: "Otros",
            id: 'Otros'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'Acelga',
        titulo: 'Acelga',
        Image: "../img/acelga.jpg",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'Astromelia',
        titulo: 'Astromelia',
        Image: "../img/astromelias.jpg",
        categorias: {
            nombre: "Otros",
            id: 'Otros'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'Espinaca',
        titulo: 'Espinaca',
        Image: "../img/espinaca.jpg",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'Lechuga',
        titulo: 'Lechuga',
        Image: "../img/lechuga.webp",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'Zanahoria',
        titulo: 'Zanahoria',
        Image: "../img/zanahoria.webp",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'Zuchini',
        titulo: 'Zuchini',
        Image: "../img/Zuchini.jpeg",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'QuesoCosteño',
        titulo: 'Queso Costeño',
        Image: "../img/quesoCosteño.webp",
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
    {
        id: 'QuesoPaipa',
        titulo: 'Queso Paipa',
        Image: "../img/quesoPaipa.jpg",
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        masInformacion: {
            info: "Productos Frescos",
            receta: ""
        },
        precio: 5000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos .row");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector('#numerito');

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-6", "mb-3");  // Clases Bootstrap para el diseño
        div.innerHTML = `
            <div class="producto">
                <img src="${producto.Image}" alt="${producto.titulo}" class="producto-img">
                <div class="producto-texto producto-detalles">
                    <h2 class="producto-titulo titulo">${producto.titulo}</h2>
                    <h3 class="precio producto-precio texto">$${producto.precio}</h3>
                    <button class="ver-detalles" data-bs-toggle="modal" data-bs-target="#modalMasDetalles" data-producto-id="${producto.id}">
                        Ver detalles
                    </button>
                    <button class="producto-agregar" id="${producto.id}">
                        <i class="fs-6 fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>`;

        contenedorProductos.appendChild(div);
    });

    actualizarBotonesAgregar();
    actualizarBotonesMasDetalles();
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function actualizarBotonesMasDetalles() {
    const botonesMasDetalles = document.querySelectorAll('[data-bs-toggle="modal"]');
    botonesMasDetalles.forEach(boton => {
        boton.addEventListener('click', mostrarMasDetalles);
    });
}

function mostrarMasDetalles(event) {
    const productoId = event.currentTarget.getAttribute('data-producto-id');
    const producto = productos.find(prod => prod.id === productoId);
    const masInformacionDiv = document.querySelector('#masInformacion');

    masInformacionDiv.innerHTML = `
        <p><strong>Información:</strong> ${producto.masInformacion.info}</p>
        <p><strong>Receta:</strong> ${producto.masInformacion.receta}</p>
    `;
}

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== "Todos") {
            const productosBoton = productos.filter(producto => producto.categorias.id === e.currentTarget.id);
            if (productosBoton.length === 0) {
                console.log('No se encontraron productos para esta categoría');
            }
            tituloPrincipal.innerText = e.currentTarget.innerText;
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

// Cargar productos inicialmente
cargarProductos(productos);

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Buscar el producto en el array productos
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    if (productoSeleccionado) {
        // Verificar si el producto ya está en el carrito
        const enCarrito = productosEnCarrito.find(item => item.id === idProducto);

        if (enCarrito) {
            // Incrementar la cantidad si el producto ya está en el carrito
            enCarrito.cantidad++;
        } else {
            // Agregar el producto al carrito con cantidad inicial 1
            const productoAgregado = { ...productoSeleccionado, cantidad: 1 };
            productosEnCarrito.push(productoAgregado);
        }

        // Actualizar visualmente el contador del carrito
        actualizarNumerito();

        // Guardar en localStorage
        localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
    } else {
        console.error(`El producto con id ${idProducto} no se encontró en la lista de productos.`);
    }
}

// Función para actualizar el contador del carrito (numerito)
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.textContent = nuevoNumerito;
}

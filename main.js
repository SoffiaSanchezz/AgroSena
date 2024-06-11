const productos = [
    {
        id: 'Tomates',
        titulo: 'Tomates',
        Image: "", 
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        precio: 1000
    },
    {
        id: 'Yogurt',
        titulo: 'Yogurt',
        Image: "./img/yogurt.jpg", 
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        precio: 1000
    },
    {
        id: 'Miel',
        titulo: 'Miel',
        Image: "./img/miel.avif",
        categorias: {
            nombre: "Otros",
            id: 'Otros'
        },
        precio: 5000
    },
    {
        id: 'Acelga',
        titulo: 'Acelga',
        Image: "./img/acelga.jpg",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        precio: 5000
    },
    {
        id: 'Astromelia',
        titulo: 'Astromelia',
        Image: "./img/astromelias.jpg",
        categorias: {
            nombre: "Otros",
            id: 'Otros'
        },
        precio: 5000
    },
    {
        id: 'Espinaca',
        titulo: 'Espinaca',
        Image: "./img/espinaca.jpg",
        categorias: {
            nombre: "Verduras",
            id: 'Otros'
        },
        precio: 5000
    },
    {
        id: 'Lechuga',
        titulo: 'Lechuga',
        Image: "./img/lechuga.webp",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        precio: 5000
    },
    {
        id: 'QuesoCosteño',
        titulo: 'Queso Costeño',
        Image: "./img/quesoCosteño.webp",
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        precio: 5000
    },
    {
        id: 'QuesoPaipa',
        titulo: 'Queso Paipa',
        Image: "./img/quesoPaipa.jpg",
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        precio: 5000
    },
    {
        id: 'Zanahoria',
        titulo: 'Zanahoria',
        Image: "./img/zanahoria.webp",
        categorias: {
            nombre: "Verduras",
            id: 'Veruras'
        },
        precio: 5000
    },
    {
        id: 'Zuchini',
        titulo: 'Zuchini',
        Image: "./img/Zuchini.jpeg",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        precio: 5000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos .row");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector('#numerito');


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
                    <button class="producto-agregar" id="${producto.id}">
                        <i class="fs-6 fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>`;
        
        contenedorProductos.appendChild(div);
    });
    actualizarBotonesAgregar();
    // console.log(botonesAgregar);
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const productosBoton = productos.filter(producto => producto.categorias.id === e.currentTarget.id);

        if (productosBoton.length === 0) {
            console.log('No se encontraron productos para esta categoría');
        }

        cargarProductos(productosBoton);

        if (e.currentTarget.id != "Todos") {
            const productoCategoria = productos.find(producto => producto.categorias.id === e.currentTarget.id)
            console.log(productoCategoria)
            tituloPrincipal.innerText = productoCategoria.categorias.nombre
            const productosBoton = productos.filter(producto => producto.categorias.id === e.currentTarget.id);
        } else {
            tituloPrincipal.innerText = "todos los productos "
            cargarProductos(productos)
        }
    });
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton=>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}

const productosEnCarrito = [];
function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some((producto) => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    // console.log(productosEnCarrito)
    actualizarNumerito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, productos) => acc + productos.cantidad, 0);
    numerito.innerHTML = nuevoNumerito;
}



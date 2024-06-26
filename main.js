// Array de productos (puede estar en productos.html o en index.html, dependiendo del contexto)
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
            nombre: "Ensalada Caprese",
            Image: "../img/ensaladaCaprese.jpg",
            ingredientes: "- Tomates  1. Queso mozzarella fresco. 2.Hojas frescas de albahaca 3. Aceite de oliva virgen extra 4.Vinagre balsámico 5.Sal y pimienta al gusto",
            instruccion: "1. Corta los tomates y el queso mozzarella en rodajas delgadas. 2.En un plato, alterna las rodajas de tomate con las de mozzarella y las hojas de albahaca. 3.Rocía un poco de aceite de oliva virgen extra y vinagre balsámico sobre la ensalada. 4. Salpica con sal y pimienta al gusto. 5. Sirve y disfruta esta ensalada fresca y deliciosa.",
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
            nombre:"Ensalada de Pepino y Yogur",
            Image:"../img/EnsaladaYogurt.jpg",
            ingredientes: "1 pepino grande - 1 taza de yogur natural (puedes usar yogur griego si prefieres una textura más espesa) - 1 diente de ajo, picado finamente (opcional) - 1 cucharada de jugo de limón - 1 cucharada de aceite de oliva virgen extra - Sal y pimienta al gusto - Hojas de menta fresca o eneldo para decorar (opcional)",
            instruccion: "1. Pelar el pepino si lo prefieres (opcional) y córtalo en rodajas finas o en cubos pequeños. 2. En un tazón grande, mezcla el yogur con el ajo picado (si lo estás usando), el jugo de limón y el aceite de oliva. 3. Añade los pepinos cortados al tazón y mezcla bien para que queden cubiertos por la salsa de yogur. 4.Condimenta con sal y pimienta al gusto. 5. Opcionalmente, decora con hojas de menta fresca o eneldo antes de servir. 6. Esta ensalada es refrescante y se puede disfrutar como acompañamiento o como plato principal ligero. "
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
            nombre:"Pollo Glaseado con Miel y Mostaza",
            Image:"../img/PolloMiel.webp",
            ingredientes: "4 pechugas de pollo deshuesadas y sin piel - 1/4 taza de miel - 2 cucharadas de mostaza Dijon - 1 cucharada de aceite de oliva - 2 dientes de ajo, picados finamente - Sal y pimienta al gusto - Tomillo fresco (opcional, para decorar)",
            instruccion: " 1. Precalienta el horno a 200°C (400°F). 2. En un tazón pequeño, mezcla la miel, la mostaza Dijon, el aceite de oliva y el ajo picado. 3. Sazona las pechugas de pollo con sal y pimienta al gusto. 4. Coloca las pechugas de pollo en una bandeja para hornear y úntalas con la mezcla de miel y mostaza, asegurándote de cubrirlas bien. 5. Hornea el pollo durante 20-25 minutos, o hasta que esté completamente cocido y dorado por encima. Puedes verificar que el pollo esté cocido usando un termómetro de cocina; la temperatura interna debe ser de al menos 75°C (165°F). 6. Si deseas, decora con tomillo fresco antes de servir. "
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
            nombre:"Acelgas Salteadas con Ajo y Limón",
            Image:"../img/AcelgasAjo.jpg",
            ingredientes: "1 manojo de acelgas frescas - 2 cucharadas de aceite de oliva virgen extra - 3 dientes de ajo, picados finamente - Jugo de medio limón - Sal y pimienta al gusto - Una pizca de hojuelas de chile rojo (opcional, si te gusta el toque picante)",
            instruccion: " 1. Lava bien las acelgas y sécalas. Corta los tallos duros y pica las hojas en trozos grandes. 2. Calienta el aceite de oliva en una sartén grande a fuego medio. 3.Agrega el ajo picado a la sartén y saltea hasta que esté fragante y ligeramente dorado, aproximadamente 1-2 minutos. 4. Añade las acelgas picadas a la sartén. Saltea las acelgas, revolviendo ocasionalmente, hasta que se ablanden y reduzcan su tamaño, aproximadamente 5-7 minutos. 5. Exprime el jugo de medio limón sobre las acelgas salteadas y mezcla bien. 6. Sazona con sal y pimienta al gusto. Si te gusta el toque picante, añade una pizca de hojuelas de chile rojo. 7.Sirve caliente como acompañamiento o plato principal ligero. "
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
            nombre:"Como cuidar una astromelia",
            Image:"../img/Astromelia2.webp",
            ingredientes: " 1. Ubicación y Luz: Prefiere lugares soleados o con sombra parcial.Asegúrate de que reciba al menos 4-6 horas de luz solar directa al día. Suelo: Necesita un suelo bien drenado. Puede adaptarse a suelos arenosos o arcillosos, pero el drenaje es crucial para evitar el encharcamiento. Riego: Riega moderadamente, permitiendo que el suelo se seque entre riegos. Durante el invierno, reduce el riego ya que la planta entra en una fase de reposo.",
            instruccion: " - Fertilización: No requiere fertilización frecuente. Puedes agregar un fertilizante balanceado una vez al año, en la primavera. - Temperatura y Clima: Tolera bien las temperaturas frías, pero protege la planta de heladas extremas. En climas muy cálidos, asegúrate de que tenga sombra parcial durante las horas más calurosas del día. - Mantenimiento: Retira las flores marchitas para fomentar una floración continua. Divide los bulbos cada 2-3 años para evitar la sobrepoblación y mantener la planta vigorosa. Siguiendo estos consejos básicos, tu astroelia debería crecer saludable y proporcionar hermosas flores a tu jardín."
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
            nombre:"Espinacas a la Crema",
            Image:"../img/CremaEspinaca.jpg",
            ingredientes: "- 500 gramos de espinacas frescas - 1 cucharada de mantequilla - 1 diente de ajo, picado finamente - 1/2 taza de crema de leche (puedes usar crema espesa o crema de cocina) - 1/4 taza de queso parmesano rallado - Sal y pimienta al gusto - Nuez moscada (opcional)",
            instruccion: "1- Lava bien las espinacas y sécalas. Si las espinacas tienen tallos gruesos, puedes cortarlos y usar solo las hojas. 2- En una sartén grande, derrite la mantequilla a fuego medio. 3- Añade el ajo picado a la sartén y saltea hasta que esté fragante y ligeramente dorado, aproximadamente 1-2 minutos. 4- Agrega las espinacas a la sartén. Cocina, revolviendo frecuentemente, hasta que las espinacas se ablanden y reduzcan su tamaño, aproximadamente 3-5 minutos. 4- Reduce el fuego a bajo y añade la crema de leche. Cocina, revolviendo ocasionalmente, hasta que la crema esté bien caliente y comience a espesar, aproximadamente 2-3 minutos. 5- Añade el queso parmesano rallado y mezcla bien hasta que se derrita y se integre con la crema. 6- Sazona con sal, pimienta y una pizca de nuez moscada, si estás usando. 6- Cocina por 1-2 minutos adicionales para que los sabores se mezclen bien. 7- Sirve caliente como acompañamiento o plato principal ligero."
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
            nombre:"Tacos de Lechuga con Pollo",
            Image:"../img/LechugaPollo.webp",
            ingredientes: "1 pechuga de pollo, cocida y desmenuzada - 1 cucharada de aceite de oliva - 1 diente de ajo, picado finamente - 1 cucharadita de comino en polvo - 1 cucharadita de pimentón - Sal y pimienta al gusto - 1 lechuga romana o iceberg, deshojada y lavada - 1 tomate, picado en cubos pequeños - 1/2 cebolla roja, picada finamente - 1/2 taza de maíz (puede ser congelado y descongelado o enlatado y escurrido) - 1/4 taza de cilantro fresco, picado - Jugo de 1 limón - Salsa de yogur o guacamole (opcional, para servir)",
            instruccion: "1- En una sartén grande, calienta el aceite de oliva a fuego medio. 2. Añade el ajo picado y saltea hasta que esté fragante, aproximadamente 1 minuto. 3. Agrega el pollo desmenuzado a la sartén junto con el comino, el pimentón, la sal y la pimienta. Cocina durante 5-7 minutos, mezclando bien para que el pollo absorba los sabores de las especias. 4. Mientras tanto, prepara las hojas de lechuga, asegurándote de que estén limpias y secas. Estas servirán como tacos. 5. En un tazón grande, mezcla el tomate, la cebolla roja, el maíz y el cilantro. Agrega el jugo de limón y mezcla bien. Sazona con sal y pimienta al gusto. 6. Para armar los tacos, coloca una porción de pollo cocido en el centro de cada hoja de lechuga. 7. Añade una cucharada de la mezcla de vegetales sobre el pollo. 8. Si lo deseas, agrega una cucharada de salsa de yogur o guacamole sobre los tacos. 9. Sirve inmediatamente y disfruta estos tacos frescos y saludables."
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
            nombre:"Zanahoria Glaseada",
            Image:"../img/ZanahoriaGlaceada.jpg",
            ingredientes: "1 pechuga de pollo, cocida y desmenuzada - 1 cucharada de aceite de oliva - 1 diente de ajo, picado finamente - 1 cucharadita de comino en polvo - 1 cucharadita de pimentón - Sal y pimienta al gusto - 1 lechuga romana o iceberg, deshojada y lavada - 1 tomate, picado en cubos pequeños - 1/2 cebolla roja, picada finamente - 1/2 taza de maíz (puede ser congelado y descongelado o enlatado y escurrido) - 1/4 taza de cilantro fresco, picado - Jugo de 1 limón - Salsa de yogur o guacamole (opcional, para servir)",
            instruccion: "1- En una sartén grande, calienta el aceite de oliva a fuego medio. 2. Añade el ajo picado y saltea hasta que esté fragante, aproximadamente 1 minuto. 3. Agrega el pollo desmenuzado a la sartén junto con el comino, el pimentón, la sal y la pimienta. Cocina durante 5-7 minutos, mezclando bien para que el pollo absorba los sabores de las especias. 4. Mientras tanto, prepara las hojas de lechuga, asegurándote de que estén limpias y secas. Estas servirán como tacos. 5. En un tazón grande, mezcla el tomate, la cebolla roja, el maíz y el cilantro. Agrega el jugo de limón y mezcla bien. Sazona con sal y pimienta al gusto. 6. Para armar los tacos, coloca una porción de pollo cocido en el centro de cada hoja de lechuga. 7. Añade una cucharada de la mezcla de vegetales sobre el pollo. 8. Si lo deseas, agrega una cucharada de salsa de yogur o guacamole sobre los tacos. 9. Sirve inmediatamente y disfruta estos tacos frescos y saludables."
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
            nombre:"Zucchini Salteado con Ajo y Parmesano",
            Image:"../img/ZuchiniSalteado.jpeg",
            ingredientes: "2 zucchinis medianos, cortados en rodajas finas -2 cucharadas de aceite de oliva -1/4 taza de queso parmesano rallado -Sal y pimienta al gusto -Perejil fresco picado para decorar (opcional)",
            instruccion: "1. Calienta el aceite de oliva en una sartén grande a fuego medio. 2. Añade el ajo picado y saltea hasta que esté fragante y ligeramente dorado, aproximadamente 1-2 minutos. 3. Agrega las rodajas de zucchini a la sartén. Cocina, revolviendo ocasionalmente, hasta que el zucchini esté tierno y dorado, aproximadamente 5-7 minutos. 4. Sazona con sal y pimienta al gusto. 5. Retira la sartén del fuego y espolvorea el queso parmesano rallado sobre el zucchini caliente. Mezcla bien para que el queso se derrita y cubra uniformemente las rodajas. 6. Si lo deseas, decora con perejil fresco picado antes de servir."
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
            nombre:"Arepas de Queso Costeño",
            Image:"../img/arepas.webp",
            ingredientes: "2 tazas de harina de maíz precocida (puedes usar harina para arepas) - 2 tazas de agua tibia - 1 taza de queso costeño rallado (puedes ajustar la cantidad al gusto) - 1 cucharadita de sal - Aceite vegetal para cocinar",
            instruccion: "1. En un tazón grande, mezcla la harina de maíz y la sal. 2. Añade el agua tibia poco a poco, mezclando con las manos hasta obtener una masa suave y manejable. Deja reposar la masa durante 5 minutos. 3. Incorpora el queso costeño rallado a la masa y mezcla bien. 4. Divide la masa en porciones iguales y forma bolas con las manos. Luego, aplana cada bola hasta obtener discos de aproximadamente 1 cm de grosor. 5. Calienta una sartén grande o plancha a fuego medio y añade un poco de aceite vegetal. 6. Cocina las arepas en la sartén caliente durante 5-7 minutos por cada lado, o hasta que estén doradas y crujientes por fuera y el queso se haya derretido en el interior. 7. Retira las arepas de la sartén y colócalas en un plato con papel absorbente para eliminar el exceso de aceite."
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
            nombre:"Cazuela de Pollo con Queso Paipa",
            Image:"../img/quesoPaipaPollo.webp",
            ingredientes: "500 gramos de pechuga de pollo, cortada en cubos - 1 cebolla grande, picada finamente - 2 dientes de ajo, picados - 2 tomates, picados - 1 pimiento rojo, picado - 2 tazas de caldo de pollo - 1 taza de crema de leche - 200 gramos de queso Paipa, rallado - 2 cucharadas de aceite de oliva - Sal y pimienta al gusto - Perejil fresco picado para decorar (opcional)",
            instruccion: "1. Calienta el aceite de oliva en una olla grande a fuego medio-alto. 2.Añade la cebolla y el ajo picados, y sofríe hasta que estén dorados y fragantes, aproximadamente 3-4 minutos. 3. Agrega los cubos de pollo a la olla y cocina hasta que estén dorados por todos lados. 4. Incorpora los tomates y el pimiento rojo picados, y cocina por unos 5 minutos, hasta que los vegetales estén tiernos. 5. Añade el caldo de pollo y lleva a ebullición. Reduce el fuego y deja que hierva a fuego lento durante 15-20 minutos, o hasta que el pollo esté bien cocido. 6. Agrega la crema de leche a la olla y mezcla bien. Cocina a fuego lento durante unos 5 minutos más, permitiendo que los sabores se integren. 7. Incorpora el queso Paipa rallado a la cazuela y mezcla hasta que se derrita y se integre completamente con la salsa. 8. Sazona con sal y pimienta al gusto."
        },
        precio: 5000
    },
    {
        id: 'Arequipe',
        titulo: 'Arequipe',
        Image: "../img/arequipe.webp",
        categorias: {
            nombre: "Lacteos",
            id: 'Lacteos'
        },
        masInformacion: {
            nombre:"Postre de Arequipe y Galletas",
            Image:"../img/DulceGllet.jpg",
            ingredientes: "1 lata de leche condensada (400 g) - 1 lata de leche evaporada (400 g) - 1 taza de arequipe - 1 paquete de galletas María o galletas de tu preferencia - 1 taza de leche (para mojar las galletas) - Nueces picadas (opcional, para decorar)",
            instruccion: "1. En un tazón grande, mezcla la leche condensada, la leche evaporada y el arequipe hasta obtener una mezcla homogénea. 2. En un recipiente rectangular o cuadrado (preferiblemente de vidrio), coloca una capa de galletas mojadas ligeramente en leche. 3. Vierte una capa de la mezcla de arequipe sobre las galletas, extendiéndola de manera uniforme. 4. Repite el proceso alternando capas de galletas y mezcla de arequipe hasta que termines con una capa de la mezcla de arequipe en la parte superior. 5. Si lo deseas, espolvorea nueces picadas sobre la capa final para decorar. 6. Cubre el recipiente con plástico adherente y refrigera durante al menos 4 horas, o preferiblemente toda la noche, para que el postre se asiente y los sabores se mezclen."
        },
        precio: 5000
    },
    {
        id: 'Pimenton',
        titulo: 'pimenton',
        Image: "../img/pimenton.webp",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            nombre:"Pimientos Rellenos de Carne",
            Image:"../img/pimentonRelleno.jpg",
            ingredientes: "4 pimientos grandes (de cualquier color) - 500 gramos de carne molida (puedes usar carne de res, cerdo, pollo o una mezcla) - 1 cebolla grande, picada - 2 dientes de ajo, picados finamente - 1 zanahoria grande, rallada - 1 tomate grande, picado en cubitos - 1 taza de arroz cocido - 1 cucharadita de comino en polvo - 1 cucharadita de pimentón en polvo - Sal y pimienta al gusto - Queso rallado para gratinar (opcional) - Aceite de oliva",
            instruccion: "1. Precalienta el horno a 200°C (400°F). 2. Corta la parte superior de los pimientos y retira las semillas y las membranas del interior. 3. En una sartén grande, calienta un poco de aceite de oliva a fuego medio-alto. 4. Agrega la cebolla y el ajo picados, y cocina hasta que estén dorados y fragantes, unos 3-4 minutos. 5. Añade la carne molida a la sartén y cocina hasta que esté dorada y cocida por completo, rompiendo la carne con una cuchara de madera para desmenuzarla. 6. Agrega la zanahoria rallada, el tomate picado, el comino en polvo y el pimentón en polvo. Cocina por unos 5 minutos, revolviendo ocasionalmente. 7. Incorpora el arroz cocido a la mezcla de carne y verduras. Mezcla bien y cocina por unos minutos más hasta que todo esté bien combinado. Prueba y ajusta la sazón con sal y pimienta según sea necesario. 8. Rellena los pimientos con la mezcla de carne y verduras, presionando suavemente para asegurarte de que estén bien llenos. 9. Coloca los pimientos rellenos en una bandeja para hornear. Si lo deseas, espolvorea un poco de queso rallado sobre los pimientos. 10. Hornea en el horno precalentado durante 25-30 minutos, o hasta que los pimientos estén tiernos y el queso (si lo usaste) esté dorado y burbujeante. 11. Retira del horno y deja reposar unos minutos antes de servir."
        },
        precio: 5000
    },
    {
        id: 'Cilantro',
        titulo: 'Cilantro',
        Image: "../img/cilantro.webp",
        categorias: {
            nombre: "Verduras",
            id: 'Verduras'
        },
        masInformacion: {
            nombre:"Arroz con Cilantro (Arroz Verde)",
            Image:"../img/ArrozCilantro.jpg",
            ingredientes: "1 taza de arroz blanco (puedes usar arroz de grano largo o arroz jasmine) - 2 tazas de agua o caldo de pollo - 1 manojo grande de cilantro fresco, lavado y picado (incluyendo tallos) - 1 diente de ajo, picado finamente - 1 cucharada de aceite de oliva - Sal al gusto - Jugo de 1 limón (opcional, para dar un toque ácido)",
            instruccion: "1. Enjuaga el arroz bajo agua fría hasta que el agua salga clara. Esto elimina el exceso de almidón y evita que el arroz se pegue. 2. En una licuadora o procesador de alimentos, coloca el cilantro picado, el ajo, el aceite de oliva y un poco de agua (aproximadamente 1/4 de taza). Tritura hasta obtener una mezcla suave y homogénea. 3. En una olla grande, calienta un poco de aceite de oliva a fuego medio. Añade el arroz y cocina por 1-2 minutos, revolviendo constantemente, hasta que esté ligeramente dorado. 4. Agrega la mezcla de cilantro (que has preparado en el paso 2) al arroz dorado. Cocina por unos minutos, revolviendo para que el arroz se impregne bien con el sabor del cilantro. 4. Vierte el agua o caldo de pollo caliente sobre el arroz. Agrega sal al gusto y mezcla bien. 5. Lleva el arroz a ebullición, luego reduce el fuego a bajo y cocina tapado durante 15-20 minutos, o hasta que el arroz esté tierno y todo el líquido se haya absorbido. 6. Si lo deseas, exprime el jugo de limón sobre el arroz cocido y mezcla suavemente antes de servir."
        },
        precio: 5000
    },
    {
        id: 'Huevos',
        titulo: 'Huevos',
        Image: "../img/huevos.jpg",
        categorias: {
            nombre: "Otros",
            id: 'Otros'
        },
        masInformacion: {
            nombre:"Huevos Revueltos con Cilantro",
            Image:"../img/HuevosCilantro.jpg",
            ingredientes: "4 huevos - 1/4 de taza de leche (opcional, para unos huevos más cremosos) - 1 manojo de cilantro fresco, picado finamente - Sal y pimienta al gusto - 1 cucharada de mantequilla o aceite de oliva",
            instruccion: "1. En un tazón, bate los huevos junto con la leche (si estás usando) hasta que estén bien mezclados. 2. Calienta la mantequilla o el aceite de oliva en una sartén grande a fuego medio. 3.Agrega los huevos batidos a la sartén caliente. Cocina revolviendo suavemente con una espátula o cuchara de madera. 4.Cuando los huevos empiecen a cuajarse pero aún estén un poco líquidos, agrega el cilantro picado y continúa revolviendo hasta que los huevos estén cocidos a tu gusto. 5 .Sazona con sal y pimienta al gusto. 6. Sirve los huevos revueltos calientes, acompañados de pan tostado o tortillas si lo deseas."
        },
        precio: 5000
    },
];

// Seleccionar elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos .row");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector('#numerito');

let productosEnCarrito;  // Variable para almacenar productos en el carrito

// Obtener productos del localStorage si existen, de lo contrario inicializar como un array vacío
let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

// Cargar productos inicialmente
cargarProductos(productos);

// Función para cargar productos en el contenedor
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevos productos

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

        contenedorProductos.appendChild(div); // Agregar el div del producto al contenedor
    });

    actualizarBotonesAgregar(); // Actualizar los listeners de los botones "Agregar al carrito"
    actualizarBotonesMasDetalles(); // Actualizar los listeners de los botones "Ver detalles"
}

// Función para actualizar listeners de botones "Agregar al carrito"
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Función para actualizar listeners de botones "Ver detalles"
function actualizarBotonesMasDetalles() {
    const botonesMasDetalles = document.querySelectorAll('[data-bs-toggle="modal"]');
    botonesMasDetalles.forEach(boton => {
        boton.addEventListener('click', mostrarMasDetalles);
    });
}

// Función para mostrar más detalles del producto en el modal
function mostrarMasDetalles(event) {
    const productoId = event.currentTarget.getAttribute('data-producto-id');
    const producto = productos.find(prod => prod.id === productoId);
    const masInformacionDiv = document.querySelector('#masInformacion');

    masInformacionDiv.innerHTML = `
        <p class="texto-bold"><strong class="titulo fs-3">Receta:</strong> ${producto.masInformacion.nombre}</p>
        <img src="${producto.masInformacion.Image}" alt="${producto.titulo}" class="producto-img-modal" >
        <p class="texto-Modal"><strong class="titulo">Ingredientes:</strong> ${producto.masInformacion.ingredientes}</p>
        <p class="texto-Modal"><strong class="titulo">Ingredientes:</strong> ${producto.masInformacion.instruccion}</p>
        <p class="titulo d-flex justify-content-center" > ¡Espero que te guste! </p>
    `;
}
// Event listener para los botones de categorías
botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Remover la clase 'active' de todos los botones de categoría y agregarla al botón actual
        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== "Todos") {
            const productosBoton = productos.filter(producto => producto.categorias.id === e.currentTarget.id);
            if (productosBoton.length === 0) {
                // Filtrar productos por categoría seleccionada
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
// Función para agregar un producto al carrito
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    // Si el producto ya está en el carrito, aumentar la cantidad, sino agregarlo al carrito con cantidad 1
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();  // Actualizar el contador del carrito en la interfaz
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

// Función para actualizar el número de productos en el carrito en la interfaz
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.textContent = nuevoNumerito;  // Mostrar el nuevo número de productos en el carrito
}

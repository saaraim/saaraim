document.addEventListener('DOMContentLoaded', () => {
    const productosGuardados = JSON.parse(localStorage.getItem('carrito'));
    if (productosGuardados) {
        allProducts = productosGuardados;
        showHtml(); // Mostrar los productos almacenados
    }
    // carrito
const abri = document.querySelector('#carrito');
const containerCartproducts = document.querySelector('.tarjeta-productos-carrito');
const cerar = document.querySelector('#cerrar-carrito');

// Mostrar/ocultar carrito
abri.addEventListener('click', () => {
    containerCartproducts.classList.remove('hidden-cart');
});

cerar.addEventListener('click', () => {
    containerCartproducts.classList.add('hidden-cart');
});

const tipos = document.querySelectorAll('.descri-tipo');

// Añadir un evento de clic a cada imagen
tipos.forEach(tipo => {
    tipo.addEventListener('click', () => {
        // Obtiene la imagen y el nombre del estampado
        const imagen = tipo.querySelector('img').src; // Fuente de la imagen
        const nombreEstampado = tipo.querySelector('h3').innerText; // Nombre del estampado
        
        // Cambia la imagen en la sección sabana-infantil
        const imagenSabana = document.getElementById('imagen-sabana');
        imagenSabana.src = imagen;

        // Cambia el nombre del estampado en la descripción
        const nombreElemento = document.getElementById('nombre-estampado');
        nombreElemento.innerHTML = `Estampado de <span>${nombreEstampado}</span>`;
    });
});

// Colores de los productos de la lencería de casa
document.querySelectorAll(".ropadecasa-producto").forEach(producto => {
    const imagenMostrada = producto.querySelector("img"); // Selecciona la imagen mostrada en cualquier producto
    const colores = producto.querySelectorAll(".colores-casa span");

    colores.forEach(color => {
        color.addEventListener('click', () => {
            const tipoProducto = color.getAttribute("data-cortina"); // Usamos "data-cortina" para identificar si es cortina o sabana
            const colorId = color.classList[0]; // El color es la primera clase, ej: rosado, gris-oscuro

            // Busca la imagen correspondiente según el color y tipo de producto (cortina o sabana)
            const imagenCorrespondiente = producto.querySelector(`.imagenes-casa .${colorId}.${tipoProducto}`);

            if (imagenCorrespondiente) {
                const nuevaSrc = imagenCorrespondiente.getAttribute("src");
                imagenMostrada.setAttribute("src", nuevaSrc);
            }
        });
    });
})
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar botón de agregar carrito
    const agregarCarritoBtn = document.querySelector('.agregar-carrito');
    
    // Verificar si el botón fue encontrado
    if (!agregarCarritoBtn) {
        console.error("El botón 'Agregar Carrito' no fue encontrado.");
        return;
    }

    console.log("El botón 'Agregar Carrito' ha sido seleccionado correctamente.");
    
    const rowProduct = document.querySelector('.row-product'); // Contenedor del carrito
    
    let allProducts = []; // Lista para almacenar los productos agregados

    agregarCarritoBtn.addEventListener('click', () => {
        console.log("Click en 'Agregar Carrito' detectado.");

        // Obtener la información del producto seleccionado
        const nombreEstampado = document.getElementById('nombre-estampado').innerText;
        const precio = document.querySelector('.precio3').innerText;
        const imagen = document.getElementById('imagen-sabana').src;
        const titulo = document.querySelector('.titulo').textContent

        // Verificar que se obtiene correctamente la información
        console.log(`Producto: ${nombreEstampado}, Precio: ${precio}, Imagen: ${imagen}`);

        // Crear un objeto con la información del producto
        const infoProduct = {
            title: titulo,
            price: precio,
            image: imagen,
            nombre: nombreEstampado,
        };

        // Agregar el producto al arreglo de productos
        allProducts = [...allProducts, infoProduct];

        // Mostrar los productos en el carrito
        showHtml();
    });

    // Función para mostrar los productos en el carrito
    const showHtml = () => {
        rowProduct.innerHTML = ''; // Limpiar el carrito antes de actualizar

        allProducts.forEach(product => {
            // Crear el contenedor de producto
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');

            // Añadir el contenido del producto al carrito
            containerProduct.innerHTML = `
                <div class="cart-products cart-product">
                    <a href="#blusamoderna">
                        <img src="${product.image}" alt="${product.title}"> 
                    </a>
                    <div class="descri-product">
                        <h6 class="titulo-carrito-producto">${product.title}</h6>
                        <p class="talla-carrito">Estampado: ${product.nombre}</p>
                        <div class="cantidad-carrito">
                            <button class="cantidad-baja">-</button>
                            <span class="cantidad-valor">1</span>
                            <button class="cantidad-sube">+</button>
                        </div>
                        <span class="precio-producto-carrito">${product.price}</span>
                    </div>
                    <svg class="quitar-product" xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 -960 960 960" width="20px">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                </div>
            `;

            // Añadir el producto al contenedor del carrito
            rowProduct.append(containerProduct);
        });
    };
    rowProduct.addEventListener('click', e => {
        // Verificar si el elemento es un producto
        const productElement = e.target.closest('.cart-product');
        
        // Si no se encuentra el producto, salir
        if (!productElement) return;
        
        // Obtener el título del producto y el estampado (nombre del estampado)
        const productTitle = productElement.querySelector('.titulo-carrito-producto').textContent.trim();
        const nombreEstampado = productElement.querySelector('.talla-carrito').textContent.split(':')[1].trim();
        
        // Encontrar el producto en el array allProducts usando el título y el estampado
        let product = allProducts.find(p => p.title === productTitle && p.nombreEstampado === nombreEstampado);
        
        // Incrementar la cantidad de productos
        if (e.target.classList.contains('cantidad-sube')) {
            product.quantity++; // Aumentar la cantidad
            showHtml(); // Mostrar el carrito actualizado
        }
        
        // Decrementar la cantidad de productos (solo si es mayor que 1)
        if (e.target.classList.contains('cantidad-baja') && product.quantity > 1) {
            product.quantity--; // Disminuir la cantidad
            showHtml(); // Mostrar el carrito actualizado
        }
        
        // Eliminar el producto del carrito
        if (e.target.classList.contains('quitar-product')) {
            // Filtrar los productos que NO coincidan con el título y el nombre del estampado
            allProducts = allProducts.filter(p => !(p.title === product.title && p.nombreEstampado === product.nombreEstampado));
            showHtml(); // Mostrar el carrito actualizado
        }
        
        // Actualizar el localStorage
        localStorage.setItem('carrito', JSON.stringify(allProducts));
    });
});  
});




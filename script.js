document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los productos
    const productos = document.querySelectorAll(".tarjetaproducto");


    productos.forEach(producto => {
        const tallas = producto.querySelectorAll(".tallas .talla");
        const precios = producto.querySelectorAll(".precios span");
        const botonAgregar = producto.querySelector(".agregar-carrito");
    
        // Función para eliminar la clase 'active' de todas las tallas
        const eliminarActive = () => {
            tallas.forEach(talla => {
                talla.classList.remove('active');
            });
        };

        // Mostrar/ocultar carrito
const abri = document.querySelector('#carrito');
const containerCartproducts = document.querySelector('.tarjeta-productos-carrito');
const cerar = document.querySelector('#cerrar-carrito');

abri.addEventListener('click', () => {
    containerCartproducts.classList.remove('hidden-cart');
});

cerar.addEventListener('click', () => {
    containerCartproducts.classList.add('hidden-cart');
});
    
        // Lógica general para las demás prendas
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');
    
                // Mostrar el precio correspondiente según la talla seleccionada para otras prendas
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");
    
                if (["4", "6", "8"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["10", "12", "14", "16"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } else {
                    producto.querySelector(".precio3").style.display = "inline";
                }
            });
        });
    
        // Lógica específica para los jeans
        const esJeans = producto.classList.contains('jeans');
        if (esJeans) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');
    
                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");
    
                    if (["4"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["6", "8", "10", "12", "14", "16", "18"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["28", "30", "32","34", "36"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["38", "40", "42"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    }
                });
            });
        }

        // Lógica específica para las sabanas
        const ropadecasa = producto.classList.contains('sabanas');
        if (ropadecasa) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');
    
                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");
    
                    if (["1M"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["1.20"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["1.40"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["1.60"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    } else if (["2.00"].includes(tallaTexto)) {
                        producto.querySelector(".precio5").style.display = "inline";
                    } 
                });
            });
        }

        // Lógica específica para las del toldillo
        const toldillo = producto.classList.contains('toldillo');
        if (toldillo) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');
    
                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");
    
                    if (["1M"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["1.20-1.40"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["1.60"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["2.00"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    }
                });
            });
        }

    // Lógica específica para el protector de colchon 
    const protector = producto.classList.contains('protector');
    if (protector) {
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');

                // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");

                if (["1.40"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["1.60"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } else if (["2.00"].includes(tallaTexto)) {
                    producto.querySelector(".precio3").style.display = "inline";
                }
            });
        });
    }

    // Lógica específica para los acolchados
    const acolchados = producto.classList.contains('acolchados');
    if (acolchados) {
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');

                // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");

                if (["1.40"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["1.60"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } else if (["2.00"].includes(tallaTexto)) {
                    producto.querySelector(".precio3").style.display = "inline";
                }
            });
        });
    }
    // Lógica específica para los acolchados
    const mediasDiario1 = producto.classList.contains('media-diario1');
    if (mediasDiario1) {
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');

                // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");

                if (["2-4", "4-6"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["6-8"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } else if (["8-10", "9-11"].includes(tallaTexto)) {
                    producto.querySelector(".precio3").style.display = "inline";
                }
            });
        });
    }
    // Lógica específica para las medias 2
    const mediasDiario2 = producto.classList.contains('media-diario2');
    if (mediasDiario2) {
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');

                // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");

                if (["4-6","6-8"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["8-10", "9-11"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } 
            });
        });
    }
        // Lógica específica para las medias 2
    const mediacanalada= producto.classList.contains('media-canalada');
        if (mediacanalada) {
            tallas.forEach(talla => {
                talla.addEventListener("click", () => {
                    eliminarActive();
                    talla.classList.add('active');

                    // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                    const tallaTexto = talla.textContent.trim();
                    precios.forEach(precio => precio.style.display = "none");

                    if (["2-4"].includes(tallaTexto)) {
                        producto.querySelector(".precio1").style.display = "inline";
                    } else if (["4-6"].includes(tallaTexto)) {
                        producto.querySelector(".precio2").style.display = "inline";
                    } else if (["6-8", "8-10"].includes(tallaTexto)) {
                        producto.querySelector(".precio3").style.display = "inline";
                    } else if (["10-12"].includes(tallaTexto)) {
                        producto.querySelector(".precio4").style.display = "inline";
                    }
                });
            });
        }
        
        // Lógica específica para las medias 2
    const medialisa= producto.classList.contains('media-larga');
    if (medialisa) {
        tallas.forEach(talla => {
            talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add('active');

                // Mostrar el precio correspondiente según la talla seleccionada para los jeans
                const tallaTexto = talla.textContent.trim();
                precios.forEach(precio => precio.style.display = "none");

                if (["4-6"].includes(tallaTexto)) {
                    producto.querySelector(".precio1").style.display = "inline";
                } else if (["6-8"].includes(tallaTexto)) {
                    producto.querySelector(".precio2").style.display = "inline";
                } else if (["8-10", "10-12"].includes(tallaTexto)) {
                    producto.querySelector(".precio3").style.display = "inline";
                } 
            });
        });
    }
    });

// Funcionalidad del carrito
const cartInfo = document.querySelector('.cart-products');
const rowProduct = document.querySelector('.cart-products-container');

// Lista de productos
const productsList = document.querySelectorAll('.tarjetaproducto');
let allProducts = [];

// Agregar producto al carrito
productsList.forEach(product => { 
    product.addEventListener('click', e => {
        if (e.target.classList.contains('agregar-carrito')) {
            const tallaSeleccionada = product.querySelector('.talla.active').textContent.trim();

            let precioSeleccionado;
            if (product.querySelector('.precio1').style.display === 'inline') {
                precioSeleccionado = product.querySelector('.precio1').textContent;
            } else if (product.querySelector('.precio2').style.display === 'inline') {
                precioSeleccionado = product.querySelector('.precio2').textContent;
            } else if (product.querySelector('.precio3').style.display === 'inline') {
                precioSeleccionado = product.querySelector('.precio3').textContent;
            }

            const nombrecolegio = document.querySelector('.nombre-colegio span').textContent;

            const infoProduct = {
                imagen: product.querySelector('img').src,
                title: product.querySelector('h6').textContent,
                talla: tallaSeleccionada,
                quantity: 1,
                price: precioSeleccionado,
                nombrecoleg: nombrecolegio,
            }

            let productExists = allProducts.find(p => p.title === infoProduct.title && p.talla === infoProduct.talla);
            if (productExists) {
                productExists.quantity += 1;
            } else {
                allProducts = [...allProducts, infoProduct];
            }

            localStorage.setItem('carrito', JSON.stringify(allProducts));

            showhtml();
        }
    });
});

// Remover producto del carrito
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('quitar-product')) {
        const productElement = e.target.closest('.cart-products');
        const title = productElement.querySelector('.titulo-carrito-producto').textContent.split('/')[0].trim();
        const talla = productElement.querySelector('.talla-carrito').textContent.trim();

        allProducts = allProducts.filter(product => !(product.title === title && product.talla === talla));

        localStorage.setItem('carrito', JSON.stringify(allProducts));

        showhtml();
    }
});
// Función para mostrar el HTML del carrito
const showhtml = () => {
    const rowProduct = document.querySelector('.cart-products-container');
    const valortotal = document.querySelector('.total-pagar');
    const countproducts = document.querySelector('#contador-productos');

    // Limpiar el HTML anterior
    rowProduct.innerHTML = '';

    // Variables para el total del dinero a pagar y el total de productos en el carrito
    let total = 0;
    let totalofproducts = 0;

    // Iterar sobre todos los productos en el carrito
    allProducts.forEach(product => {
        const containerproduct = document.createElement('div');
        containerproduct.classList.add('cart-products');

        containerproduct.innerHTML = `
            <div class="cart-products">
                <a href="#blusamoderna">
                    <img src="${product.imagen}" alt="${product.title}"> </a>
                <div class="descri-product">
                    <a href="">
                        <h6 class="titulo-carrito-producto">${product.title}/${product.nombrecoleg}</h6>
                    </a>
                    <p class="talla-carrito">${product.talla}</p>
                    <div class="cantidad-carrito">
                        <button class="cantidad-baja">-</button>
                        <span class="cantidad-valor">${product.quantity}</span>
                        <button class="cantidad-sube">+</button>
                    </div>
                    <span class="precio-producto-carrito">${product.price}</span>
                </div>
                <svg class="quitar-product" xmlns="http://www.w3.org/2000/svg" height="24px"
                     viewBox="0 -960 960 960" width="20px">
                     <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            </div>`;

        rowProduct.append(containerproduct);

        // Calcular el total
        let priceFormatted = product.price.replace(/\$/g, '').replace(/\./g, '').replace(',', '.');
        let productPrice = parseFloat(priceFormatted);
        if (!isNaN(productPrice)) {
            total += productPrice * product.quantity;
        }

        // Sumar la cantidad de productos
        totalofproducts += product.quantity;

        localStorage.setItem('allProducts', JSON.stringify(allProducts));
    });

    // Actualizar los valores totales en el carrito
    valortotal.innerText = `$${total.toLocaleString('es-CO')}`;
    countproducts.innerText = totalofproducts;
};
// Incrementar/Decrementar cantidad de productos
rowProduct.addEventListener('click', e => {
    const productElement = e.target.closest('.cart-products');
    const productTitle = productElement.querySelector('.titulo-carrito-producto').textContent.split('/')[0].trim();
    const productTalla = productElement.querySelector('.talla-carrito').textContent.trim();

    let product = allProducts.find(p => p.title === productTitle && p.talla === productTalla);

    if (e.target.classList.contains('cantidad-sube')) {
        product.quantity++;
        showhtml();
    }

    if (e.target.classList.contains('cantidad-baja') && product.quantity > 1) {
        product.quantity--;
        showhtml();
    }

    

    // Función para cargar los productos guardados en localStorage
    
    document.addEventListener('DOMContentLoaded', () => {
        const savedCart = JSON.parse(localStorage.getItem('carrito'));
    
        if (savedCart) {
            allProducts = savedCart;
            showhtml();
        }
        
        });
    
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
});




 



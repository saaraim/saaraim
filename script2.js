document.addEventListener("DOMContentLoaded", () => {
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

    // cambia el estanpado 
    
    // Funcionalidad del carrito 
    const cartInfo = document.querySelector('.cart-product');
    const rowProduct = document.querySelector('.cart-products-container');

});

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.querySelector('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    cartButton.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
    });
});
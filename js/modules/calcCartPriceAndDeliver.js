function calcCartPriceAndDeliver() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = cartWrapper.querySelectorAll('.cart-item');
    const totalPrice = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let sum = 0;

    cartItems.forEach(item => {
        const amount = item.querySelector('[data-counter]');
        const price = item.querySelector('.price__currency');

        sum += parseInt(amount.textContent) * parseInt(price.textContent);
    });
    totalPrice.textContent = sum;

    if (totalPrice.textContent > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (totalPrice.textContent >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.textContent = 'Бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.textContent = '250 Р';
    }
}
export default calcCartPriceAndDeliver;
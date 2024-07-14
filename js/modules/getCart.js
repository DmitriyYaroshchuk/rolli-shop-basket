import toggleCartStatus from "./toggleCartStatus.js";
import calcCartPriceAndDeliver from "./calcCartPriceAndDeliver.js";

function getCart() {
    const carts = document.querySelector('.carts');
    const cartWrapper = document.querySelector('.cart-wrapper');

    carts.addEventListener('click', event => {
        if (!event.target.closest('[data-cart]')) return;
        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').textContent,
            itemsInBox: card.querySelector('[data-items-in-box]').textContent,
            weight: card.querySelector('.price__weight').textContent,
            price: card.querySelector('.price__currency').textContent,
            counter: card.querySelector('[data-counter]').textContent,
        }


        const itemInCart= cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.textContent = Number(counterElement.textContent) + Number(productInfo.counter);
        } else {
            const cartItemHTML = `
                <div class="cart-item" data-id="${productInfo.id}">
                    <div class="cart-item__top">
                        <div class="cart-item__img">
                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                        </div>
                        <div class="cart-item__desc">
                            <div class="cart-item__title">${productInfo.title}</div>
                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
                            
                            <!-- getCart-item__details -->
                            <div class="cart-item__details">
                                <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
                            
                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        card.querySelector('[data-counter]').textContent = 1;
        toggleCartStatus();
        calcCartPriceAndDeliver();
    });
}
export default getCart;
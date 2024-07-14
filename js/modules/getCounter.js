import toggleCartStatus from "./toggleCartStatus.js";
import calcCartPriceAndDeliver from "./calcCartPriceAndDeliver.js";

function getCounter() {
    const carts = document.querySelector('.carts');
    let counter;
    if (!carts) return;


    carts.addEventListener('click', event => {
        const action = event.target.dataset.action;
        if (action === 'plus' || action === 'minus') {
            const parent = event.target.closest('.counter-wrapper');
            counter = parent.querySelector('[data-counter]');

            if (action === 'plus') {
                counter.textContent = Number(counter.textContent) + 1;
            }

            if (action === 'minus' && Number(counter.textContent) > 1) {
                counter.textContent = Number(counter.textContent) - 1;
            } else if (event.target.closest('.cart-wrapper') && Number(counter.textContent) === 1) {
                event.target.closest('.cart-item').remove();
                toggleCartStatus();
            }
            calcCartPriceAndDeliver();
        }
    });


}
export default getCounter;
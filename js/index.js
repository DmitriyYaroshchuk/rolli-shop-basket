import getCounter from "./modules/getCounter.js";
import getCart from "./modules/getCart.js";
import toggleCartStatus from "./modules/toggleCartStatus.js";
import calcCartPriceAndDeliver from "./modules/calcCartPriceAndDeliver.js";
import render from "./modules/render.js";

document.addEventListener('DOMContentLoaded', () => {
    render();
    toggleCartStatus();
    calcCartPriceAndDeliver();
    getCounter();
    getCart()
});
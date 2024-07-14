function render() {
    const productsContainer = document.querySelector('#products-container');

    async function getProducts() {
        const res = await fetch('./js/products.json');
        if (!res.ok) throw new Error(res.statusText);
        const productsArr = await res.json();
        renderProducts(productsArr)
    }
    getProducts();

    function renderProducts(data) {
        if (!data || !data.length) return;

        data.forEach(item => {
            const { id, title, itemsInBox, weight, price, imgSrc } = item;
            const productHTML = `
                <div class="col-md-6">
        \t\t\t\t\t\t<div class="card mb-4" data-id="${id}">
        \t\t\t\t\t\t\t<img class="product-img" src="./img/roll/${imgSrc}" alt="${title}">
        \t\t\t\t\t\t\t<div class="card-body text-center">
        \t\t\t\t\t\t\t\t<h4 class="item-title">${title}</h4>
        \t\t\t\t\t\t\t\t<p><small data-items-in-box class="text-muted">${itemsInBox} шт.</small></p>
        
        \t\t\t\t\t\t\t\t<div class="details-wrapper">
        \t\t\t\t\t\t\t\t\t<div class="items counter-wrapper">
        \t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
        \t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter>1</div>
        \t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
        \t\t\t\t\t\t\t\t\t</div>
        
        \t\t\t\t\t\t\t\t\t<div class="price">
        \t\t\t\t\t\t\t\t\t\t<div class="price__weight">${weight}г.</div>
        \t\t\t\t\t\t\t\t\t\t<div class="price__currency">${price} ₽</div>
        \t\t\t\t\t\t\t\t\t</div>
        \t\t\t\t\t\t\t\t</div>
        
        \t\t\t\t\t\t\t\t<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
        
        \t\t\t\t\t\t\t</div>
        \t\t\t\t\t\t</div>
    \t\t\t\t\t</div>
            `;
            productsContainer.insertAdjacentHTML('beforeend', productHTML);
        });
    }

}
export default render;
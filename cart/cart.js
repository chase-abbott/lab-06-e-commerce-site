import { getCart } from '../cart-api.js';
import { array } from '../products.js';
import { findById, renderLineItems, renderTotalRow, createHead } from '../test/utils.js';
const button = document.querySelector('button');

const table = document.querySelector('table');

const cart = getCart();

const head = createHead();
table.append(head);

for (let cartItem of cart) {
    const matchingPet = findById(array, cartItem.id);

    const tr = renderLineItems(cartItem, matchingPet);

    table.append(tr);
}

const tr2 = renderTotalRow(cart, array);

table.append(tr2);

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart));

    localStorage.clear();

    window.location = '../products';

})

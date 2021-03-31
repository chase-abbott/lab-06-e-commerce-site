import { cart } from './cart-data.js';
import { array } from '../products.js';
import { findById, renderLineItems, renderTotalRow } from '../test/utils.js';

const table = document.querySelector('table');



for (let cartItem of cart) {
    const matchingPet = findById(array, cartItem.id);

    const tr = renderLineItems(cartItem, matchingPet);

    table.append(tr);
};

const tr2 = renderTotalRow(cart, array);

table.append(tr2);


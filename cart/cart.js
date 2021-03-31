import { cart } from './cart-data.js';
import { array } from '../products.js';
import { findById, renderLineItems } from '../test/utils.js';

const table = document.querySelector('table');



for (let cartItem of cart) {
    const matchingPet = findById(array, cartItem.id);

    const tr = renderLineItems(cartItem, matchingPet);

    table.append(tr);

};




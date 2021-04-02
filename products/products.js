import { createPet } from '../test/utils.js';
import { array } from '../products.js';
import { addProductsToLocalStorage } from './products-local-storage.js';

addProductsToLocalStorage();

const list = document.getElementById('ul');

for (let pet of array) {
    const li = createPet(pet);

    list.append(li);
}

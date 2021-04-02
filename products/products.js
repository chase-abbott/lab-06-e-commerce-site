import { createPet } from '../test/utils.js';
import { array } from '../products.js';


const list = document.getElementById('ul');

for (let pet of array) {
    const li = createPet(pet);

    list.append(li);
}

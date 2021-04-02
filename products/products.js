import { createPet } from '../test/utils.js';
import { array } from '../products.js';
import { setProductsInLocalStorage, addNewProductToLocalStorage } from './products-local-storage.js';
const form = document.querySelector('#my-form');

setProductsInLocalStorage();

const list = document.getElementById('ul');

for (let pet of array) {
    const li = createPet(pet);

    list.append(li);
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const data = new FormData(form);
//     const species = data.get('species');
//     const name = data.get('name');
//     const picture = data.get('picture');
//     const fluffy = data.get('fluffy');
//     const classification = data.get('classification');
//     const price = data.get('price');
//     const quantity = 0,

//     // const newPetArray = [species, name, picture, fluffy, classification, price, quantity];

//     // addNewProductToLocalStorage(newPetArray);

// })

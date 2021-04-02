import { createPet } from '../test/utils.js';
import { setProductsInLocalStorage, addNewProductToLocalStorage, getProducts } from './products-local-storage.js';
const form = document.querySelector('#my-form');

setProductsInLocalStorage();

const list = document.getElementById('ul');

// Grabs list of products from local storage and populates product objects
function populate() {
    for (let pet of getProducts()) {
        const li = createPet(pet);

        list.append(li);
    }
}
populate();

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const data = new FormData(form);
//     const species = data.get('species');
//     const name = data.get('name');
//     const picture = data.get('picture');
//     const fluffy = data.get('fluffy');
//     const classification = data.get('classification');
//     const price = data.get('price');
//     const quantity = 0;

//     const newPetArray = [species, name, picture, fluffy, classification, price, quantity];

//     Planning on writing an alert or block if forms are not filled out
//     if(newPetArray[i] === null){

//     }

//     addNewProductToLocalStorage(newPetArray);
//     populate();
// })

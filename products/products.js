import { createPet } from '../test/utils.js';
import { array } from '../products.js';
import { createBoolean } from '../test/utils.js';
import { setProductsInLocalStorage, addNewProductToLocalStorage, getProducts } from './products-local-storage.js';
const form = document.querySelector('#my-form');

setProductsInLocalStorage();

const list = document.getElementById('ul');

// Grabs list of products from local storage and populates product objects
for (let pet of array) {
    const li = createPet(pet);

    list.append(li);
}



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const species = data.get('species');
    const petName = data.get('name');
    const picture = data.get('picture');

    const elFluffy = data.get('fluffy');
    const parsedFluffy = createBoolean(elFluffy);

    const classification = data.get('classification');

    const elPrice = data.get('price');
    const priceNumber = Number(elPrice);

    const newQuantity = 0;

    const newPetArray = {
        id: species,
        name: petName,
        image: picture,
        isFluffy: parsedFluffy,
        category: classification,
        price: priceNumber,
        quantity: newQuantity

    };

    // Planning on writing an alert or block if forms are not filled out
    // if (newPetArray[i] === null) {

    // }
    addNewProductToLocalStorage(newPetArray);
    const newPet = createPet(newPetArray);
    list.append(newPet);
    form.reset();
})

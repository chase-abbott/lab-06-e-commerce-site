import { array } from '../products.js';


let hardCodedProducts = array;
const PRODUCTS = 'PRODUCTS';

export function setProductsInLocalStorage() {
    let localStorageProducts = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageProducts) {
        const productString = JSON.stringify(hardCodedProducts);

        localStorage.setItem(PRODUCTS, productString);

        localStorageProducts = hardCodedProducts;
    }

    return localStorageProducts;
}

export function addNewProductToLocalStorage(newPetArray) {
    let localStorageProducts = JSON.parse(localStorage.getItem(PRODUCTS));

    localStorageProducts.push(newPetArray);

    const newPetArrayString = JSON.stringify(localStorageProducts);

    localStorage.setItem(PRODUCTS, newPetArrayString);

    return localStorageProducts;
}

export function getProducts() {
    let localStorageProducts = JSON.parse(localStorage.getItem(PRODUCTS));

    return localStorageProducts;
}

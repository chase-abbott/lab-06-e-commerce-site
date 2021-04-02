import { array } from '../products.js';

let hardCodedProducts = array;
const PRODUCTS = 'PRODUCTS';

export function addProductsToLocalStorage() {
    let localStorageProducts = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageProducts) {
        const productString = JSON.stringify(hardCodedProducts);

        localStorage.setItem(PRODUCTS, productString);

        localStorageProducts = hardCodedProducts;
    }

    return localStorageProducts;
}

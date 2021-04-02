import { findById } from './test/utils.js';

const CART = 'CART';

export function setCart(parsedCart) {
    const cartString = JSON.stringify(parsedCart);

    localStorage.setItem(CART, cartString);
}

export function getCart() {
    const cartString = localStorage.getItem(CART);

    const parsedCart = JSON.parse(cartString);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }

}


export function addItemToCart(productId) {
    const cart = getCart();

    const matchingPet = findById(cart, productId);

    if (matchingPet) {
        matchingPet.quantity++;
    } else {
        const item = {
            id: productId,
            quantity: 1
        };
        cart.push(item);
    }

    setCart(cart);
}

export function removeItem(productId) {
    const cart = getCart();

    const matchingPet = findById(cart, productId);

    if (matchingPet) {
        matchingPet.quantity--;
    }

    setCart(cart);
}

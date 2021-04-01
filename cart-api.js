
const CART = 'CART';

export function setCart(parsedCart) {
    const cartString = JSON.stringify(parsedCart);

    localStorage.setItem(CART, cartString);
}

export function getCart() {
    const cartString = localStorage.getItem(CART);

    const parsedCart = JSON.parse(cartString);

    return parsedCart;
}


export function addItemToCart(productId) {

}
import { getCart, setCart, addItemToCart } from '../cart-api.js';
import { addProductsToLocalStorage } from '../products/products-local-storage.js';
import { array } from '../products.js';

const products = array;

const cart = [
    {
        id: 2,
        quantity: 4
    },
    {
        id: 3,
        quantity: 1
    }
];



const test = QUnit.test;

test('It should take in a cart value and put it in localStorage ', (expect) => {

    setCart(cart);

    const expected = JSON.parse(localStorage.getItem('CART'))

    expect.deepEqual(cart, expected);
});

test('It should get the value of cart from localStorage', (expect) => {

    const cartString = JSON.stringify(cart);

    localStorage.setItem('CART', cartString);

    const testCart = getCart();

    expect.deepEqual(testCart, cart);
});

test('It should add an item into the cart ', (expect) => {

    const cartString = JSON.stringify(cart);
    localStorage.setItem('CART', cartString);

    addItemToCart(20);
    const expected = [
        {
            id: 2,
            quantity: 4
        },
        {
            id: 3,
            quantity: 1
        },
        {
            id: 20,
            quantity: 1
        }

    ];

    const actual = JSON.parse(localStorage.getItem('CART'))

    expect.deepEqual(actual, expected)
});

test('It should put the hard coded products into local storage', (expect) => {

    const stringyProducts = JSON.stringify(products);
    console.log(stringyProducts);

    localStorage.setItem('PRODUCTS', stringyProducts);

    const expected = JSON.parse(localStorage.getItem('PRODUCTS'));

    const actual = addProductsToLocalStorage();

    expect.deepEqual(actual, expected);
});

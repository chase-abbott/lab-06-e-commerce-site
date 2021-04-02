import { getCart, setCart, addItemToCart } from '../cart-api.js';
import { setProductsInLocalStorage, addNewProductToLocalStorage, getProducts } from '../products/products-local-storage.js';
import { array } from '../products.js';
import { removeItem } from './utils.js';

const products = array;

const cart = [
    {
        id: 2,
        quantity: 4
    },
    {
        id: 3,
        quantity: 2
    }
];



const test = QUnit.test;

test('It should take in a cart value and put it in localStorage ', (expect) => {

    setCart(cart);

    const expected = JSON.parse(localStorage.getItem('CART'));

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
            quantity: 2
        },
        {
            id: 20,
            quantity: 1
        }

    ];

    const actual = JSON.parse(localStorage.getItem('CART'));

    expect.deepEqual(actual, expected);
});

test('It should put the hard coded products into local storage', (expect) => {

    const stringyProducts = JSON.stringify(products);

    localStorage.setItem('PRODUCTS', stringyProducts);

    const expected = JSON.parse(localStorage.getItem('PRODUCTS'));

    const actual = setProductsInLocalStorage();

    expect.deepEqual(actual, expected);
});

test('It should take a new pet and add it into the local storage product array', (expect) => {

    setProductsInLocalStorage();

    const newProduct = {
        id: 'Duck',
        name: 'Kevin',
        isFluffy: false,
        category: 'Bird',
        price: 35,
    };
    array.push(newProduct);

    const stringArray = JSON.stringify(array);

    localStorage.setItem('PRODUCT', stringArray);

    const actual = addNewProductToLocalStorage(newProduct);

    const expected = JSON.parse(localStorage.getItem('PRODUCT'));

    expect.deepEqual(actual, expected);
});

test('It should get the value of PRODUCT from local storage and parse it', (expect) => {

    setProductsInLocalStorage();

    const expected = array;

    const actual = getProducts();

    expect.deepEqual(actual, expected);
});

test('It should remove an item from the cart ', (expect) => {

    const expected = [
        {
            id: 2,
            quantity: 4
        },
        {
            id: 3,
            quantity: 1
        }
    ]

    const stringyCart = JSON.stringify(cart);

    localStorage.setItem('CART', stringyCart);

    removeItem(3);

    const actual = JSON.parse(localStorage.getItem('CART'));

    expect.deepEqual(actual, expected);
});

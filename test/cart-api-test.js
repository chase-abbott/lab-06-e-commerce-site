import { getCart, setCart } from '../cart-api.js';



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

    const expected = JSON.parse(localStorage.getItem(cart));

    const actual = setCart(cart);

    expect.equal(actual, expected);
});

test('It should get the value of cart from localStorage', (expect) => {

    const expected = JSON.stringify(cart);

    localStorage.setItem('CART', expected);

    const actual = getCart();

    expect.deepEqual(actual, cart);
});

// test('It should take in a cart value and put it in local storage ', (expect) => {

//     const expected = JSON.parse(localStorage.getItem(cart));

//     const actual = setCart(cart);

//     expect.equal(actual, expected)
// });
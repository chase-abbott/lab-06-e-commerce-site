// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createPet, findById, calcItemTotal } from './utils.js';
import { array } from '../products.js';



const test = QUnit.test;

test('It should take in a pet object and return an li element', (expect) => {

    const expected = `<li class="Dog" style="background: green;"><p>Dog</p><p class="name">Spot</p><img src="/assets/dog.png"><p>Fluffy</p><p>Mammal</p><p>$100.00</p><button>Add to Cart!</button></li>`
    const actual = createPet({
        id: 'Dog',
        name: 'Spot',
        image: '/assets/dog.png',
        isFluffy: true,
        category: 'Mammal',
        price: 100
    });

    expect.equal(actual.outerHTML, expected);
});

test('It should take in an array and an id and find the matching object in the array', (expect) => {
    const dog = array[0];

    const expected = dog;
    const actual = findById(array, 'Dog');

    expect.equal(actual, expected);
});

test('It should take in a quantity and a  and return the total', (expect) => {
    const expected = 2;
    const actual = calcItemTotal(1, 2);

    expect.equal(actual, expected);
});

// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createPet } from './utils.js';


const test = QUnit.test;

test('It should take in a pet object and return an li element', (expect) => {

    const expected = `<li class="Dog" style="background: green;"><p>Dog</p><p class="name">Spot</p><img src="/assets/dog.png"><p>Fluffy</p><p>Mammal</p><p>$100.00</p><button>Add to Cart!</button></li>`
    const actual = createPet({
        species: 'Dog',
        name: 'Spot',
        image: '/assets/dog.png',
        isFluffy: true,
        category: 'Mammal',
        price: 100
    });

    expect.equal(actual.outerHTML, expected);
});

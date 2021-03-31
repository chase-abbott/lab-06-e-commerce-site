
export function createPet(pet) {

    const li = document.createElement('li');

    // li.classList.add(pet);
    li.classList.add(pet.id);
    li.style.background = 'green';

    const pType = document.createElement('p');

    pType.textContent = pet.id;

    // <p> Spot </p>
    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = pet.name;

    // <img src="../assets/dog.png">
    const image = document.createElement('img');

    image.src = pet.image;

    // <p> Fluffy </p>
    const pFluffy = document.createElement('p');

    pFluffy.textContent = pet.isFluffy ? 'Fluffy' : 'Scaley';

    // <p> Mammal </p>
    const pCategory = document.createElement('p');

    pCategory.textContent = pet.category;

    // <p> $100 </p>
    const pPrice = document.createElement('p');

    pPrice.textContent = pet.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // <button>Add to Cart</button>
    const button = document.createElement('button');

    button.textContent = 'Add to Cart!';

    li.append(pType, pName, image, pFluffy, pCategory, pPrice, button);

    return li;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(itemQuantity, itemPrice) {
    let total = 0;
    total = itemPrice * itemQuantity;
    return total;
}

export function renderLineItems(cartItem, pet) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = pet.id;
    tdQuantity.textContent = cartItem.quantity;
    const total = calcItemTotal(pet.price, cartItem.quantity);

    tdPrice.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function calcOrderTotal(cartArray, petArray) {
    let total = 0;

    for (let cart of cartArray) {
        const pet = findById(petArray, cart.id);
        const itemTotal = calcItemTotal(cart.quantity, pet.price);
        // total = calcItemTotal()
        total = itemTotal + total;
    }

    return total;
}

export function renderTotalRow(cartArray, petArray) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${calcOrderTotal(cartArray, petArray)}.00`;

    tr.append(td1, td2, td3);

    return tr;
}




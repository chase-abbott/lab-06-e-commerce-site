export function createPet(pet) {
    const list = document.getElementById('ul');
    const li = document.createElement('li');
    li.classList.add(pet.id);
    li.style.background = 'green';

    // <p id="dog"> Dog </p>
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

    pPrice.textContent = pet.price;

    // <button>Add to Cart</button>
    const button = document.createElement('button')

    button.textContent = 'Add to Cart!';

    li.append(pName, image, pFluffy, pCategory, pPrice, button)
    list.append(li);

    // return 'li';
}



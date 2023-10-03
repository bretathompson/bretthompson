

const cardContainer = document.querySelector('#cardContainer');

function addProducts() {
    let cardInfo = '';
    
    // cardContainer.innerHTML += `<div> ... </div`;

    products.forEach((individualCard) => {
      cardInfo += `
            <div class="card" id="cardNumber${individualCard.id}">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton" id="${individualCard.id}" type="button">Add to Cart</button>
                </div>
            </div>`;
    });

    cardContainer.innerHTML = cardInfo;
}

addProducts();


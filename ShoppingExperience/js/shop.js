



// <div class="card" id="cardNumber1">
//                 <img src="images/shop/thumbnails/ClownUmbrella_Thumb.jpg" alt="clownUmbrella">
//                 <div class="cardText">
//                     <h4>Clown Umbrella</h4>
//                     <p>A porcelain figurine of a clown holding an umbrella and riding a unicycle</p>
//                     <p>&dollar; 29.95</p>
//                     <button class="cartButton" type="button">Add to Cart</button>
//                 </div>
//             </div>
 

  // Select the cardContainer div
const cardContainer = document.querySelector('#cardContainer');

// Function to add products to the page
function addProducts() {
  // Iterate over each product in the products array
  products.forEach((individualCard) => {
    // Create a card element
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `cardNumber${individualCard.id}`;

    // Create an image element
    const img = document.createElement('img');
    img.src = individualCard.image;
    img.alt = individualCard.description;

    // Create a cardText div
    const cardText = document.createElement('div');
    cardText.className = 'cardText';

    // Create an h4 element for product name
    const productName = document.createElement('h4');
    productName.textContent = individualCard.name;

    // Create a p element for product description
    const productDescription = document.createElement('p');
    productDescription.textContent = individualCard.description;

    // Create a p element for product price
    const productPrice = document.createElement('p');
    productPrice.textContent = `$ ${individualCard.price}`;

    // Create a button element for adding to cart
    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'cartButton';
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.id = individualCard.id; // Set the id to match the product id

    // Append elements to the card
    card.appendChild(img);
    cardText.appendChild(productName);
    cardText.appendChild(productDescription);
    cardText.appendChild(productPrice);
    cardText.appendChild(addToCartButton);
    card.appendChild(cardText);

    // Append the card to the cardContainer
    cardContainer.appendChild(card);
  });
}

// Call the addProducts function to populate the page with products
addProducts();














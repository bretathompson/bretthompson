
const imagePath = "images/shop/thumbnails/";


const products = [
    {
      id: 1,
      image: imagePath + "ClownUmbrella_Thumb.jpg",
      name: "Clown Umbrella",
      description: "A porcelain figurine of a clown holding an umbrella and riding a unicycle",
      quantity: 1,
      price: 29.95,
    },

    {
      id: 2,
      image: imagePath + "ElephantFigurines_Thumb.jpg",
      name: "Elephant Figurines",
      description: "White elephant ceramic figurines decorated with various fine colors",
      quantity: 1,
      price: 18.95,
    },

    {
        id: 3,
        image: imagePath + "SquishyCaterpillar_Thumb.jpg",
        name: "Squishy Caterpillar",
        description: "A squashy, spiky, multi-colored caterpillar",
        quantity: 1,
        price: 9.99,
      },

      {
        id: 4,
        image: imagePath + "MiniCactus_Thumb.jpg",
        name: "Mini Cactus",
        description: "A miniature cactus in a pink vase",
        quantity: 1,
        price: 12.99,
      },

      {
        id: 5,
        image: imagePath + "Nanoblocks_Thumb.jpg",
        name: "Nano Nanoblocks",
        description: "The smallest connection blocks on the market",
        quantity: 1,
        price: 32.95,
      },

      {
        id: 6,
        image: imagePath + "CuteGoat_Thumb.jpg",
        name: "Cute Goat",
        description: "A small white ceramic goat",
        quantity: 1,
        price: 15.95,
      },

      {
        id: 7,
        image: imagePath + "LawnGnome_Thumb.jpg",
        name: "Lawn Gnome",
        description: "An angry lawn gnome holding a sign that says 'GO AWAY!",
        quantity: 1,
        price: 7.95,
      },

      {
        id: 8,
        image: imagePath + "BobRoss_Thumb.jpg",
        name: "Bob Ross",
        description: "A Bob Ross plastic figure holding a paint palette",
        quantity: 1,
        price: 18.95,
      },
    
  ];
  

//   // Select the cardContainer div
// const cardContainer = document.querySelector('#cardContainer');

// // Function to add products to the page
// function addProducts() {
//   // Iterate over each product in the products array
//   products.forEach((individualCard) => {
//     // Create a card element
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.id = `cardNumber${individualCard.id}`;

//     // Create an image element
//     const img = document.createElement('img');
//     img.src = individualCard.image;
//     img.alt = individualCard.description;

//     // Create a cardText div
//     const cardText = document.createElement('div');
//     cardText.className = 'cardText';

//     // Create an h4 element for product name
//     const productName = document.createElement('h4');
//     productName.textContent = individualCard.name;

//     // Create a p element for product description
//     const productDescription = document.createElement('p');
//     productDescription.textContent = individualCard.description;

//     // Create a p element for product price
//     const productPrice = document.createElement('p');
//     productPrice.textContent = `$ ${individualCard.price}`;

//     // Create a button element for adding to cart
//     const addToCartButton = document.createElement('button');
//     addToCartButton.className = 'cartButton';
//     addToCartButton.textContent = 'Add to Cart';
//     addToCartButton.id = individualCard.id; // Set the id to match the product id

//     // Append elements to the card
//     card.appendChild(img);
//     cardText.appendChild(productName);
//     cardText.appendChild(productDescription);
//     cardText.appendChild(productPrice);
//     cardText.appendChild(addToCartButton);
//     card.appendChild(cardText);

//     // Append the card to the cardContainer
//     cardContainer.appendChild(card);
//   });
// }

// // Call the addProducts function to populate the page with products
// addProducts();














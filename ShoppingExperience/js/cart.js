
const cartCardContainer = document.querySelector('#cartCardContainer');

function displayCartProducts() {   
    clearStorageAndCart(); 

    cartCardContainer.innerHTML = '';
    
    if (cart.length > 0) {
        // 6. Loop through the cart and display each item.
        cart.forEach((cartItem) => {
            const cartCard = createCartItem(cartItem.name, cartItem.description, `$${cartItem.price}`);
            cartCardContainer.appendChild(cartCard);
        });

        // 7. Call the removeFromCart function to enable item removal.
        removeFromCart();
    } else {
        // 8. Display a message if the cart is empty.
        cartCardContainer.innerHTML = '<p id="emptyCart" style="font-style: italic; margin: 0;">The cart is empty</p>';
    }
}

// 9. Call the displayCartProducts function.
displayCartProducts();



{/* <div class="cartCard">
    <div class="cartCardFlex">
        <img src="images/shop/thumbnails/ClownUmbrella_Thumb.jpg" alt="clownUmbrella">                
            <p class="cartTitle">Clown Umbrella</p>
            <p class="cartDescription">A porcelain figurine of a clown holding an umbrella and riding a unicycle</p>
            <div class="cartQuantity">
                <input type="number" value="1" min="1" max="5">
            </div>
            <p class="cartPrice">&dollar; 29.95</p>
    </div>                                
        <p class="textAlignRight removeMargins"><a href="#" class="removeLink">Remove</a></p>
                                            
</div>  */}


// 6. Add the following inside the IF statement:
    // a. Use a forEach loop to loop through the cart array
        // a1. Use an arrow function with a parameter of cartItem as the callback. The cartItem parameter will be used to loop over each individual cart item
    // b. Inside the forEach loop, use innerHTML with the cartCardContainer variable and the addition assignment operator to add the card 
    //  information to the page using a template literal. Move the copied code from task 1 inside the innerHTML statement to help you. Here is 
    //  what should be included:
        // b1. A div with the class of cartCard
        // b2. Inside cartCard, a div with the class of cartCardFlex
        // b3. Inside cartCardFlex, an image. Use a template string to display the cart items image property for the value of the src attribute 
        // and the description property as the value of the alt attribute
        // b4. Inside cartCardFlex directly below the image, a paragraph tag with the class of cartTitle. Display the name of the product inside 
        //  the paragraph using a template string
        // b5. Inside cartCardFlex directly below the cartTitle paragraph, a paragraph tag with the class of cartDescription. Display the description 
        // of the product inside the paragraph using a template string
        // b6. Inside cartCardFlex directly below the cartDescription paragraph, a div tag with a class of cartQuantity
            // b6.1. Inside cartQuantity, an <input> tag with the type of 'number', a value attribute assigned to the quantity property using a 
            //  template string, a min attribute set to '1', and a max attribute set to '5'
        // b7. Inside cartCardFlex directly below the cartQuantity div, a paragraph tag with a class of cartPrice. Display a dollar sign 
        //  (&dollar;) followed by a space and the price of the product inside the paragraph using a template string
        // b8. Directly below the cartCardFlex div, a paragraph tag with the classes of textAlignRight and removeMargins.
        // b9. Inside the paragraph tag, include an anchor tag with a class of removeLink.
            // b9.1. Assign an id attribute that links to the id of the item using a template string
            // b9.2. Set the href attribute's value to '#'
            // b9.3. The text between the opening and closing anchor tags should be 'Remove'
    // c. Directly below the innerHTML statement, call the removeFromCart( ) function. This makes it possible for the Remove button to 
        // remove items from the cart

// 7. Add an ELSE statement to the IF statement
    // a. We want to let the user know if the cart is empty. To do this, use innerHTML along with the cartCardContainer variable to set the inner 
    //  HTML to a paragraph tag with an id of 'emptyCart'. Inside the paragraph tags, include the text, 'The cart is empty'
        // a1. Let's add a little CSS to style this. In style.css add a style rule at the bottom for an id selector named emptyCart. Change the 
        //  text to italic text and add a margin of zero for all sides
        
// 8. Call the displayCartProducts( ) function directly below its function declaration in cart.js
// 
// The cart.html page should now display the correct products that were added using the shop.html page. In this example, the first 3 products were 
// added to the cart:




// // Function to create a cart item element
// function createCartItem(title, description, price) {
//     const cartCard = document.createElement('div');
//     cartCard.classList.add('cartCard');

//     const cartCardFlex = document.createElement('div');
//     cartCardFlex.classList.add('cartCardFlex');

//     // Create and configure elements for the item
//     const img = document.createElement('img');
//     img.src = 'images/shop/thumbnails/ClownUmbrella_Thumb.jpg';
//     img.alt = 'clownUmbrella';

//     const cartTitle = document.createElement('p');
//     cartTitle.classList.add('cartTitle');
//     cartTitle.textContent = title;

//     const cartDescription = document.createElement('p');
//     cartDescription.classList.add('cartDescription');
//     cartDescription.textContent = description;

//     const cartQuantity = document.createElement('div');
//     cartQuantity.classList.add('cartQuantity');
//     const quantityInput = document.createElement('input');
//     quantityInput.type = 'number';
//     quantityInput.value = 1; // You can set the default quantity here
//     quantityInput.min = 1;
//     quantityInput.max = 5;
//     cartQuantity.appendChild(quantityInput);

//     const cartPrice = document.createElement('p');
//     cartPrice.classList.add('cartPrice');
//     cartPrice.textContent = price;

//     // Create and configure the "Remove" link
//     const removeLink = document.createElement('p');
//     removeLink.classList.add('textAlignRight', 'removeMargins');
//     const link = document.createElement('a');
//     link.href = '#';
//     link.textContent = 'Remove';
//     link.classList.add('removeLink');
//     removeLink.appendChild(link);

//     // Assemble the elements
//     cartCardFlex.appendChild(img);
//     cartCardFlex.appendChild(cartTitle);
//     cartCardFlex.appendChild(cartDescription);
//     cartCardFlex.appendChild(cartQuantity);
//     cartCardFlex.appendChild(cartPrice);
//     cartCardFlex.appendChild(removeLink);
//     cartCard.appendChild(cartCardFlex);

//     return cartCard;
// }

// // Example usage:
// const cartContainer = document.getElementById('cartCardContainer');
// const item = createCartItem('Clown Umbrella', 'A porcelain figurine of a clown holding an umbrella and riding a unicycle', '$29.95');
// cartContainer.appendChild(item);


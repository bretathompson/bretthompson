
let mystring = "I am Ironman!",
    tomatch = /Iron/;

if (mystring.search(tomatch)) {
    alert("Iron found at position " + mystring.search(tomatch) + "!");
} else {
    alert("Sorry, no Iron in your string.");
}




let cars = [
    "back2.jpg",
    "divo.jpg",
    "gtr.jpg",
    "laferrari.jpg",
    "lambor.jpg",
    "mclaren.jpg",
    "rolls.jpg",
    "zonda.jpg"    
];

let captions = [
    "Are you ready to go Back 2 the future",
    "Try the most expensive car in the world - the Divo",
    "Get maximum performance for less with a GTR",
    "Are you a Ferrari fan?",
    "How about a bedroom poster of a Lambo",
    "Style, class, and beauty all in one with a McLaren",
    "Ride in pure luxury with a Rolls",
    "Make people turn their heads with a Zonda" 
];
   
    
    const slideimages = document.getElementById("slideImages");
    const caption = document.getElementById("caption");

    let currentIndex = 0;
    
    function changeImage() {
        const randomIndex = Math.floor(Math.random() * cars.length);
        slideimages.src = cars[randomIndex];
        caption.textContent = captions[randomIndex];
    }
    
    setInterval(changeImage, Math.floor(Math.random() * 3000) + 2000);


 

let im = document.getElementById("pic1");

    im.addEventListener("mouseover", function() {
        im.src = image1.gif;
    }, false);

    im.addEventListener("mouseout", function() {
        im.src = "image2.gif";
    }, false);



    // this code I think does what it should be doing 
    
// document.getElementById("pic1").addEventListener("mouseover", changeimage);
// document.getElementById("pic1").addEventListener("mouseout", changeimage2);

// function changeimage() {
//     let image = document.getElementById("pic1").src = "image1.gif";
// }

// function changeimage2() {
//     let image = document.getElementById("pic1").src = "image2.gif";
// }



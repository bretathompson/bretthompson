
let has_digits = document.getElementById("has_digits");
has_digits.addEventListener("submit", function(event) {
    let has_num = document.getElementById("user_text").value,
        tomatch = /\d+/;
    event.preventDefault(); 
    
    if (tomatch.test(has_num)) {
        alert("Your entry contained one or more numbers!");
    } else {
        alert("Your entry did not contain any numbers!");
    }
}, false);







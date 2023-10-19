
document.addEventListener("DOMContentLoaded", function () {

    const yellowPhone = document.getElementById("yellowPhone");
    const yellowButton = document.getElementById("yellowButton");

    yellowButton.addEventListener("click", function (event) {
        event.preventDefault();

        const yellowNumber = yellowPhone.value;
        const yellowPattern = /^\d{3} \d{3} \d{4}$/;

        if (yellowPattern.test(yellowNumber)) {
            alert("Yellow Form: Phone number is good.");
        } else {
            alert("Yellow Form: Phone number is bad.");
        }
    });

 
    const bluePhone = document.getElementById("bluePhone");
    const blueButton = document.getElementById("blueButton");

    blueButton.addEventListener("click", function (event) {
        event.preventDefault();

        // blueNumber = document.getElementById("bluePhone").value
        const blueNumber = bluePhone.value;
        const bluePattern = /^\(\d{3}\)\d{3}-\d{4}$/;

        if (bluePattern.test(blueNumber)) {
            alert("Blue Form: Phone number is good.");
        } else {
            alert("Blue Form: Phone number is bad.");
        }
    });
    
});




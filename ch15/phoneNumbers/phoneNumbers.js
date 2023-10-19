
document.addEventListener("DOMContentLoaded", function () {

    const yellowPhone = document.getElementById("yellowPhone");
    const yellowButton = document.getElementById("yellowButton");

    yellowButton.addEventListener("click", function (event) {
        event.preventDefault();

        const yellowNumber = yellowPhone.value;
        const yellowPattern = /^\d{3} \d{3} \d{4}$/;

        if (yellowPattern.test(yellowNumber)) {
            alert("Your phone number was formatted correctly.");
        } else {
            alert("The phone number must be formatted as follows: 888 888 8888.");
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
            alert("Your phone number was formatted correctly.");
        } else {
            alert("The phone number must be formatted as follows: (888)888-8888.");
        }
    });
    
});




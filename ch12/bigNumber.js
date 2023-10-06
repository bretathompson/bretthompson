document.addEventListener("DOMContentLoaded", function () {
    const numberForm = document.getElementById("numberForm");
    const bigNumberDiv = document.getElementById("bigNumber");

    numberForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input from the form
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);

        // Check if the input is valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            bigNumberDiv.innerHTML = "Please enter valid numbers.";
        } else {
            // Determine the largest number using Math.max
            const largestNumber = Math.max(num1, num2);

            // Display the result
            if (num1 === num2) {
                bigNumberDiv.innerHTML = "Both numbers are equal.";
            } else {
                bigNumberDiv.innerHTML = `${largestNumber} is larger than ${num1 === largestNumber ? num2 : num1}`;
            }
        }
    });
});

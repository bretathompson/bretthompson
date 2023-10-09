
document.addEventListener("DOMContentLoaded", function () {
    const numberForm = document.getElementById("numberForm");
    const bigNumber = document.getElementById("bigNumber");

    numberForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            bigNumber.innerHTML = "Please enter valid numbers.";
        } else {
            const lgNumber = Math.max(num1, num2);

            if (num1 === num2) {
                bigNumber.innerHTML = "Both numbers are equal.";
            } else {
                bigNumber.innerHTML = `${lgNumber} is larger than ${num1 === lgNumber ? num2 : num1}`;
            }
        }
    });
});


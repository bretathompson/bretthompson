
// Chatgbt's code
// document.addEventListener("DOMContentLoaded", function () {
//     const numberForm = document.getElementById("numberForm");
//     const bigNumberDiv = document.getElementById("bigNumber");

//     numberForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         // Get user input from the form
//         const num1 = parseInt(document.getElementById("num1").value);
//         const num2 = parseInt(document.getElementById("num2").value);

//         // Check if the input is valid numbers
//         if (isNaN(num1) || isNaN(num2)) {
//             bigNumberDiv.innerHTML = "Please enter valid numbers.";
//         } else {
//             // Determine the largest number using Math.max
//             const largestNumber = Math.max(num1, num2);

//             // Display the result
//             if (num1 === num2) {
//                 bigNumberDiv.innerHTML = "Both numbers are equal.";
//             } else {
//                 bigNumberDiv.innerHTML = `${largestNumber} is larger than ${num1 === largestNumber ? num2 : num1}`;
//             }
//         }
//     });
// });

// my code from text book example

let bigNum = document.getElementById('numberForm');
bigNum.addEventListener('submit', function(event) {
    let num1 = document.getElementById('num1').value,
        num2 = document.getElementById('num2').value,
        lgnum = 0,
        smnum = 0;
    num1 = (+num1 === 0) ? 0 : +num1 || false;
    num2 = (+num2 === 0) ? 0 : +num2 || false;    
        event.preventDefault();

        if ((num1 !== false) && (num2 !== false)) {
            lgnum = Math.max(num1, num2);
            smnum = Math.min(num1, num2);
            if (lgnum === smnum) {
                alert("Those two numbers are equal!");
            } else {
                bigNumber.innerHTML = (lgnum + ' is larger than ' + smnum);
            }
    } else {
        alert('Please enter only numeric valuse.');
    }
}, false);
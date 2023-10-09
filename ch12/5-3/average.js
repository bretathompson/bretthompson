
function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function calSum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function calAvg(num1, num2, num3) {
    return Math.round((num1 + num2 + num3) / 3);
}


function displayNums() {
    const num1 = randomNum();
    const num2 = randomNum();
    const num3 = randomNum();
    const sum = calSum(num1, num2, num3);
    const average = calAvg(num1, num2, num3);

    document.getElementById("average").innerHTML = `
        <p>Number 1: ${num1}</p>
        <p>Number 2: ${num2}</p>
        <p>Number 3: ${num3}</p>
        <p>The total of the numbers is ${sum}</p>
        <p>The average of the numbers is ${average}</p>`;
}
displayNums();



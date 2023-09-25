
document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
    document.write(count + ". I am part of a loop!<br>");

    for (let nestcount = 1; nestcount < 3; nestcount++) {
        document.write("I keep interrupting in pairs!<br>");
    }
}
document.write("Now we are back to the plain text.");





// for (let count = 1; count < 11; count++) {
//     document.write(`The main count is ${count}`);
//     document.write(`The main count is ${nestcount}`);

//     for (let nestcount = 1; nestcount < 3; nestcount++) {
//         document.write(`The main count is ${count}`);
//         document.write(`The main count is ${nestcount}`);
//     }
// }


// for (let count = 1; count < 11; count++) {
//     if (count === 5) {
//         document.write("The loop is halfway done!<br>");
//     } else {
//         document.write("I am part of a loop!<br>");
//     }
// }
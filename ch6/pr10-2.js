
let rows = window.prompt("Enter number of rows:");   
    columns = window.prompt("Enter number of colums:");

function hashtagSquare(rows, columns) {

    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= columns; j++) {
            pattern = pattern + '#';
        }
        document.write(pattern, '<br>');
    }
}
hashtagSquare(rows, columns);



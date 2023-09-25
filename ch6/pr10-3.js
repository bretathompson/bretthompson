
let beginningNumber = window.prompt("Enter starting number:");   
    endingNumber = window.prompt("Enter ending number:");

function fizzBuzz(beginningNumber, endingNumber) {

    for (let i = beginningNumber; i <= endingNumber; i++) {
        let result = '';
                
        if (i % 4 === 0) {
            result = result + 'fizz';
        }
        
        if (i % 5 === 0) {
            result = result + 'buzz';
        }
        
        if (result === ''){
            result = i;
        }
        
    document.write(result + "<br>");
    }
}
fizzBuzz(beginningNumber, endingNumber);



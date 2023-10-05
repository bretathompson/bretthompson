let max_form = document.getElementById('getmax');
max_form.addEventListener('submit', function(event) {
    let num1 = document.getElementById('num1').value,
        num2 = document.getElementById('num2').value,
        largenum = 0,
        smallnum = 0;
    num1 = (+num1 === 0) ? 0 : +num1 || false;
    num2 = (+num2 === 0) ? 0 : +num2 || false;    
        event.preventDefault();

        if ((num1 !== false) && (num2 !== false)) {
            largenum = Math.max(num1, num2);
            smallnum = Math.min(num1, num2);
            if (largenum === smallnum) {
                alert("Those two numbers are equal!");
            } else {
                alert(largenum + ' is larger than ' + smallnum);
            }
    } else {
        alert('Please enter only numeric valuse.');
    }
}, false);



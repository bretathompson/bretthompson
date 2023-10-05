let root_form = document.getElementById('getroot');
root_form.addEventListener('submit', function(event) {
    let thenum = document.getElementById('sr_num').value;
    thenum = !isNaN(thenum) ? thenum : false;
    event.preventDefault();
        if (!thenum || (thenum.length < 1)) {
            alert('Input is required and must be numeric!');
            return;
    } else if (thenum < 0) {
        alert('Hey! I said to enter a positive number! Try again.');
        return;
    } else {
        let theroot = Math.sqrt(thenum);
        alert('The square root of  ' + thenum + ' is ' + theroot);
    }
}, false);



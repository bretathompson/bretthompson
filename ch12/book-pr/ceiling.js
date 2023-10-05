let ceil_form = document.getElementById('getceiling');
ceil_form.addEventListener('submit', function(event) {
    let num = document.getElementById('num').value,
    ceiling = 0;
    num = !isNaN(num) ? num : false;
    event.preventDefault();

    if (num !== false) {
        ceiling = Math.ceil(num);
        alert('The ceiling of ' + num + ' is ' + ceiling);
    } else {
        alert('Please enter only numeric values');
    }
}, false);



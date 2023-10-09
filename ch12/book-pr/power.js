
let pow_form = document.getElementById('getpow');
pow_form.addEventListener('submit', function(event) {
    let base = document.getElementById('base').value,
    exp = document.getElementById('exp').value
    result = 0;
    base = +base || false;
    exp = +exp || false;
    event.preventDefault();
    if ((base !== false) && (exp !== false)) {
        result = Math.pow(base, exp);
        alert(base + ' to the power of ' + exp + ' is ' + result);
    } else {
        alert('Please enter only numeric values');
    }
}, false);



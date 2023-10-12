
document.addEventListener('DOMContentLoaded', function() {
    const zipCode = document.getElementById('zipCode');
    const localzip = document.getElementById('localzip');
    const result = document.getElementById('result');
    
    zipCode.addEventListener('submit', function(event) {
        event.preventDefault();

        const zipNumber = localzip.value.trim();
        
        const zipPattern = /^\d{5}-\d{4}$/;
        
        if (zipPattern.test(zipNumber)) {
            result.textContent = `The Entry, ${zipNumber} is a Valid entry!`;
            result.classList.add('valid');
            result.classList.remove('invalid');
        } else {
            result.textContent = `The Entry, ${zipNumber} is not Valid. Please try again`;
            result.classList.add('invalid');
            result.classList.remove('valid');
        }
    });
});





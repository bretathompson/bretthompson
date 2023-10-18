
let my_form = document.getElementById("my_form");
    subm = document.getElementById("subm");
    subm.addEventListener("click", function(event) {
        let email = document.getElementById("email").value;
        event.preventDefault();
        my_form.submit();
    }, false);





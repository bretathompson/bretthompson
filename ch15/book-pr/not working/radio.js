

let s_form = document.getElementById("signup_form");

    s_form.addEventListener("submit", function(event) {
        let food_array = document.getElementById("food");
        selection_made = false;
        for (let i = 0; i < food_array.length; i++) {
            if (food_array[i].checked) {
                selection_made = true;
                break;
            }
        } if (!selection_made) {
            event.preventDefault();
            alert('Error: A favorite food must be selected');
        }
    }, false);
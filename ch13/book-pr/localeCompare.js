
let comp_string = "orange";
    new_string = "apple";
    pos = comp_string.localeCompare(new_string);
    if (pos < 0) {
        alert(comp_string + " comes before " + new_string);
    } else if (pos > 0) {
        alert(comp_string + " comes after " + new_string);
    } else {
        alert("The strings are equal");
    }







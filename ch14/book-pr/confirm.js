
let s_link = document.getElementById("search_link");
s_link.addEventListener("click", function(event) {
    let is_sure = confirm("Are you sure you want to leave?");
        if (is_sure === false) {
            event.preventDefault();
            alert("OK. You can stay here.");
        }
}, false);





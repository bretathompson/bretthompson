

let theguest = setTimeout(function () {
    alert("Sign my guest book NOW!");
}, 3000);

noalert.addEventListener("click", function() {
    clearTimeout(theguest);
}, false);


let madness = setInterval (function() {
    alert("Am I bothering you yet?");
}, 3000);

let stop_it = document.getElementById("stop_it");
    stop_it.addEventListener("click", function(event) {
        event.preventDefault();
            clearInterval(madness);
    }, false);





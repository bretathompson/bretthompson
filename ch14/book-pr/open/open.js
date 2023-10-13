

let nw_win = document.getElementById("nwin");

nw_win.addEventListener("click", function(event) {
    event.preventDefault();
    window.open("newpage.html","cool","width=400,height=300,status=yes");
}, false);




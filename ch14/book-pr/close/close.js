


let nw_win = document.getElementById("nwin");
    cs_win = document.getElementById("cwin");
    mywin = '';

nw_win.addEventListener("click", function(event) {
    event.preventDefault();
    mywin = window.open("closenewpage.html","cool","width=400,height=300,status=yes");
}, false);

cs_win.addEventListener("click", function(event) {
    event.preventDefault();
    mywin.close();
}, false);






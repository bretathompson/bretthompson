
function set_it() {
    let name = prompt("Enter your name:");
        let expdate = new Date();
        expdate.setDate(expdate.getDate() + 7); 
        document.cookie = "username=" + name + "; expires=" + expdate.toUTCString();
}

function read_it() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith("username=")) {
            let name = cookie.substring("username=".length);
            document.getElementById("greeting").innerHTML = "Welcome, " + name + "!";
            break;
        }
    }
}

if (document.cookie.split(';').some(function(item) {
    return item.trim().startsWith("username=");
})) {
    read_it();
} else {
    set_it();
    read_it();
}


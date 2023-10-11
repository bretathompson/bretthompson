
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


-------------------------------------------------------------------------------------


function set_it() {
    let name = prompt("Enter your name", "");
    

        let text = "username=" + encodeURIComponent(name);
        let expdate = "; expires=Mon, 1 Jan 2024 00:00:01 UTC";
        text += expdate;
        document.cookie = text;
    
}

function read_it() {
    let cookie = document.cookie;
    let propval = cookie.split(';');
    
    for (let i = 0; i < propval.length; i++) {
        let item = propval[i].trim();
        if (item.startsWith("username=")) {
            let name = decodeURIComponent(item.substring("username=".length));
            document.getElementById("greeting").innerHTML = "Welcome, " + name + "!";
            return;
        } else {
            set_it();
            read_it();
        }
    }
  
}
// Call read_it to check for and display the cookie.
read_it();
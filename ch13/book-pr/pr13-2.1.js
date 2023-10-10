
function set_it() {
    let name = prompt("Enter your name", "");    
    text = "new_cookie" + encodeURIComponent(name),
    expdate = ";expires=Mon, 1 Jan 2024 00:00:01 UTC";
    text += expdate;
    document.cookie = text;
}
function read_it() {
    let cookie = document.cookie;
    propval = cookie.split(';');
    
    if (document.cookie.split(';').some(function(item) {
        return item.trim().startsWith("username=");
    })) {
        read_it();
        let name = cookie.substring("username=".length);
        document.getElementById("greeting").innerHTML = "Welcome, " + name + "!";
    } else {
        set_it();
        read_it();
    }
}

// https://www.w3schools.com/js/js_cookies.asp


function set_it() {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = ";" + expires + ";path=/";
}

function read_it() {
    let name = getCookie("username");
    if (name != "") {
        alert("Welcome  " + name + "!");
    } else {
        name = prompt("Please enter your name:", "");
        if (name != "" && name != null) {
            setCookie("username", name, 365);
        }
    }
}





// a. create a function named set_it() that will set a cookie. Set the expiration to a future date.
// allow the viewer to enter a name in a prompt and then use the viewr's entry in the cookie. 
// b. create a function named read_it() that will check whether the cookie exists and, if so, read 
// the cookie and write the name on the page in the following format (replace<name> with the name read from the cookie):
//     welcome, <name>!
// c. if the cookie exists, call the read_it() function. if the cookie doesn't exist, call the set_it() followed by the 
// read_it() function.

function set_it() {
    let name = prompt("Enter your name", "");    
    text = "new_cookie" + encodeURIComponent(name),
    expdate = "-expires=Mon, 1 Jan 2024 00:00:01 UTC";
    text += expdate;
    document.cookie = 'hello';
    
// alert(document.cookie);
read_it();
}
set_it();

function read_it() {
    let cookie = document.cookie;
    //    alert(cookie);

        let name = cookie.substring("new_cookie=".length);
        document.getElementById("greeting").innerHTML = "Welcome, " + name + "!";
}








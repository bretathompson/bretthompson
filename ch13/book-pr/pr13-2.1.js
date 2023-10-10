
// function set_it() {
//     let name = prompt("Enter your name", "");    
//     text = "new_cookie" + encodeURIComponent(name),
//     expdate = ";expires=Mon, 1 Jan 2024 00:00:01 UTC";
//     text += expdate;
//     document.cookie = text;
// }

// function read_it() {
//     let cookie = document.cookie;
//     propval = cookie.split(';');
    
//     if (document.cookie.split(';').some(function(item) {
//         item.trim().startsWith("username=");
//     })) {
//         read_it();
//         let name = cookie.substring("username=".length);
//         document.getElementById("greeting").innerHTML = "Welcome, " + name + "!";
//     } else {
//         set_it();
//         read_it();
//     }
// }


// https://www.w3schools.com/js/js_cookies.asp

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24* 60 * 60 * 1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
// function read_it() {
//     let username = getCookie("username");
//     if (username != "") {
//         alert("Welcome  " + username + "!");
//     } else {
//         username = prompt("Please enter your name:", "");

//         if (username != "" && username != null) {
//             setCookie("username", username, 365);
//         }
//     }
// }





// a. create a function named set_it() that will set a cookie. Set the expiration to a future date.
// allow the viewer to enter a name in a prompt and then use the viewr's entry in the cookie. 
// b. create a function named read_it() that will check whether the cookie exists and, if so, read 
// the cookie and write the name on the page in the following format (replace<name> with the name read from the cookie):
//     welcome, <name>!
// c. if the cookie exists, call the read_it() function. if the cookie doesn't exist, call the set_it() followed by the 
// read_it() function.




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

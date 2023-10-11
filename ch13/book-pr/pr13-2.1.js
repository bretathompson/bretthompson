
function set_it() {
    let name = prompt("Enter your name", "");    
    text = "new_cookie" + encodeURIComponent(name),
    expdate = "-expires=Mon, 1 Jan 2024 00:00:01 UTC";
    text += expdate;
    document.cookie = 'hello';
    
alert(document.cookie);
read_it();
}
set_it();

function read_it() {
    let cookie = document.cookie;
       alert(cookie);

    // if (document.cookie.split('-').some(function(item) {
    //     item.trim().startsWith("new_cookie=");
    // })) {
        let name = cookie.substring("new_cookie=".length);
        document.getElementById("greeting").innerHTML = "Welcome, " + name + "!";
    // } else {
    //      set_it();
    //     read_it();
    // }
}


// https://www.w3schools.com/js/js_cookies.asp

// function set_it() {
//     let name = prompt("Enter your name", " ");

//     const date = new Date();
//     date.setTime(date.getTime() + (1*24* 60 * 60 * 1000));
//     // let expires = "expires="+ date.toUTCString();
//     document.cookie = "username=John Smith - expires=Thu, 18 Dec 2013 12:00:00 UTC - path=/"
//     let decodedCookie = decodeURIComponent(document.cookie);

//     let ca = decodedCookie.split('-');

//     console.log(document.cookie);
//   }
// set_it();

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

//         if (username != "" && username != null) {
//             read_it("username", username, 365);
//         }
//     }
// }



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


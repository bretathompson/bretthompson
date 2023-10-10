
function getname() {
    let tomatch = /^[A-Za-z]+\s[A-Za-z]+$/,
        toreplace = /\b[A-Za-z]/gi,
        thename = prompt("Enter your first and last name", "");
    
        if (tomatch.test(thename)) {
            newname = thename.replace(toreplace, "Z");
            alert("Now your name is " + newname);
        } else {
            alert("name invalid. Please Try Again");
            getname();
        }
 }
 getname();







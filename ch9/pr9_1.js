

let titleValue = document.getElementById("div1").getAttribute("title");
window.alert(titleValue);

let newDiv = document.createElement("div");
newDiv.textContent = "see you!";
newDiv.setAttribute("title", "Lucky!");

div1.appendChild(newDiv);




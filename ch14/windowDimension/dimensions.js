
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("windowButton");
    const size = document.getElementById("windowSize");

    button.addEventListener("click", function() {
        const width = window.outerWidth;
        const height = window.outerHeight;

        size.innerHTML = `This window is ${width} pixels wide!<br>
            This window is ${height} pixels high!<br>`;

        if (width < 600) {
            document.body.style.backgroundColor = "yellow";
        }
    });
});



let body = document.getElementById("body");
let mode = document.getElementById("mode");
mode.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (mode.innerText === "light_mode") {
        mode.innerText = "dark_mode";
    } else {
        mode.innerText = "light_mode";
    }
})
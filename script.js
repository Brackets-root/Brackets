// Nav Bar
let mode = document.getElementById("mode");
mode.addEventListener("click", function () {
    document.getElementById("body").classList.toggle("dark");
    if (mode.innerText === "light_mode") {
        mode.innerText = "dark_mode";
    } else {
        mode.innerText = "light_mode";
    }
})


// Floating Button
document.getElementById("add").addEventListener("click", function () {
    document.querySelector(".fab").classList.toggle("open");
})

document.querySelector(".third").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector(".second").addEventListener("click", function(){
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert("Link copied to clipboard!"))
            .catch(() => alert("Failed to copy link."));
    } else {
        prompt("Copy this link manually:", window.location.href);
    }
})
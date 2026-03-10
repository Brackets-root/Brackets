// Nav Bar
let mode = document.getElementById("mode");
mode.addEventListener("click", function () {
    document.body.classList.toggle("dark");
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
    document.querySelector(".fab").classList.remove("open");
});

function showmsg(message) {
    let display = document.getElementById("msg");
    display.innerText = message; 
    display.classList.add("show");

    setTimeout(() => {
        display.classList.remove("show");
    }, 2000);
}
document.querySelector(".second").addEventListener("click", function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href)
            .then(() => showmsg("Link copied to clipboard!"))
            .catch(() => showmsg("Failed to copy link."));
        document.querySelector(".fab").classList.remove("open");
    } else {
        prompt("Insecure!!! Copy this link manually:", window.location.href);
        document.querySelector(".fab").classList.remove("open");
    }
});
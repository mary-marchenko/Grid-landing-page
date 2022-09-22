let container = document.querySelector(".container")

document.addEventListener("scroll", function () {
    if (window.scrollY ===0) {
        container.classList.remove("fix-content")
    } else {
        container.classList.add("fix-content")
    };
});
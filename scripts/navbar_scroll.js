window.addEventListener("scroll", function () {
    const header = document.querySelector(".site_header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

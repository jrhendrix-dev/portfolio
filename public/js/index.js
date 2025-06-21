// 2. Get floating nav
const floatingNav = document.getElementById("floatingNav");

// 3. Scroll behavior
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 2) {
        floatingNav.classList.add("hide");
        stickyNav.classList.add("show");
    } else {
        floatingNav.classList.remove("hide");
        stickyNav.classList.remove("show");
    }
});

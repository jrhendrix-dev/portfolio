
const floatingNav = document.getElementById("floatingNav");

const stickyNav = document.querySelector('.floating-nav');


document.addEventListener("DOMContentLoaded", () => {
    const stickyNav = document.querySelector('.floating-nav');

    if (stickyNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                stickyNav.classList.add('active');
            } else {
                stickyNav.classList.remove('active');
            }
        });
    }
});



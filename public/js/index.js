// Language redirect logic
const userLang = navigator.language || navigator.userLanguage;
if (
    userLang.startsWith("es") &&
    (window.location.pathname === "/index.html" || window.location.pathname === "/")
) {
    window.location.replace("index-es.php");
}

const sections = ["#top","#about-position", "#projects-position", "#skills-position"];
let currentIndex = 0;

function getCurrentSectionIndex() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let index = 0;

    /*
     loops through the sections array. Checks if the viewport (scroll position) is below the top of
     the current section. If it is, sets the index to this section.
     */
    sections.forEach((id, i) => {
        const element = document.querySelector(id);
        if (element) {
            const offset = element.offsetTop;
            if (scrollPosition >= offset) {
                index = i;
            }
        }
    });

    return index;
}

function updateArrowDirection() {
    const arrow = document.querySelector("#scroll-button svg");

    if (!arrow) return;

    const nextIndex = (getCurrentSectionIndex() + 1) % sections.length;

    if (sections[nextIndex] === "#top") {
        arrow.classList.add("rotate-up");
        arrow.setAttribute("title", "Back to Top!"); //tooltip, currently not showing
    } else {
        arrow.classList.remove("rotate-up");
        arrow.removeAttribute("title");
    }
}

function scrollToNextSection() {
    currentIndex = getCurrentSectionIndex(); //finds the current section

    /* takes us to current section + 1 so we go to the next section, then, it uses the modulo operator % with sections.length
     to ensure that if currentIndex exceeds the last index of the sections array, it wraps around to 0, allowing us to cycle through
     the array */
    currentIndex = (currentIndex + 1) % sections.length;


    const target = document.querySelector(sections[currentIndex]);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
    updateArrowDirection();
}

window.addEventListener("scroll", updateArrowDirection); //on scroll

function toggleDemo() {
    const demo = document.getElementById('live-demo');
    const btn = document.getElementById('demoButton');
    const isOpen = demo.classList.contains('open');

    if (!isOpen) {
        if (!demo.dataset.loaded) {
            const iframe = document.createElement('iframe');
            iframe.src = "https://task-manager-api-4axd.onrender.com/tasks";
            iframe.width = "100%";
            iframe.height = "600";
            iframe.frameBorder = "0";
            iframe.title = "Live Task Manager";
            iframe.style.marginTop = "1rem";
            iframe.style.borderRadius = "8px";

            demo.appendChild(iframe);
            demo.dataset.loaded = 'true';
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                demo.classList.add('open');
            });
        });
    } else {
        demo.classList.remove('open');
    }

    btn.textContent = !isOpen ? '▮ Hide Live Demo' : '▶ Show Live Demo';
}



//Page Load events
document.addEventListener("DOMContentLoaded", () => {
    //SCROLLING
    const btn = document.getElementById("scroll-button");
    const btnDemo = document.getElementById("demoButton");
    if (btnDemo) {
        btnDemo.addEventListener("click", toggleDemo); // ✅ now toggleDemo is defined
    }

    if (btn) {
        btn.addEventListener("click", scrollToNextSection);
    }
    updateArrowDirection();

    //DEVICES NAVBAR
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("mobileNav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // Close nav when any link is clicked
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    //Live Spring/Boot Demo:







});



// --- Language redirect ---
const userLang = navigator.language || navigator.userLanguage;
if (
    userLang?.startsWith("es") &&
    (window.location.pathname === "/index.html" || window.location.pathname === "/")
) {
    window.location.replace("index-es.php");
}

// --- Anchor cycle: Top → Projects → Skills → About → Top
// Use the *-position anchors so clicks register even before passing a section.
const sections = ["#top", "#projects-position", "#skills-position", "#about-position"]
    .map(sel => document.querySelector(sel))
    .filter(Boolean);

let currentIndex = 0;

// Recompute absolute tops of anchors (accounts for layout changes)
function getAnchorTops() {
    return sections.map(el => el.getBoundingClientRect().top + window.scrollY);
}

// Pick the anchor NEAREST to the viewport top
function getNearestSectionIndex() {
    const tops = getAnchorTops();
    const y = window.scrollY;
    let best = 0, bestDist = Infinity;
    for (let i = 0; i < tops.length; i++) {
        const d = Math.abs(tops[i] - y);
        if (d < bestDist) { best = i; bestDist = d; }
    }
    return best;
}

// Flip arrow when the NEXT stop is #top, or when we're past About's midpoint
function updateArrowDirection() {
    const arrow = document.querySelector("#scroll-button svg");
    if (!arrow || sections.length === 0) return;

    const i = getNearestSectionIndex();
    const nextIndex = (i + 1) % sections.length;

    const aboutMid = document.querySelector("#about-middle");
    const pastAboutMid = aboutMid
        ? (window.scrollY + window.innerHeight / 2) >= (aboutMid.getBoundingClientRect().top + window.scrollY)
        : false;

    if (sections[nextIndex].id === "top" || pastAboutMid) {
        arrow.classList.add("rotate-up");
        arrow.setAttribute("title", "Back to Top!");
    } else {
        arrow.classList.remove("rotate-up");
        arrow.removeAttribute("title");
    }
}

// Smooth-scroll to the next anchor in the cycle
function scrollToNextSection() {
    if (sections.length === 0) return;

    currentIndex = getNearestSectionIndex();
    const nextIndex = (currentIndex + 1) % sections.length;
    const target = sections[nextIndex];

    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Refresh arrow shortly after motion starts
        setTimeout(updateArrowDirection, 120);
    }
}

// --- Live demo toggle (unchanged) ---
function toggleDemo() {
    const demo = document.getElementById("live-demo");
    const btn  = document.getElementById("demoButton");
    if (!demo || !btn) return;

    const isSpanish = (document.documentElement.lang || "").toLowerCase().startsWith("es");
    const labels = isSpanish
        ? { open: '<i class="fa-solid fa-pause"></i> Ocultar Demo',
            closed: '<i class="fa-solid fa-play"></i> Ver Demo' }
        : { open: '<i class="fa-solid fa-pause"></i> Hide Demo',
            closed: '<i class="fa-solid fa-play"></i> Live Demo' };

    const isOpen = demo.classList.contains("open");

    if (!isOpen) {
        if (!demo.dataset.loaded) {
            const iframe = document.createElement("iframe");
            iframe.src = "https://task-manager-api-4axd.onrender.com/tasks";
            iframe.width = "100%";
            iframe.height = "600";
            iframe.frameBorder = "0";
            iframe.title = isSpanish ? "Demo en vivo: Task Manager" : "Live Task Manager";
            iframe.style.marginTop = "1rem";
            iframe.style.borderRadius = "8px";
            demo.appendChild(iframe);
            demo.dataset.loaded = "true";
        }
        requestAnimationFrame(() => requestAnimationFrame(() => demo.classList.add("open")));
        btn.innerHTML = labels.open;
    } else {
        demo.classList.remove("open");
        btn.innerHTML = labels.closed;
    }
}

// --- Bindings ---
window.addEventListener("load", () => {
    // Demo
    const btnDemo = document.getElementById("demoButton");
    if (btnDemo) {
        const isSpanish = (document.documentElement.lang || "").toLowerCase().startsWith("es");
        btnDemo.innerHTML = isSpanish
            ? '<i class="fa-solid fa-play"></i> Ver Demo'
            : '<i class="fa-solid fa-play"></i> Live Demo';
        btnDemo.addEventListener("click", toggleDemo);
    }

    // Make the whole circle clickable
    const navCircle = document.querySelector(".bottom-nav");
    if (navCircle) {
        navCircle.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToNextSection();
        });
    }

    // Also bind the inner button for robustness
    const btn = document.getElementById("scroll-button");
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToNextSection();
        });
    }

    updateArrowDirection();
});


// Mobile nav toggle (hamburger)
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const nav    = document.getElementById('mobileNav');

    if (!toggle || !nav) return;

    const open = () => {
        nav.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        // Lock scroll under the menu
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open');
    };

    const close = () => {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
    };

    // Toggle on click
    toggle.addEventListener('click', () => {
        nav.classList.contains('active') ? close() : open();
    });

    // Close when clicking the dark backdrop (empty area)
    nav.addEventListener('click', (e) => {
        if (e.target === nav) close();
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    // Optional: close when a link is tapped
    nav.querySelectorAll('a[href]').forEach(a => {
        a.addEventListener('click', () => close());
    });

    // A11y
    toggle.setAttribute('aria-controls', 'mobileNav');
    toggle.setAttribute('aria-expanded', 'false');
});


// Keep arrow reactive during manual scrolls & on resize (layout changes)
window.addEventListener("scroll", updateArrowDirection, { passive: true });
window.addEventListener("resize", updateArrowDirection);

// Optional inline fallback
window.__cycleNext = scrollToNextSection;

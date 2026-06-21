// /js/index.js

// ─────────────────────────────────────────────────────────────
// Language redirect (runs immediately, before DOM is ready)
// ─────────────────────────────────────────────────────────────
const userLang = navigator.language || navigator.userLanguage;
if (
    userLang?.startsWith("es") &&
    (window.location.pathname === "/index.html" || window.location.pathname === "/")
) {
    window.location.replace("index-es.php");
}


// ─────────────────────────────────────────────────────────────
// Scroll cycle: Top → Projects → Skills → About → Contact → Top
// Added #contact to the cycle since it's now a standalone section
// ─────────────────────────────────────────────────────────────
const sections = [
    "#top",
    "#projects-position",
    "#skills-position",
    "#about-position",
    "#contact"
]
    .map(sel => document.querySelector(sel))
    .filter(Boolean);

let currentIndex = 0;

function getAnchorTops() {
    return sections.map(el => el.getBoundingClientRect().top + window.scrollY);
}

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

function updateArrowDirection() {
    const arrow = document.querySelector("#scroll-button svg");
    if (!arrow || sections.length === 0) return;

    const i = getNearestSectionIndex();
    const isLastSection = i === sections.length - 1;

    // Also catch "scrolled near the very bottom of the page"
    const nearBottom = (window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - 80);

    if (isLastSection || nearBottom) {
        arrow.classList.add("rotate-up");
        arrow.setAttribute("title", "Back to Top!");
    } else {
        arrow.classList.remove("rotate-up");
        arrow.removeAttribute("title");
    }
}

function scrollToNextSection() {
    if (sections.length === 0) return;
    currentIndex = getNearestSectionIndex();
    const nextIndex = (currentIndex + 1) % sections.length;
    sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(updateArrowDirection, 120);
}

window.__cycleNext = scrollToNextSection;


// ─────────────────────────────────────────────────────────────
// Live demo toggle (Task Manager iframe)
// ─────────────────────────────────────────────────────────────
function toggleDemo() {
    const btn = document.getElementById("demoButton");
    if (!btn) return;

    const isSpanish = document.documentElement.lang?.startsWith("es");
    const labels = isSpanish
        ? { open: '<i class="fa-solid fa-pause" aria-hidden="true"></i> Ocultar Demo',
            closed: '<i class="fa-solid fa-play" aria-hidden="true"></i> Ver Demo' }
        : { open: '<i class="fa-solid fa-pause" aria-hidden="true"></i> Hide Demo',
            closed: '<i class="fa-solid fa-play" aria-hidden="true"></i> Live Demo' };

    const card = btn.closest(".project-card");
    if (!card) return;

    let demoRow = document.getElementById("demo-row");

    if (demoRow) {
        // Collapse animation
        demoRow.style.maxHeight = demoRow.scrollHeight + "px";
        requestAnimationFrame(() => {
            demoRow.style.maxHeight = "0";
            demoRow.style.opacity = "0";
            card.style.borderBottomLeftRadius = "";
            card.style.borderBottomRightRadius = "";
        });
        demoRow.addEventListener("transitionend", () => demoRow.remove(), { once: true });
        btn.innerHTML = labels.closed;
        card.style.borderBottomLeftRadius = "";
        card.style.borderBottomRightRadius = "";
    } else {
        // Build the row
        demoRow = document.createElement("div");
        demoRow.id = "demo-row";
        demoRow.style.cssText = `
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: max-height 0.45s ease, opacity 0.35s ease;
            background: var(--color-card, #0d1525);
            border: 1px solid rgba(52,211,153,0.2);
            border-top: none;
            border-radius: 0 0 12px 12px;
            padding: 0 1.5rem;
            margin-top: -12px;
        `;

        const iframe = document.createElement("iframe");
        iframe.src         = "https://task-manager-api-4axd.onrender.com/tasks";
        iframe.width       = "100%";
        iframe.height      = "560";
        iframe.frameBorder = "0";
        iframe.title       = isSpanish ? "Demo en vivo: Task Manager" : "Live Task Manager";
        iframe.style.cssText = "display:block;border:none;border-radius:8px;margin:1.5rem 0;";

        demoRow.appendChild(iframe);
        card.after(demoRow);

        // Square off the card's bottom corners so it flows into the demo row
        card.style.transition = "border-radius 0.45s ease";
        card.style.borderBottomLeftRadius = "0";
        card.style.borderBottomRightRadius = "0";

        // Trigger slide-down
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                demoRow.style.maxHeight = demoRow.scrollHeight + 660 + "px";
                demoRow.style.opacity = "1";
            });
        });

        btn.innerHTML = labels.open;
    }
}


// ─────────────────────────────────────────────────────────────
// Mobile nav
// ─────────────────────────────────────────────────────────────
function initMobileNav() {
    const toggle   = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("menu-close");   // ← new close button in header.php
    const nav      = document.getElementById("mobileNav");

    if (!toggle || !nav) return;

    const open = () => {
        nav.classList.add("open");
        nav.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded", "true");
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    };

    const close = () => {
        nav.classList.remove("open");
        nav.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () =>
        nav.classList.contains("open") ? close() : open()
    );

    // Close button inside the overlay
    if (closeBtn) closeBtn.addEventListener("click", close);

    // Tap the dark backdrop (not a child element)
    nav.addEventListener("click", (e) => {
        if (e.target === nav) close();
    });

    // ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    });

    // Close when a nav link is tapped
    nav.querySelectorAll("a[href]").forEach(a =>
        a.addEventListener("click", close)
    );
}


// ─────────────────────────────────────────────────────────────
// Bind everything on load
// ─────────────────────────────────────────────────────────────
window.addEventListener("load", () => {

    // Demo button
    const btnDemo = document.getElementById("demoButton");
    if (btnDemo) {
        const isSpanish = document.documentElement.lang?.startsWith("es");
        btnDemo.innerHTML = isSpanish
            ? '<i class="fa-solid fa-play" aria-hidden="true"></i> Ver Demo'
            : '<i class="fa-solid fa-play" aria-hidden="true"></i> Live Demo';
        btnDemo.addEventListener("click", toggleDemo);
    }

    // Scroll button (both the wrapper nav and the inner button, for robustness)
    document.querySelector(".bottom-nav")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToNextSection();
    });

    document.getElementById("scroll-button")?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollToNextSection();
    });

    updateArrowDirection();
});

document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
});

// Keep arrow reactive on manual scroll and resize
window.addEventListener("scroll", updateArrowDirection, { passive: true });
window.addEventListener("resize", updateArrowDirection);

// /js/i18n.js
(() => {
    const dict = {
        en: {
            // ── Hero ──────────────────────────────────────────
            "hero.title.line1": "BACKEND",
            "hero.title.line2": "DEVELOPER",
            "hero.subheadline": `My name is Jonathan Hendrix, I'm a <strong>Backend Developer</strong> based in Seville, Spain, focused on building scalable and maintainable web applications.`,
            "hero.available":   "Available to work",
            "hero.cv":          "Download my CV",
            "hero.viewWork":    "View my work",
            "hero.stats.experience": "Years experience",
            "hero.stats.projects":   "Projects shipped",
            "hero.stats.languages":  "Native languages",

            // ── Nav ───────────────────────────────────────────
            "nav.top":     "Top",
            "nav.work":    "My Work",
            "nav.skills":  "Skills",
            "nav.about":   "About Me",
            "nav.contact": "Contact",

            // ── A11y ──────────────────────────────────────────
            "a11y.skip":   "Skip to main content",
            "a11y.scroll": "Scroll button",
            "a11y.home":   "Home",

            // ── Projects ──────────────────────────────────────
            "projects.eyebrow": "Portfolio",
            "projects.title":   "Featured projects",
            "projects.actions.github": "View on GitHub",
            "projects.actions.demo":   "Live Demo",
            "projects.actions.live":   "Live Site",

            "projects.p6.title": "emecoms — Local SEO Agency",
            "projects.p6.date":  "May 2026 – Present",
            "projects.p6.desc":  "Full-stack marketing site for a local SEO agency. Public-facing pages are built with Astro for near-perfect PageSpeed scores (98 mobile), while the interactive tools dashboard and live site auditor remain on Angular/Analog SSR. Features a Lighthouse-powered audit tool with transactional email delivery via Resend, a Google Search Console integration for connected clients, and a headless WordPress blog — all deployed via Docker Compose with nginx routing between the two frontends.",

            "projects.p5.title": "GastroControl — Restaurant Operations Platform",
            "projects.p5.date":  "December 2025 – April 2026",
            "projects.p5.desc":  "Restaurant operations platform built with Spring Boot. Focused on clean architecture, role-based access, and robust data integrity with Flyway migrations. Fully Dockerized from day one.",

            "projects.p4.title": "Business First Academy — Complete Platform Overhaul",
            "projects.p4.date":  "September 2025 – November 2025",
            "projects.p4.desc":  "Modern rewrite featuring a Symfony REST API and Angular front-end. Includes JWT authentication, 2FA, Google login, Stripe payments, and role-based dashboards (admin, teacher, student). Fully Dockerized and deployed to DigitalOcean with HTTPS.",

            "projects.p3.title": "Bambina — Restaurant & E-Commerce Platform",
            "projects.p3.date":  "July 2025 – September 2025",
            "projects.p3.desc":  "Collaborative platform built during my CodeArts internship for restaurant management and online sales. I delivered 50+ REST endpoints, implemented Clean Architecture layers (DTOs, Mappers, Managers), and built Angular admin features and UI components.",

            "projects.p2.title": "Task Manager",
            "projects.p2.date":  "May 2025",
            "projects.p2.desc":  "Compact task manager to add, complete, and delete items. A clean MVC example with a database layer and minimal, intuitive interface.",

            "projects.p1.title": "English Academy Platform (Legacy PHP)",
            "projects.p1.date":  "March 2022 – July 2022",
            "projects.p1.desc":  "Original PHP admin panel to manage classes, students, schedules, enrollments, and basic reporting — the internal production tool before the full Symfony/Angular rebuild.",

            // ── Skills ────────────────────────────────────────
            "skills.eyebrow":   "Technologies",
            "skills.title":     "Skills & stack",
            "skills.frontend":  "Frontend",
            "skills.backend":   "Backend",
            "skills.toolsOther":"Infra & Tools",
            "skills.reactBasics":"React (basics)",
            "skills.php":       "PHP (OOP & Procedural)",
            "skills.agile":     "Agile · Scrum · Kanban",
            "skills.bilingual": "Bilingual: English & Spanish",

            // ── About ─────────────────────────────────────────
            "about.eyebrow": "About me",
            "about.title":   "Who's behind the code",
            "about.p1": `I'm <strong>Jonathan Hendrix</strong>, a Backend Developer based in <strong>Seville, Spain</strong>. After several years in administrative and operations roles, I transitioned into software development to combine my problem-solving mindset with a passion for technology.`,
            "about.p2": `I specialize in building scalable and maintainable web applications using <strong>Java / Spring Boot</strong>, <strong>Angular</strong>, and modern deployment stacks with Docker. I enjoy the full journey — from API design to production on a VPS.`,
            "about.p3": `I also co-run <strong>emecoms</strong>, a local SEO agency in Seville, where I build the technical product and internal tools infrastructure — a hands-on mix of engineering and real business impact.`,
            "about.p4": `I'm a native bilingual in English and Spanish, which lets me work with international teams and clients without friction.`,

            "about.timeline.title":    "Experience",
            "about.timeline.t1.date":  "May 2026 – Present",
            "about.timeline.t1.title": "Co-founder & Full-Stack Developer",
            "about.timeline.t1.sub":   "emecoms — Local SEO Agency, Seville",
            "about.timeline.t2.date":  "July 2025 – September 2025",
            "about.timeline.t2.title": "Backend Developer Intern",
            "about.timeline.t2.sub":   "CodeArts — Bambina Platform",
            "about.timeline.t3.date":  "2022 – 2025",
            "about.timeline.t3.title": "Training & Freelance Projects",

            "about.details.title":                "Details",
            "about.details.location.label":       "Location",
            "about.details.location.value":       "Seville, Spain",
            "about.details.availability.label":   "Availability",
            "about.details.availability.value":   "Available for work",
            "about.details.modality.label":       "Modality",
            "about.details.modality.value":       "Remote · Hybrid · On-site",

            "about.languages.title":  "Languages",
            "about.languages.en":     "English",
            "about.languages.es":     "Spanish",
            "about.languages.native": "Native",

            // ── Contact ───────────────────────────────────────
            "contact.eyebrow": "Contact",
            "contact.title":   "Let's talk about your next project",
            "contact.intro":   "Have a project in mind or looking to bring a backend developer onto your team? Write to me and I'll get back to you within 24 hours.",
            "contact.phone":         "Phone",
            "contact.form.name":     "Name",
            "contact.form.email":    "Email",
            "contact.form.subject":  "Subject",
            "contact.form.message":  "Message",
            "contact.form.send":     "Send message",
        },

        es: {
            // ── Hero ──────────────────────────────────────────
            "hero.title.line1": "DESARROLLADOR",
            "hero.title.line2": "BACKEND",
            "hero.subheadline": `Me llamo Jonathan Hendrix, soy <strong>desarrollador Backend</strong> en Sevilla, España, enfocado en construir aplicaciones web escalables y mantenibles.`,
            "hero.available":   "Disponible para trabajar",
            "hero.cv":          "Descargar mi CV",
            "hero.viewWork":    "Ver mis proyectos",
            "hero.stats.experience": "Años de experiencia",
            "hero.stats.projects":   "Proyectos entregados",
            "hero.stats.languages":  "Idiomas nativos",

            // ── Nav ───────────────────────────────────────────
            "nav.top":     "Inicio",
            "nav.work":    "Proyectos",
            "nav.skills":  "Habilidades",
            "nav.about":   "Sobre mí",
            "nav.contact": "Contacto",

            // ── A11y ──────────────────────────────────────────
            "a11y.skip":   "Saltar al contenido principal",
            "a11y.scroll": "Botón de scroll",
            "a11y.home":   "Inicio",

            // ── Projects ──────────────────────────────────────
            "projects.eyebrow": "Portafolio",
            "projects.title":   "Proyectos destacados",
            "projects.actions.github": "Ver en GitHub",
            "projects.actions.demo":   "Demo en vivo",
            "projects.actions.live":   "Sitio en vivo",

            "projects.p6.title": "emecoms — Agencia SEO Local",
            "projects.p6.date":  "Mayo 2026 – Actualidad",
            "projects.p6.desc":  "Web full-stack para una agencia de SEO local. Las páginas públicas están construidas con Astro, logrando 98 en PageSpeed mobile, mientras que el panel de herramientas y el auditor en vivo permanecen en Angular/Analog SSR. Incluye auditoría basada en Lighthouse con emails transaccionales via Resend, integración con Google Search Console y blog con WordPress headless — todo desplegado con Docker Compose y nginx enrutando entre ambos frontends.",

            "projects.p5.title": "GastroControl — Plataforma de Operaciones para Restaurantes",
            "projects.p5.date":  "Diciembre 2025 – Abril 2026",
            "projects.p5.desc":  "Plataforma de operaciones para restaurantes con Spring Boot. Arquitectura limpia, control de acceso por roles e integridad de datos con migraciones Flyway. Completamente Dockerizada desde el primer día.",

            "projects.p4.title": "Business First Academy — Overhaul completo de la plataforma",
            "projects.p4.date":  "Septiembre 2025 – Noviembre 2025",
            "projects.p4.desc":  "Reescritura moderna con API REST en Symfony y front-end Angular. Incluye JWT, 2FA, login con Google, pagos con Stripe y dashboards por rol (admin, profesor, alumno). Arquitectura Dockerizada y desplegada en DigitalOcean con HTTPS.",

            "projects.p3.title": "Bambina — Plataforma Restaurante & E-Commerce",
            "projects.p3.date":  "Julio 2025 – Septiembre 2025",
            "projects.p3.desc":  "Plataforma colaborativa en prácticas en CodeArts. Entregué más de 50 endpoints REST, implementé capas de Clean Architecture (DTOs, Mappers, Managers) y construí funcionalidades Angular para el panel admin.",

            "projects.p2.title": "Task Manager",
            "projects.p2.date":  "Mayo 2025",
            "projects.p2.desc":  "Gestor de tareas compacto para añadir, completar y borrar elementos. Ejemplo limpio de MVC con capa de base de datos e interfaz minimalista.",

            "projects.p1.title": "Plataforma Academia de Inglés (PHP Legacy)",
            "projects.p1.date":  "Marzo 2022 – Julio 2022",
            "projects.p1.desc":  "Panel de administración en PHP para gestionar clases, alumnos, horarios, matrículas e informes. La herramienta interna en producción antes de la reescritura con Symfony y Angular.",

            // ── Skills ────────────────────────────────────────
            "skills.eyebrow":    "Tecnologías",
            "skills.title":      "Habilidades y stack",
            "skills.frontend":   "Frontend",
            "skills.backend":    "Backend",
            "skills.toolsOther": "Infra y Herramientas",
            "skills.reactBasics":"React (Básico)",
            "skills.php":        "PHP (POO y Procedimental)",
            "skills.agile":      "Ágil · Scrum · Kanban",
            "skills.bilingual":  "Bilingüe: Inglés y Español",

            // ── About ─────────────────────────────────────────
            "about.eyebrow": "Sobre mí",
            "about.title":   "Quién hay detrás del código",
            "about.p1": `Soy <strong>Jonathan Hendrix</strong>, desarrollador Backend en <strong>Sevilla, España</strong>. Tras varios años en puestos administrativos y de operaciones, hice la transición al desarrollo de software para unir mi mentalidad resolutiva con mi pasión por la tecnología.`,
            "about.p2": `Me especializo en construir aplicaciones web escalables y mantenibles con <strong>Java / Spring Boot</strong>, <strong>Angular</strong> y stacks de despliegue modernos con Docker. Disfruto del ciclo completo: desde el diseño de la API hasta la producción en un VPS.`,
            "about.p3": `También co-dirijo <strong>emecoms</strong>, una agencia de SEO local en Sevilla, donde construyo el producto técnico y la infraestructura interna de herramientas — una mezcla práctica de ingeniería e impacto real en negocio.`,
            "about.p4": `Soy bilingüe nativo en inglés y español, lo que me permite trabajar con equipos y clientes internacionales sin fricción.`,

            "about.timeline.title":    "Trayectoria",
            "about.timeline.t1.date":  "Mayo 2026 – Actualidad",
            "about.timeline.t1.title": "Co-fundador y Desarrollador Full-Stack",
            "about.timeline.t1.sub":   "emecoms — Agencia SEO Local, Sevilla",
            "about.timeline.t2.date":  "Julio 2025 – Septiembre 2025",
            "about.timeline.t2.title": "Desarrollador Backend (Prácticas)",
            "about.timeline.t2.sub":   "CodeArts — Plataforma Bambina",
            "about.timeline.t3.date":  "2022 – 2025",
            "about.timeline.t3.title": "Formación y Proyectos Freelance",

            "about.details.title":                "Detalles",
            "about.details.location.label":       "Ubicación",
            "about.details.location.value":       "Sevilla, España",
            "about.details.availability.label":   "Disponibilidad",
            "about.details.availability.value":   "Disponible para trabajar",
            "about.details.modality.label":       "Modalidad",
            "about.details.modality.value":       "Remoto · Híbrido · Presencial",

            "about.languages.title":  "Idiomas",
            "about.languages.en":     "Inglés",
            "about.languages.es":     "Español",
            "about.languages.native": "Nativo",

            // ── Contact ───────────────────────────────────────
            "contact.eyebrow": "Contacto",
            "contact.title":   "Hablemos de tu próximo proyecto",
            "contact.intro":   "¿Tienes un proyecto en mente o buscas incorporar un desarrollador backend a tu equipo? Escríbeme y te respondo en menos de 24 horas.",
            "contact.phone":         "Teléfono",
            "contact.form.name":     "Nombre",
            "contact.form.email":    "Email",
            "contact.form.subject":  "Asunto",
            "contact.form.message":  "Mensaje",
            "contact.form.send":     "Enviar mensaje",
        }
    };

    let lang = localStorage.getItem("lang") || "en";

    function render() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const value = dict[lang]?.[el.dataset.i18n];
            if (value == null) return;
            el.innerHTML = value;
        });

        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        document.querySelectorAll("[data-lang-btn]").forEach(b => {
            b.classList.toggle("active", b.dataset.langBtn === lang);
        });

        // Move the slider pill to match the active language button
        // ES is index 0 (left), EN is index 1 (right)
        document.querySelectorAll(".lang-slider").forEach(slider => {
            slider.style.transform = lang === "en" ? "translateX(100%)" : "translateX(0)";
        });

        console.debug("[i18n] language set to", lang);
    }

    window.setLang = (next) => {
        if (!dict[next]) return;
        lang = next;
        render();
    };

    document.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-lang-btn]");
        if (!btn) return;
        window.setLang(btn.dataset.langBtn);
    });

    render();
})();

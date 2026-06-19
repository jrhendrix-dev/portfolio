// /js/i18n.js
(() => {
    const dict = {
        en: {
            "hero.title.line1": "BACKEND",
            "hero.title.line2": "DEVELOPER",
            "hero.subheadline": `My name is Jonathan Hendrix, I'm a <strong>Backend Developer</strong> based in Seville, Spain, focused on building scalable and maintainable web applications.`,
            "hero.available": `Available to work`,
            "hero.cv": "Download my CV",
            "nav.top": "Top",
            "nav.work": "My Work",
            "nav.skills": "Skills",
            "nav.about": "About Me",
            "nav.contact": "Contact Me",
            "a11y.skip": "Skip to main content",
            "a11y.scroll": "Scroll button",
            "a11y.home": "Home",

            "about.title": "About Me",
            "about.p1": `I'm Jonathan Hendrix, a <strong>Backend Developer</strong> based in Seville, Spain. After several years of experience in administrative and operations roles, I transitioned into software development to combine my problem-solving mindset with a passion for technology.`,
            "about.p2": `I specialize in building scalable and maintainable web applications using <strong>PHP</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, and <strong>MySQL</strong>. My background gives me a unique perspective on how to bridge technical solutions with business needs, and I enjoy working on clean, efficient code that solves real-world problems.`,
            "about.p3": `I'm fluent in English and Spanish, and I'm currently open to developer opportunities that allow me to grow within a collaborative environment providing high-quality results.`,

            "projects.title": "Projects",
            "projects.actions.github": "View on GitHub",
            "projects.actions.demo": "Live Demo",
            "projects.actions.live": "Live Site",

            "projects.p1.title": "English Academy Platform (Legacy PHP)",
            "projects.p1.date": "March 2022 - July 2022",
            "projects.p1.desc": "Original PHP admin panel used to manage classes, students, schedules, enrollments, and basic reporting. This was the internal production tool before rebuilding the entire platform with Symfony and Angular.",

            "projects.p2.title": "Task Manager",
            "projects.p2.date": "May 2025",
            "projects.p2.desc": "Compact task manager where you can add, complete, and delete items. Designed as a clean MVC example with a database layer and a minimal, intuitive interface.",

            "projects.p3.title": "Bambina – Restaurant & E-Commerce Platform (Internship Team Project)",
            "projects.p3.date": "July 2025 - September 2025",
            "projects.p3.desc": "Collaborative platform built during my CodeArts internship for restaurant management and online sales. I contributed to both the backend and frontend, but specially the backend which I developed entirely on my own delivering 50+ REST endpoints, implementing Clean Architecture layers (DTOs, Mappers, Managers), and building Angular admin features and UI components.",

            "projects.p4.title": "Business First Academy – Complete Platform Overhaul",
            "projects.p4.date": "September 2025 - November 2025",
            "projects.p4.desc": "Modern rewrite of the academy platform featuring a Symfony REST API and an Angular front-end. Includes JWT authentication, 2-Factor Authentication, Google login, Stripe payments, and role-based dashboards (admin, teacher, student). Fully Dockerized architecture (development and production), deployed to DigitalOcean using containerized services with HTTPS and a fully reproducible environment.",

            "projects.p5.title": "GastroControl — Restaurant Operations Platform",
            "projects.p5.date": "December 2025 – April 18, 2026",
            "projects.p5.desc": "In-progress restaurant operations platform built with Spring Boot. Focused on clean architecture, role-based access, and robust data integrity with Flyway migrations. Designed to run reproducibly with Docker from day one, with transactional email wiring and a strong backend-first foundation.",

            "projects.p6.title": "emecoms — Local SEO Agency Website",
            "projects.p6.date": "May 2026 – Present",
            "projects.p6.desc": "Full-stack marketing site for a local SEO agency. Public-facing pages are built with Astro for near-perfect PageSpeed scores (98 mobile), while the interactive tools dashboard and live site auditor remain on Angular/Analog SSR. Features a Lighthouse-powered audit tool with transactional email delivery via Resend, a Google Search Console integration for connected clients, and a headless WordPress blog — all deployed via Docker Compose with nginx routing between the two frontends.",

            "skills.title": "Skills & Technologies",
            "skills.frontend": "Frontend",
            "skills.backend": "Backend",
            "skills.toolsOther": "Tools & Other",
            "skills.reactBasics": "React (Basics)",
            "skills.php": "PHP (OOP & Procedural)",
            "skills.agile": "Agile, Scrum, Kanban",
            "skills.bilingual": "Bilingual: English & Spanish"
        },

        es: {
            "hero.title.line1": "DESARROLLADOR",
            "hero.title.line2": "BACKEND",
            "hero.subheadline": `Me llamo Jonathan Hendrix, soy <strong>desarrollador Backend</strong> en Sevilla, España, enfocado en construir aplicaciones web escalables y mantenibles.`,
            "hero.available": `Disponible para trabajar`,
            "hero.cv": "Descargar mi CV",
            "nav.top": "Inicio",
            "nav.work": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.about": "Sobre mí",
            "nav.contact": "Contacto",
            "a11y.skip": "Saltar al contenido principal",
            "a11y.scroll": "Botón de scroll",
            "a11y.home": "Inicio",

            "about.title": "Sobre mí",
            "about.p1": `Soy Jonathan Hendrix, <strong>desarrollador Backend</strong> en Sevilla, España. Tras varios años de experiencia en puestos administrativos y de operaciones, hice la transición al desarrollo de software para unir mi mentalidad resolutiva con mi pasión por la tecnología.`,
            "about.p2": `Me especializo en construir aplicaciones web escalables y mantenibles usando <strong>PHP</strong>, <strong>Java</strong>, <strong>JavaScript</strong> y <strong>MySQL</strong>. Mi trayectoria me da una perspectiva única para conectar soluciones técnicas con necesidades de negocio, y disfruto trabajando con código limpio y eficiente que resuelve problemas reales.`,
            "about.p3": `Hablo inglés y español con fluidez, y actualmente estoy abierto a oportunidades como desarrollador donde pueda crecer en un entorno colaborativo aportando resultados de alta calidad.`,

            "projects.title": "Proyectos",
            "projects.actions.github": "Ver en GitHub",
            "projects.actions.demo": "Demo en vivo",
            "projects.actions.live": "Sitio en vivo",

            "projects.p1.title": "Plataforma Academia de Inglés (PHP Legacy)",
            "projects.p1.date": "Marzo 2022 - Julio 2022",
            "projects.p1.desc": "Panel de administración original en PHP para gestionar clases, alumnos, horarios, matrículas e informes básicos. Fue la herramienta interna en producción antes de reconstruir toda la plataforma con Symfony y Angular.",

            "projects.p2.title": "Task Manager",
            "projects.p2.date": "Mayo 2025",
            "projects.p2.desc": "Gestor de tareas compacto donde puedes añadir, completar y borrar elementos. Diseñado como ejemplo limpio de MVC con capa de base de datos y una interfaz minimalista e intuitiva.",

            "projects.p3.title": "Bambina – Plataforma Restaurante & E-Commerce (Proyecto de prácticas en equipo)",
            "projects.p3.date": "Julio 2025 - Septiembre 2025",
            "projects.p3.desc": "Plataforma colaborativa desarrollada durante mis prácticas en CodeArts para gestión de restaurante y venta online. Contribuí tanto en backend como frontend, especialmente en el backend, entregando más de 50 endpoints REST, implementando capas de Clean Architecture (DTOs, Mappers, Managers) y construyendo funcionalidades y componentes UI para el panel admin en Angular.",

            "projects.p4.title": "Business First Academy – Overhaul completo de la plataforma",
            "projects.p4.date": "Septiembre 2025 - Noviembre 2025",
            "projects.p4.desc": "Reescritura moderna de la plataforma con una API REST en Symfony y un front-end en Angular. Incluye autenticación JWT, 2FA, login con Google, pagos con Stripe y dashboards por rol (admin, profesor y alumno). Arquitectura completamente Dockerizada (desarrollo y producción), con despliegue en DigitalOcean mediante contenedores, HTTPS y entorno reproducible end-to-end.",

            "projects.p5.title": "GastroControl — Plataforma de Operaciones para Restaurantes",
            "projects.p5.date": "Diciembre 2025 – 18 de abril de 2026",
            "projects.p5.desc": "Proyecto en desarrollo para operaciones de restaurante construido con Spring Boot. Enfocado en arquitectura limpia, control de acceso por roles e integridad de datos con migraciones Flyway. Pensado para ejecutarse de forma reproducible con Docker desde el primer día, con wiring de emails transaccionales y una base backend-first sólida.",

            "projects.p6.title": "emecoms — Web de Agencia SEO Local",
            "projects.p6.date": "Mayo 2026 – Actualidad",
            "projects.p6.desc": "Web full-stack para una agencia de SEO local. Las páginas públicas están construidas con Astro, logrando una puntuación de 98 en PageSpeed mobile, mientras que el panel de herramientas y el auditor en vivo permanecen en Angular/Analog SSR. Incluye una herramienta de auditoría basada en Lighthouse con envío de emails transaccionales mediante Resend, integración con Google Search Console para clientes conectados y un blog con WordPress headless — todo desplegado con Docker Compose y nginx enrutando entre ambos frontends.",

            "skills.title": "Habilidades y Tecnologías",
            "skills.frontend": "Frontend",
            "skills.backend": "Backend",
            "skills.toolsOther": "Herramientas y Otros",
            "skills.reactBasics": "React (Básico)",
            "skills.php": "PHP (POO y Procedimental)",
            "skills.agile": "Ágil, Scrum, Kanban",
            "skills.bilingual": "Bilingüe: Inglés y Español"
        }
    };

    let lang = localStorage.getItem("lang") || "en";

    function render() {
        const nodes = document.querySelectorAll("[data-i18n]");
        nodes.forEach(el => {
            const key = el.dataset.i18n;
            const value = dict[lang]?.[key];
            if (value == null) return;
            el.innerHTML = value;
        });

        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        document.querySelectorAll("[data-lang-btn]").forEach(b => {
            b.classList.toggle("active", b.dataset.langBtn === lang);
        });

        console.debug("[i18n] language set to", lang);
    }

    // public API
    window.setLang = (next) => {
        if (!dict[next]) return;
        lang = next;
        render();
    };

    // ✅ THIS was missing: click handler for flag buttons
    document.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-lang-btn]");
        if (!btn) return;
        window.setLang(btn.dataset.langBtn);
    });

    // initial render
    render();
})();
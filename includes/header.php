<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jonathan Hendrix | Backend Developer — Seville, Spain</title>
    <meta name="description" content="Portfolio of Jonathan Hendrix, Full-Stack Developer based in Seville, Spain. Specialising in Java Spring Boot, Angular, Astro, and scalable web applications.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="n-TbdM7XyYdbQ9G4wzyEBvbdjtkcXdb0tRnXtLBLjEI" />
    <meta name="msvalidate.01" content="2DFA22B17F841808752354B9EE459080" />

    <link rel="canonical" href="https://jonathan-hendrix.dev/" />

    <!-- Open Graph -->
    <meta property="og:type"        content="website" />
    <meta property="og:url"         content="https://jonathan-hendrix.dev/" />
    <meta property="og:title"       content="Jonathan Hendrix | Backend Developer — Seville, Spain" />
    <meta property="og:description" content="Full-Stack Developer based in Seville. Java Spring Boot, Angular, Astro, Docker. Available for work." />
    <meta property="og:image"       content="https://jonathan-hendrix.dev/pics/profile.png" />
    <meta property="og:locale"      content="en_GB" />
    <meta property="og:site_name"   content="Jonathan Hendrix" />

    <!-- Twitter Card -->
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:title"       content="Jonathan Hendrix | Backend Developer — Seville, Spain" />
    <meta name="twitter:description" content="Full-Stack Developer based in Seville. Java Spring Boot, Angular, Astro, Docker." />
    <meta name="twitter:image"       content="https://jonathan-hendrix.dev/pics/profile.png" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Person",
                    "@id": "https://jonathan-hendrix.dev/#person",
                    "name": "Jonathan Hendrix",
                    "url": "https://jonathan-hendrix.dev",
                    "image": "https://jonathan-hendrix.dev/pics/profile.png",
                    "jobTitle": "Full-Stack Developer",
                    "description": "Backend Developer based in Seville, Spain, specialising in Java Spring Boot, Angular, Astro, and scalable web applications.",
                    "email": "jrhendrixdev@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Sevilla",
                        "addressRegion": "Andalucía",
                        "addressCountry": "ES"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/in/jrhendrix-dev",
                        "https://github.com/jrhendrix-dev"
                    ],
                    "knowsAbout": ["Java", "Spring Boot", "Angular", "Astro", "TypeScript", "Docker", "MySQL", "SEO"]
                },
                {
                    "@type": "WebSite",
                    "@id": "https://jonathan-hendrix.dev/#website",
                    "name": "Jonathan Hendrix — Portfolio",
                    "url": "https://jonathan-hendrix.dev",
                    "inLanguage": ["en", "es"],
                    "about": { "@id": "https://jonathan-hendrix.dev/#person" }
                }
            ]
        }
    </script>

    <link rel="icon" type="image/png" href="/logo/favicon.png">

    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/b9be0d536e.js" crossorigin="anonymous"></script>
    <!-- Normalize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <!-- Devicon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

    <!-- Portfolio CSS -->
    <link rel="stylesheet" href="/css/main.css">

    <script src="/js/index.js" defer></script>
    <script src="/js/i18n.js" defer></script>
</head>

<body>

<!-- Skip link for accessibility -->
<a href="#about" class="sr-only sr-only-focusable" data-i18n="a11y.skip">Skip to main content</a>


<!-- =============================================
     FLOATING NAV (desktop)
     ============================================= -->
<nav class="floating-nav" id="floatingNav" role="navigation" aria-label="Main Navigation">
    <ul>
        <!-- Logo mark -->
        <li class="nav-logo">
            <a href="#top" aria-label="Back to top">
                <img src="/logo/logoEmerald.svg" alt="JH logo" width="32" height="32">
            </a>
        </li>

        <!-- Links -->
        <li><a href="#top"               data-i18n="nav.top">Top</a></li>
        <li><a href="#projects-position" data-i18n="nav.work">My Work</a></li>
        <li><a href="#skills-position"   data-i18n="nav.skills">Skills</a></li>
        <li><a href="#about"             data-i18n="nav.about">About Me</a></li>
        <li><a href="#contact"           data-i18n="nav.contact">Contact</a></li>

        <!-- Language toggle -->
        <li class="nav-lang">
            <div class="lang-toggle" role="group" aria-label="Language toggle">
                <button type="button" class="lang-btn" data-lang-btn="es" aria-label="Cambiar a español">🇪🇸</button>
                <button type="button" class="lang-btn" data-lang-btn="en" aria-label="Switch to English">🇬🇧</button>
                <span class="lang-slider" aria-hidden="true"></span>
            </div>
        </li>
    </ul>
</nav>


<!-- =============================================
     HERO
     ============================================= -->
<header class="hero" id="top">
    <div class="hero-content">

        <!-- Left: text -->
        <div class="hero-text">

            <!-- Eyebrow -->
            <p class="hero-eyebrow">Backend Developer · Sevilla, España</p>

            <!-- H1: logo + title -->
            <h1 class="headline-with-logo">
                <img src="/logo/logoEmerald.svg" alt="JH logo" class="headline-logo">
                <span class="title-lines">
                    <span data-i18n="hero.title.line1">BACKEND</span>
                    <span data-i18n="hero.title.line2">DEVELOPER</span>
                </span>
            </h1>

            <!-- Availability badge -->
            <span class="availability-badge" data-available="true">
                <span class="dot" aria-hidden="true"></span>
                <span data-i18n="hero.available">Available to work</span>
            </span>

            <!-- Description -->
            <p class="subheadline" data-i18n="hero.subheadline">
                My name is Jonathan Hendrix, I'm a <strong>Backend Developer</strong> based in Seville, Spain,
                focused on building scalable and maintainable web applications.
            </p>

            <!-- CTAs -->
            <div class="hero-actions">
                <a href="/docs/CV-Jonathan.pdf"
                   class="btn btn-primary"
                   download
                   aria-label="Download my CV (PDF)">
                    <i class="fa-solid fa-download" aria-hidden="true"></i>
                    <span data-i18n="hero.cv">Download my CV</span>
                </a>
                <a href="#projects-position" class="btn btn-ghost">
                    <span data-i18n="hero.viewWork">View my work</span>
                    <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
            </div>

            <!-- Social chips -->
            <div class="chip-row hero-social-row" role="navigation" aria-label="Primary profile links">
                <a class="chip" href="https://www.linkedin.com/in/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                    <span>LinkedIn</span>
                </a>
                <a class="chip" href="https://github.com/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github" aria-hidden="true"></i>
                    <span>GitHub</span>
                </a>
                <a class="chip" href="mailto:jrhendrixdev@gmail.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    <span>jrhendrixdev@gmail.com</span>
                </a>
            </div>

            <!-- Stats bar -->
            <div class="hero-stats" aria-label="Experience summary">
                <div class="hero-stat">
                    <div class="hero-stat-num">5+</div>
                    <div class="hero-stat-label" data-i18n="hero.stats.experience">Years experience</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-num">6+</div>
                    <div class="hero-stat-label" data-i18n="hero.stats.projects">Projects shipped</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-num">2</div>
                    <div class="hero-stat-label" data-i18n="hero.stats.languages">Native languages</div>
                </div>
            </div>

        </div>

        <!-- Right: photo -->
        <div class="hero-image">
            <img src="/pics/profile.png" alt="Jonathan Hendrix — Backend Developer" />
            <!-- Stack pills shown below photo on desktop -->
            <div class="hero-stack" aria-label="Core technologies">
                <span class="tag">Java</span>
                <span class="tag">Spring Boot</span>
                <span class="tag">Angular</span>
                <span class="tag">Astro</span>
                <span class="tag">Docker</span>
                <span class="tag">TypeScript</span>
            </div>
        </div>

    </div>
</header>


<!-- =============================================
     SCROLL BUTTON (bottom-right)
     ============================================= -->
<nav class="bottom-nav" id="bottomNav" role="navigation" aria-label="Scroll navigation">
    <ul>
        <li>
            <button type="button"
                    class="scroll-button"
                    id="scroll-button"
                    aria-label="Scroll to next section"
                    onclick="__cycleNext()">
                <svg class="scroll-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 9h5V3h6v6h5l-8 12z"/>
                </svg>
                <span class="sr-only" data-i18n="a11y.scroll">Scroll button</span>
            </button>
        </li>
    </ul>
</nav>


<!-- =============================================
     MOBILE MENU TOGGLE
     ============================================= -->
<button class="mobile-menu-toggle"
        id="menu-toggle"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobileNav">
    <i class="fa-solid fa-bars" aria-hidden="true"></i>
</button>


<!-- =============================================
     MOBILE NAV (fullscreen overlay)
     ============================================= -->
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation" aria-hidden="true">

    <!-- Close button -->
    <button class="mobile-nav-close"
            id="menu-close"
            aria-label="Close menu">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>

    <a class="brand" href="#top" aria-label="Back to top">
        <img src="/logo/logoEmerald.svg" alt="JH logo" width="64" height="64">
    </a>

    <a href="#top"               data-i18n="nav.top">Top</a>
    <a href="#projects-position" data-i18n="nav.work">My Work</a>
    <a href="#skills-position"   data-i18n="nav.skills">Skills</a>
    <a href="#about"             data-i18n="nav.about">About Me</a>
    <a href="#contact"           data-i18n="nav.contact">Contact</a>

    <div class="mobile-lang">
        <div class="lang-toggle" role="group" aria-label="Language toggle">
            <button type="button" class="lang-btn" data-lang-btn="es" aria-label="Cambiar a español">🇪🇸</button>
            <button type="button" class="lang-btn" data-lang-btn="en" aria-label="Switch to English">🇬🇧</button>
            <span class="lang-slider" aria-hidden="true"></span>
        </div>
    </div>
</nav>

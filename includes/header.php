<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jonathan Hendrix - Portfolio</title>
    <meta name="description" content="Portfolio of Jonathan Hendrix, Full-Stack Developer based in Seville, Spain.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/logo/favicon.png">

    <!-- FontAwesome for icons -->
    <script src="https://kit.fontawesome.com/b9be0d536e.js" crossorigin="anonymous"></script>
    <!-- Normalize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <!-- Devicon icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

    <!-- Custom CSS & JS -->
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/index.js" defer></script>
    <script src="/js/i18n.js" defer></script>
</head>

<body class="body">

<!-- Skip link for accessibility -->
<a href="#about" class="sr-only sr-only-focusable" data-i18n="a11y.skip">Skip to main content</a>

<header class="hero" id="top">
    <div class="hero-content">
        <div class="hero-text">

            <h1 class="headline-with-logo">
                <img src="/logo/noBgColor.svg" alt="JH logo" class="headline-logo">
                <span class="title-lines">
                    <span data-i18n="hero.title.line1">BACKEND</span>
                    <span data-i18n="hero.title.line2">DEVELOPER</span>
                </span>
            </h1>

            <!-- Social chips (proper names stay, no i18n needed) -->
            <div class="chip-row hero-social-row" role="navigation" aria-label="Primary profile links">
                <a class="chip" href="https://www.linkedin.com/in/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                    <span class="label">LinkedIn</span>
                </a>

                <a class="chip" href="https://github.com/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github" aria-hidden="true"></i>
                    <span class="label">GitHub</span>
                </a>

                <a class="chip" href="mailto:jrhendrixdev@gmail.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    <span class="label">jrhendrixdev@gmail.com</span>
                </a>
            </div>

            <p class="subheadline" data-i18n="hero.subheadline">
                My name is Jonathan Hendrix, I'm a <strong>Backend Developer</strong> based in Seville, Spain,
                focused on building scalable and maintainable web applications.
            </p>

            <!-- Availability badge -->
            <span class="availability-badge hero-availability" data-available="true">
                <span class="dot" aria-hidden="true"></span>
                <span class="availability-text" data-i18n="hero.available">Available to work</span>
            </span>

            <!-- Main CTA -->
            <div class="hero-actions">
                <a href="/docs/CV-Jonathan.pdf"
                   class="chip chip-cta"
                   download
                   aria-label="Download my CV (PDF)">
                    <i class="fa-solid fa-download" aria-hidden="true"></i>
                    <span data-i18n="hero.cv">Download my CV</span>
                </a>
            </div>

        </div>

        <div class="hero-image">
            <img src="/pics/profile.png" alt="Jonathan Hendrix" id="Navbar_Logo" />
        </div>
    </div>
</header>


<nav class="floating-nav" id="floatingNav" role="navigation" aria-label="Main Navigation">
    <ul>
        <li>
            <a href="#top"><img src="/logo/noBgColor.svg" alt="JH logo" width="48" height="48" /></a>
        </li>
        <li><a href="#top" data-i18n="nav.top">Top</a></li>
        <li><a href="#projects-position" data-i18n="nav.work">My Work</a></li>
        <li><a href="#skills-position" data-i18n="nav.skills">Skills</a></li>
        <li><a href="#about" data-i18n="nav.about">About Me</a></li>
        <li><a href="#contact" data-i18n="nav.contact">Contact Me</a></li>

        <!-- Language toggle (no page reload) -->
        <li class="nav-lang">
            <div class="lang-toggle" role="group" aria-label="Language toggle">
                <button type="button" class="lang-btn" data-lang-btn="es" aria-label="Cambiar a español">
                    🇪🇸
                </button>
                <button type="button" class="lang-btn" data-lang-btn="en" aria-label="Switch to English">
                    🇬🇧
                </button>
                <span class="lang-slider" aria-hidden="true"></span>
            </div>
        </li>

    </ul>
</nav>


<nav class="bottom-nav" id="bottomNav" role="navigation" aria-label="Main Navigation">
    <ul>
        <li>
            <div class="arrow-down scroll-button">
                <button type="button" aria-label="Scroll" id="scroll-button" onclick="__cycleNext()">
                    <svg class="scroll-arrow scroll-button" id="scroll-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4 9h5V3h6v6h5l-8 12z"/>
                    </svg>
                    <span class="sr-only" data-i18n="a11y.scroll">Scroll button</span>
                </button>
            </div>
        </li>
    </ul>
</nav>

<button class="mobile-menu-toggle" id="menu-toggle" aria-label="Open menu">☰</button>

<nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">
    <a class="brand" href="#top" aria-label="Back to top">
        <img src="/logo/noBgColor.svg" alt="JH logo"/>
        <span class="sr-only" data-i18n="a11y.home">Home</span>
    </a>

    <a href="#top" data-i18n="nav.top">TOP</a>
    <a href="#projects-position" data-i18n="nav.work">My Work</a>
    <a href="#skills-position" data-i18n="nav.skills">Skills</a>
    <a href="#about" data-i18n="nav.about">About Me</a>
    <a href="#contact" data-i18n="nav.contact">Contact Me</a>

    <!-- Language toggle (no page reload) -->
    <div class="mobile-lang">
        <div class="lang-toggle" role="group" aria-label="Language toggle">
            <button type="button" class="lang-btn" data-lang-btn="es" aria-label="Cambiar a español">
                🇪🇸
            </button>
            <button type="button" class="lang-btn" data-lang-btn="en" aria-label="Switch to English">
                🇬🇧
            </button>
            <span class="lang-slider" aria-hidden="true"></span>
        </div>
    </div>
</nav>

</body>
</html>

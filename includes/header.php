<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jonathan Hendrix - Portfolio</title>
    <meta name="description" content="Portfolio of Jonathan Hendrix, Full-Stack Developer based in Seville, Spain.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/logo/favicon-48.png">
    <!-- FontAwesome for icons -->
    <script src="https://kit.fontawesome.com/b9be0d536e.js" crossorigin="anonymous"></script>
    <!-- stylesheet for equalizing all default element rendering -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <!-- Devicon icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">


    <!-- Custom CSS & JS -->
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/index.js" defer></script>


</head>
<body class="body">

<!-- Skip link for accessibility -->
<a href="#about" class="sr-only sr-only-focusable">Skip to main content</a>

<header class="hero" id="top">
    <div class="hero-content">
        <div class="hero-text">

            <h1 class="headline-with-logo">
                <img src="/logo/noBgColor.svg" alt="JH logo" class="headline-logo">
                BACKEND DEVELOPER
            </h1>

            <!-- NEW: chips row -->
            <div class="chip-row" role="navigation" aria-label="Primary profile links">
                <a class="chip" href="https://www.linkedin.com/in/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i> LinkedIn
                </a>
                <a class="chip" href="https://github.com/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
                </a>
                <a class="chip" href="mailto:jrhendrixdev@gmail.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i> jrhendrixdev@gmail.com
                </a>

                <!-- Availability badge: english page -->
                <span class="availability-badge" data-available="true">
                <span class="dot" aria-hidden="true"></span>
                Available for work
              </span>
            </div>

            <p class="subheadline">
                My name is Jonathan Hendrix, I'm a <strong>Backend Developer</strong> based in Seville, Spain, focused on building scalable and maintainable web applications.
                <br><br>
                <a href="/docs/CV-Jonathan.pdf"
                   class="chip chip-cta"
                   download
                   aria-label="Download my CV (PDF)">
                    <i class="fa-solid fa-download" aria-hidden="true"></i>
                    Download my CV
                </a>
            </p>
        </div>
        <div class="hero-image">
            <img src="/pics/profile.png" alt="Jonathan Hendrix" id="Navbar_Logo" />
        </div>
    </div>
</header>



<nav class="floating-nav" id="floatingNav" role="navigation" aria-label="Main Navigation">
    <ul>
        <li>
            <a href="#"><img src="/logo/noBgColor.svg" alt="JH logo" width="48" height="48" /></a>
        </li>
        <li>
            <a href="#">Top</a>
        </li>
        <li><a href="#projects-position">My Work</a></li>
        <li><a href="#skills-position">Skills</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact Me</a></li>
        <li class="nav-lang">
            <a href="index-es.php" aria-label="Cambiar a español">
                <button class="flag-inline" type="button">🇪🇸</button>
            </a>
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
                <span class="sr-only">Scroll button</span>
            </button>
            </div>
        </li>
    </ul>
</nav>

<button class="mobile-menu-toggle" id="menu-toggle" aria-label="Open menu">☰</button>

<nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">
    <a class="brand" href="#top" aria-label="Back to top">
        <img src="/logo/noBgColor.svg" alt="JH logo"/>
        <span class="sr-only">Home</span>
    </a>
    <a href="#">TOP</a>
    <a href="#projects-position">My Work</a>
    <a href="#skills-position">Skills</a>
    <a href="#about">About Me</a>
    <a href="#contact">Contact Me</a>
    <a href="index-es.php" aria-label="Cambiar a español">
        <button class="flag-inline" type="button">🇪🇸</button>
    </a>
</nav>


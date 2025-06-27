<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jonathan Hendrix - Portfolio</title>
    <meta name="description" content="Portfolio of Jonathan Hendrix, Full-Stack Developer based in Seville, Spain.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/pics/favicon.png">
    <!-- FontAwesome for icons -->
    <script src="https://kit.fontawesome.com/b9be0d536e.js" crossorigin="anonymous"></script>
    <!-- stylesheet for equalizing all default element rendering -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">

    <!-- Custom CSS & JS -->
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <script src="/js/index.js"></script>

</head>
<body>

<!-- Skip link for accessibility -->
<a href="#about" class="sr-only sr-only-focusable">Skip to main content</a>

<header class="hero" id="top">
    <div class="hero-content">
        <div class="hero-text">
            <a href="index-es.php" aria-label="Go to spanish version">
            <button class="flag-button language-switcher" aria-label="Switch to Spanish">
                🇪🇸
            </button>
            </a>

            <h1>FULL STACK DEVELOPER</h1>
            <p class="subheadline">
                My name is Jonathan Hendrix, I'm a <strong>Full-Stack Developer</strong> based in Seville, Spain, focused on building scalable and maintainable web applications.
                <br><br>
                <button class="explore-btn">
                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:eu:15b94d16-72e0-44f6-be5e-e1e90dbaaa62" class="resume-link">
                    My CV
                    <svg class="arrow-icon" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        ></path>
                    </svg>
                    </a>
                </button>
            </p>
        </div>
        <div class="hero-image">
            <img src="/pics/profile.png" alt="Jonathan Hendrix" id="Navbar_Logo" />
        </div>
    </div>
</header>



<nav class="floating-nav" id="floatingNav" role="navigation" aria-label="Main Navigation">
    <ul>
        <li class="active"><a href="#">JONATHAN HENDRIX</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects-position">My Work</a></li>
        <li><a href="#skills-position">Skills</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </ul>
</nav>

<nav class="bottom-nav" id="bottomNav" role="navigation" aria-label="Main Navigation">
    <ul>
        <li>
            <div class="arrow-down scroll-button">
                <button type="button" aria-label="Scroll" id="scroll-button">
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
    <a href="#">TOP</a>
    <a href="#about">About Me</a>
    <a href="#projects-position">My Work</a>
    <a href="#skills-position">Skills</a>
    <a href="#contact">Contact Me</a>
</nav>


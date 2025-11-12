<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Jonathan Hendrix - Portafolio</title>
    <meta name="description" content="Portafolio de Jonathan Hendrix, Desarrollador Backend radicado en Sevilla, España.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/logo/favicon-48.png">
    <!-- FontAwesome para iconos -->
    <script src="https://kit.fontawesome.com/b9be0d536e.js" crossorigin="anonymous"></script>
    <!-- Devicon icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    <!-- Reset / normalize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">

    <!-- CSS y JS personalizados -->
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/index.js" defer></script>
</head>
<body class="body">

<!-- Enlace de accesibilidad -->
<a href="#about" class="sr-only sr-only-focusable">Saltar al contenido principal</a>

<header class="hero" id="top">
    <div class="hero-content">
        <div class="hero-text">

            <h1 class="headline-with-logo">
                <img src="/logo/noBgColor.svg" alt="Logotipo JH" class="headline-logo">
                DESARROLLADOR BACKEND
            </h1>

            <!-- Chips de enlaces principales -->
            <div class="chip-row" role="navigation" aria-label="Enlaces principales de perfil">
                <a class="chip" href="https://www.linkedin.com/in/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i> LinkedIn
                </a>
                <a class="chip" href="https://github.com/jrhendrix-dev" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
                </a>
                <a class="chip" href="mailto:jrhendrixdev@gmail.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i> jrhendrixdev@gmail.com
                </a>

                <!-- Insignia de disponibilidad: versión española -->
                <span class="availability-badge" data-available="true" aria-live="polite">
                  <span class="dot" aria-hidden="true"></span>
                  Disponible para trabajar
                </span>
            </div>

            <p class="subheadline">
                Me llamo Jonathan Hendrix; soy <strong>Desarrollador Backend</strong> en Sevilla, centrado en crear aplicaciones web escalables y mantenibles.
                <br><br>
                <a href="/docs/CV-Jonathan.pdf"
                   class="chip chip-cta"
                   download
                   aria-label="Descargar mi CV (PDF)">
                    <i class="fa-solid fa-download" aria-hidden="true"></i>
                    Descarga mi CV
                </a>

            </p>
        </div>

        <div class="hero-image">
            <img src="/pics/profile.png" alt="Foto de Jonathan Hendrix" id="Navbar_Logo" />
        </div>
    </div>
</header>

<nav class="floating-nav" id="floatingNav" role="navigation" aria-label="Navegación principal">
    <ul>
        <li>
            <a href="#"><img src="/logo/noBgColor.svg" alt="Logotipo JH" width="48" height="48" /></a>
        </li>
        <li><a href="#">Inicio</a></li>
        <li><a href="#projects-position">Mis proyectos</a></li>
        <li><a href="#skills-position">Tecnologías</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#contact">Contáctame</a></li>
        <li class="nav-lang">
            <a href="index.php" aria-label="Cambiar a inglés">
                <button class="flag-inline" type="button" title="English">🇬🇧</button>
            </a>
        </li>
    </ul>
</nav>

<nav class="bottom-nav" id="bottomNav" role="navigation" aria-label="Navegación inferior">
    <ul>
        <li>
            <div class="arrow-down scroll-button">
                <button type="button" aria-label="Desplazar" id="scroll-button" onclick="__cycleNext()">
                    <svg class="scroll-arrow scroll-button" id="scroll-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 9h5V3h6v6h5l-8 12z"/>
                    </svg>
                    <span class="sr-only">Botón de desplazamiento</span>
                </button>
            </div>
        </li>
    </ul>
</nav>

<button class="mobile-menu-toggle" id="menu-toggle" aria-label="Abrir menú">☰</button>

<nav class="mobile-nav" id="mobileNav" aria-label="Navegación móvil">
    <a class="brand" href="#top" aria-label="Volver arriba">
        <img src="/logo/noBgColor.svg" alt="Logotipo JH"/>
        <span class="sr-only">Inicio</span>
    </a>
    <a href="#">Inicio</a>
    <a href="#projects-position">Mis proyectos</a>
    <a href="#skills-position">Tecnologías</a>
    <a href="#about">Sobre mí</a>
    <a href="#contact">Contáctame</a>
    <a href="index.php" aria-label="Cambiar a inglés">
        <button class="flag-inline" type="button" title="English">🇬🇧</button>
    </a>
</nav>

</body>
</html>

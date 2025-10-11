<?php
/**
 * Pie de página para la versión en español del portafolio de Jonathan Hendrix.
 * Estructura igual a la versión en inglés: logo a la izquierda, bloque de contacto centrado,
 * y un “spacer” a la derecha para mantener el centrado real.
 */
?>
<footer>
    <div class="footer-inner">
        <!-- Izquierda: Marca / Logo -->
        <a class="footer-brand" href="#top" aria-label="Volver arriba">
            <img src="/logo/noBgColor.svg" alt="Logo JH">
            <span class="sr-only">Jonathan Hendrix</span>
        </a>

        <!-- Centro: bloque de contacto (centrado al viewport) -->
        <div class="footer-center">
            <div class="social-icons" id="contact">
                <h2>Contáctame:</h2>

                <a href="https://github.com/jrhendrix-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i class="fa-brands fa-github" aria-hidden="true"></i>
                </a>

                <a href="https://linkedin.com/in/jonathan-hendrix-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>

                <p>
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:jrhendrixdev@gmail.com">jrhendrixdev@gmail.com</a><br>
                    <i class="fa-solid fa-phone" aria-hidden="true"></i>
                    <a href="tel:+34635507365">+34 635 507 365</a>
                </p>
            </div>

            <br>
            <p>© 2025 Jonathan Hendrix.</p>
            <p>
                Código licenciado bajo la
                <a href="/LICENSE.md" target="_blank" rel="noopener noreferrer">Licencia MIT</a>.
            </p>
        </div>

        <!-- Derecha: separador vacío para equilibrar la cuadrícula -->
        <div class="footer-spacer" aria-hidden="true"></div>
    </div>
</footer>

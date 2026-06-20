<section id="contact" class="section">

    <p class="section-label" data-i18n="contact.eyebrow">Contact</p>
    <h2 class="section-title" data-i18n="contact.title">Let's talk about your <span>next project</span></h2>

    <div class="contact-grid">

        <!-- ── Left: intro + contact links ── -->
        <div>
            <p class="contact-intro" data-i18n="contact.intro">
                Have a project in mind or looking to bring a backend developer onto your team? Write to me and I'll get back to you within 24 hours.
            </p>

            <div class="contact-links">
                <a class="contact-link" href="mailto:jrhendrixdev@gmail.com">
                    <div class="cl-icon" aria-hidden="true"><i class="fa-solid fa-envelope"></i></div>
                    <div>
                        <p class="cl-label">Email</p>
                        <p class="cl-value">jrhendrixdev@gmail.com</p>
                    </div>
                </a>

                <a class="contact-link"
                   href="tel:+34635507365">
                    <div class="cl-icon" aria-hidden="true"><i class="fa-solid fa-phone"></i></div>
                    <div>
                        <p class="cl-label" data-i18n="contact.phone">Phone</p>
                        <p class="cl-value">+34 635 507 365</p>
                    </div>
                </a>

                <a class="contact-link"
                   href="https://www.linkedin.com/in/jrhendrix-dev"
                   target="_blank" rel="noopener noreferrer">
                    <div class="cl-icon" aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></div>
                    <div>
                        <p class="cl-label">LinkedIn</p>
                        <p class="cl-value">linkedin.com/in/jrhendrix-dev</p>
                    </div>
                </a>

                <a class="contact-link"
                   href="https://github.com/jrhendrix-dev"
                   target="_blank" rel="noopener noreferrer">
                    <div class="cl-icon" aria-hidden="true"><i class="fa-brands fa-github"></i></div>
                    <div>
                        <p class="cl-label">GitHub</p>
                        <p class="cl-value">github.com/jrhendrix-dev</p>
                    </div>
                </a>
            </div>
        </div>

        <!-- ── Right: contact form ── -->
        <form class="contact-form"
              action="/api/contact.php"
              method="POST"
              novalidate
              aria-label="Contact form">

            <div class="form-row">
                <div class="form-group">
                    <label class="form-label" for="contact-name" data-i18n="contact.form.name">Name</label>
                    <input class="form-input"
                           type="text"
                           id="contact-name"
                           name="name"
                           autocomplete="name"
                           placeholder="María García"
                           required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="contact-email" data-i18n="contact.form.email">Email</label>
                    <input class="form-input"
                           type="email"
                           id="contact-email"
                           name="email"
                           autocomplete="email"
                           placeholder="maria@empresa.com"
                           required>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label" for="contact-subject" data-i18n="contact.form.subject">Subject</label>
                <input class="form-input"
                       type="text"
                       id="contact-subject"
                       name="subject"
                       placeholder="Collaboration proposal">
            </div>

            <div class="form-group">
                <label class="form-label" for="contact-message" data-i18n="contact.form.message">Message</label>
                <textarea class="form-input form-textarea"
                          id="contact-message"
                          name="message"
                          placeholder="Tell me about your project..."
                          required></textarea>
            </div>

            <button type="submit" class="btn btn-submit">
                <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
                <span data-i18n="contact.form.send">Send message</span>
            </button>

        </form>

    </div><!-- /.contact-grid -->
</section>

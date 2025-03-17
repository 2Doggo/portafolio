import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contacto" className="section contact">
            <h2>Contacto</h2>
            <p>¿Te gustaría trabajar conmigo o tienes alguna pregunta? ¡Contáctame!</p>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Información de contacto</h3>
                    <p><strong>Email:</strong> tu.email@ejemplo.com</p>
                    <p><strong>LinkedIn:</strong> linkedin.com/in/tuusuario</p>
                    <p><strong>GitHub:</strong> github.com/tuusuario</p>

                    <div className="social-links">
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">Twitter</a>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Tu email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" rows="5" placeholder="Tu mensaje" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
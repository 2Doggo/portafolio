import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <section id="sobre-mi" className="section about-me">
            <h2>Sobre mí</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Soy un desarrollador web apasionado por crear experiencias digitales increíbles.
                        Mi objetivo es combinar diseño y funcionalidad para construir sitios web y
                        aplicaciones que no solo se vean bien, sino que también sean fáciles de usar.
                    </p>
                    <p>
                        Mi viaje en el desarrollo web comenzó con HTML, CSS y JavaScript, y ahora estoy
                        aprendiendo React para crear interfaces de usuario más dinámicas e interactivas.
                    </p>
                </div>
                <div className="skills">
                    <h3>Mis habilidades</h3>
                    <ul>
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Diseño Responsivo</li>
                        <li>Git & GitHub</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
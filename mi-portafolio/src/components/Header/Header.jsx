import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Mi Portafolio</h1>
            <nav>
                <ul>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
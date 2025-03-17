import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
            <p>Diseñado y desarrollado con React</p>
        </footer>
    );
}

export default Footer;
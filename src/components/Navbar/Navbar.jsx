import React from 'react';
import './Navbar.css'; // Importiamo lo stile specifico per questo componente

const Navbar = () => {
    return (
        <nav className="navbar-container">
            {/* Il Logo del tuo sito */}
            <div className="navbar-logo">
                <a href="/">Luca Ruggeri</a>
            </div>

            {/* I link di navigazione */}
            <ul className="navbar-links">
                <li><a href="#about">Chi Sono</a></li>
                <li><a href="#progetti">Progetti</a></li>
                <li><a href="#contatti">Contatti</a></li>
            </ul>

            {/* Un piccolo bottone per il Call to Action (es. scaricare il CV) */}
            <div className="navbar-cta">
                <button className="cv-button">Scarica CV</button>
            </div>
        </nav>
    );
};

export default Navbar;
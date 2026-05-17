import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo / Nome */}
      <div className="navbar-logo">
        <a href="/">Luca Ruggeri</a>
      </div>

      {/* Link di navigazione interni */}
      <ul className="navbar-links">
        <li><a href="#about">Chi Sono</a></li>
        <li><a href="#progetti">Progetti</a></li>
        <li><a href="#contatti">Contatti</a></li>
      </ul>

      {/* Call to Action: Scarica CV */}
      <div className="navbar-cta">
        {/* Trasformato in tag <a> per permettere il download nativo del file inserito in public/ */}
        <a href="/cv.pdf" download="Luca_Ruggeri_CV.pdf" className="cv-button">
          Scarica CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
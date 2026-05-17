import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Stato per gestire l'apertura/chiusura del menu mobile
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per gestire lo scorrimento fluido calcolando l'ingombro della Navbar
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    
    // Chiude automaticamente il menu mobile dopo il click su un link
    setIsOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar-container')?.offsetHeight || 0;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar-container">
      {/* Logo / Nome - Riporta in cima pulito */}
      <div className="navbar-logo">
        <a href="/" onClick={(e) => { e.preventDefault(); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Luca Ruggeri
        </a>
      </div>

      {/* Pulsante Hamburger in Puro CSS (Visibile solo su Mobile) */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu di navigazione"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Contenitore dei Link e della CTA (Reattivo alle classi Mobile) */}
      <div className={`navbar-menu-wrapper ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>Chi Sono</a>
          </li>
          <li>
            <a href="#progetti" onClick={(e) => handleScrollToSection(e, 'progetti')}>Progetti</a>
          </li>
          <li>
            <a href="#contatti" onClick={(e) => handleScrollToSection(e, 'contatti')}>Contatti</a>
          </li>
        </ul>

        {/* Call to Action: Scarica CV */}
        <div className="navbar-cta">
          <a href="/cv.pdf" download="Luca_Ruggeri_CV.pdf" className="cv-button" onClick={() => setIsOpen(false)}>
            Scarica CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
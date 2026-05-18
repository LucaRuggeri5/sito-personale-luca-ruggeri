import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Stato per gestire l'apertura/chiusura del menu mobile
  const [isOpen, setIsOpen] = useState(false);
  // Stato per mostrare/nascondere il nome "Luca Ruggeri"
  const [showName, setShowName] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Monitora lo scroll della pagina per capire quando mostrare il nome
  useEffect(() => {
    const handleScroll = () => {
      // Peschiamo l'altezza dell'elemento Hero (o la sezione iniziale)
      const heroElement = document.querySelector('.hero-container');
      
      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        // Se abbiamo scrollato oltre l'80% dell'Hero, attiviamo il nome
        if (window.scrollY > heroHeight * 0.8) {
          setShowName(true);
        } else {
          setShowName(false);
        }
      }
    };

    // Ascolta l'evento di scroll del browser
    window.addEventListener('scroll', handleScroll);
    
    // Funzione di pulizia (Clean-up) per evitare memory leak
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Funzione per gestire lo scorrimento fluido calcolando l'ingombro della Navbar
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
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
      {/* Sfondo tecnico e linea di decorazione geometrica */}
      <div className="navbar-bg-grid"></div>
      <div className="navbar-border-line"></div>

      {/* Logo / Nome - Riporta in cima pulito */}
      <div className="navbar-logo">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          {/* Il logo SVG rimane sempre visibile come punto di riferimento */}
          <img src="/newfavicon.svg" alt="" className="navbar-logo-img" aria-hidden="true" />
          
          {/* La scritta appare o scompare dinamicamente tramite la classe CSS */}
          <span className={`navbar-logo-text ${showName ? 'visible' : ''}`}>
            Luca Ruggeri
          </span>
        </a>
      </div>

      {/* Pulsante Hamburger in Puro CSS */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu di navigazione"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Contenitore dei Link e della CTA */}
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
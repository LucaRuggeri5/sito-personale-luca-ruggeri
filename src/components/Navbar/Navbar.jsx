import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // Funzione per gestire lo scorrimento fluido calcolando l'ingombro della Navbar
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calcoliamo l'altezza reale della navbar sticky in quel momento
      const navbarHeight = document.querySelector('.navbar-container')?.offsetHeight || 0;
      // Calcoliamo la posizione dell'elemento rispetto alla pagina meno l'altezza della navbar
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
        <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Luca Ruggeri
        </a>
      </div>

      {/* Link di navigazione interni controllati da React */}
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
        <a href="/cv.pdf" download="Luca_Ruggeri_CV.pdf" className="cv-button">
          Scarica CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
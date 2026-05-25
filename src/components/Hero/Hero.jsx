import React from 'react';
import './Hero.css';
// Importazione della foto quadrata dagli assets
import profileImg from '../../assets/luca-ruggeri-img.jpg';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('progetti');
    
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
    <section className="hero-container">
      {/* Sfondo reticolare tecnico geometrico */}
      <div className="hero-tech-grid" aria-hidden="true"></div>

      <div className="hero-wrapper">
        
        <div className="hero-content">
          <h1 className="hero-title">Luca Ruggeri</h1>
          <h2 className="hero-subtitle">Sviluppo interfacce web moderne</h2>

          <p className="hero-description">
            Sono un aspirante <strong>Web Developer specializzato in React</strong>.
            Mi piace costruire applicazioni web che siano semplici, veloci e accessibili a tutti.
          </p>

          <div className="hero-buttons">
            <a href="#progetti" onClick={handleScrollToProjects} className="btn-primary">
              Guarda i miei lavori
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            {/* Elemento decorativo blueprint geometrico dietro la foto */}
            <div className="hero-image-blueprint" aria-hidden="true"></div>
            {/* loading="eager" assicura che l'immagine in cima sia caricata subito senza spostare il layout */}
            <img src={profileImg} alt="Luca Ruggeri" className="hero-profile-img" loading="eager" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
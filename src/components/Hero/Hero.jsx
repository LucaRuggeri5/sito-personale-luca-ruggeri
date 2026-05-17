import React from 'react';
import './Hero.css';

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
      <div className="hero-content">
        <h1 className="hero-title">Luca Ruggeri</h1>
        <h2 className="hero-subtitle">Sviluppo interfacce web moderne.</h2>

        <p className="hero-description">
          Sono un aspirante Web Developer specializzato in <strong>React</strong>.
          Mi piace costruire applicazioni web che siano semplici, veloci e accessibili a tutti.
        </p>

        <div className="hero-buttons">
          <a href="#progetti" onClick={handleScrollToProjects} className="btn-primary">
            Guarda i miei lavori
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import './Hero.css';

const Hero = () => {
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
          <a href="#progetti" className="btn-primary">
            Guarda i miei lavori
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import './Hero.css'; // Importiamo lo stile specifico per la Hero

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Usiamo uno span per un piccolo saluto colorato */}
        <span className="hero-greeting">Ciao, il mio nome è</span>
        
        {/* Il titolo principale deve essere un h1 (unico per pagina) */}
        <h1 className="hero-title">Luca Ruggeri.</h1>
        
        {/* Un titolo secondario per il tuo ruolo */}
        <h2 className="hero-subtitle">Sviluppo interfacce web moderne.</h2>
        
        {/* Una breve descrizione del tuo obiettivo */}
        <p className="hero-description">
          Sono un aspirante Web Developer specializzato in React. 
          Mi piace costruire applicazioni web che siano semplici, veloci e accessibili a tutti.
        </p>

        {/* Bottone per scorrere ai progetti */}
        <div className="hero-buttons">
          <a href="#progetti" className="btn-primary">Guarda i miei lavori</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
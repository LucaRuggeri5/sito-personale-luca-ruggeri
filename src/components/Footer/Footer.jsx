import React from 'react';
import './Footer.css';

const Footer = () => {
  // Otteniamo l'anno corrente dinamicamente per non doverlo aggiornare a mano
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Luca Ruggeri</h3>
          <p>Junior React Developer con la passione per il design pulito.</p>
        </div>

        <div className="footer-socials">
          {/* Sostituisci i # con i tuoi link reali quando pronti */}
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:tuaemail@esempio.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} - Creato con React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
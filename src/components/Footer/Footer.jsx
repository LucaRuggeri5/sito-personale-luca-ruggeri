import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Info personali */}
        <div className="footer-info">
          <h3>Luca Ruggeri</h3>
          <p>Junior React Developer con la passione per il design pulito.</p>
        </div>

        {/* Link rapidi reali coordinati con la sezione contatti */}
        <div className="footer-socials">
          <a href="https://github.com/LucaRuggeri5" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luca-ruggeri97/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:luca.ruggeri5@gmail.com">
            Email
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} - Creato con React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
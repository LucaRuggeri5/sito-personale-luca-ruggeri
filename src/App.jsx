import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

const App = () => {
  // Attiva le animazioni di comparsa allo scroll su tutta la pagina
  useScrollReveal();

  // Stato per la Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Automatismo: Controllo automatico della fascia oraria del sistema (19:00 - 06:00)
  useEffect(() => {
    const checkTimeTheme = () => {
      const currentHour = new Date().getHours();
      const shouldBeDark = currentHour >= 19 || currentHour < 6;
      setIsDarkMode(shouldBeDark);
    };

    // Esecuzione immediata al caricamento
    checkTimeTheme();

    // Controllo ciclico ogni 10 minuti per aggiornare se la pagina resta aperta
    const interval = setInterval(checkTimeTheme, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Effetto per sincronizzare la classe globale sul tag body del documento
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Gestore per l'inversione manuale al click del pulsante
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <div className="reveal" id="about"><About /></div>
        <div className="reveal" id="progetti"><Projects /></div>
        <div className="reveal" id="contatti"><Contact /></div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
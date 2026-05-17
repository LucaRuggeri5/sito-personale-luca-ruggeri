import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Forza lo scroll a zero assoluto all'avvio/refresh immediato
    window.scrollTo(0, 0);

    // Gestione pulita del reset anche in caso di ricaricamento asincrono pesante
    const handleResetScroll = () => {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    };

    if (document.readyState === 'complete') {
      handleResetScroll();
    } else {
      window.addEventListener('load', handleResetScroll);
    }

    // Listener per la visibilità del bottone
    const toggleVisibility = () => {
      // Usiamo window.scrollY al posto del deprecato pageYOffset
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Pulizia totale degli eventi per prevenire Memory Leak
    return () => {
      window.removeEventListener('load', handleResetScroll);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-btn" aria-label="Torna in alto">
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
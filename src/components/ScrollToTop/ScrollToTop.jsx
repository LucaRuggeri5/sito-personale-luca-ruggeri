import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Gestione pulita del reset in modo asincrono per non bloccare il caricamento del CSS
    const handleResetScroll = () => {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    };

    // Usiamo un piccolo timeout asincrono per evitare il "layout forzato" durante l'evento load
    const delayedReset = () => {
      setTimeout(handleResetScroll, 0);
    };

    if (document.readyState === 'complete') {
      delayedReset();
    } else {
      window.addEventListener('load', delayedReset);
    }

    // Listener per la visibilità del bottone
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    // Pulizia totale degli eventi per prevenire Memory Leak
    return () => {
      window.removeEventListener('load', delayedReset);
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
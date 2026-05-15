import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15, // L'animazione parte quando il 15% della sezione è visibile
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    // Seleziona tutti gli elementi con la classe 'reveal'
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
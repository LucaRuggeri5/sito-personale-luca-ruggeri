import React from 'react';
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

  return (
    <div className="App">
      <Navbar />
      
      {/* Contenitore principale semantico per la SEO e l'accessibilità */}
      <main>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Contact /></div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
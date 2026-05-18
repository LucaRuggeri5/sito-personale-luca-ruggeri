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
      
      <main>
        <Hero />
        <div className="reveal" id="about"><About /></div>
        <div className="reveal" id="progetti"><Projects /></div>
        <div className="reveal" id="contatti"><Contact /></div>
      </main>
      
      <footer />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
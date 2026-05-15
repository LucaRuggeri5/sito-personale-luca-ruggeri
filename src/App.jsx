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

  useScrollReveal();

  return (
    <div className="App">
      <Navbar />
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
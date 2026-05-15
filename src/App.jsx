import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import './About.css';

const About = () => {
  const skills = ["React", "JavaScript (ES6+)", "CSS3 & HTML5", "PostgreSQL", "Supabase", "Git & GitHub", "Vite"];

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        {/* Colonna Sinistra: Testo su di te */}
        <div className="about-text">
          <h2 className="section-title">Chi Sono</h2>
          <p>
            Ciao! Sono Luca, un appassionato sviluppatore web con una forte curiosità per tutto ciò che riguarda il mondo digitale. 
            Ho iniziato il mio percorso concentrandomi sul frontend, in particolare su <strong>React</strong>, perché amo vedere le mie idee prendere vita nel browser.
          </p>
          <p>
            Il mio obiettivo è scrivere codice pulito, scalabile e facile da mantenere, 
            senza mai dimenticare l'importanza dell'esperienza utente (UX). 
            Quando non sono davanti allo schermo, mi piace seguire il calcio e tenermi aggiornato sulle ultime tecnologie.
          </p>
        </div>

        {/* Colonna Destra: Le tue competenze */}
        <div className="about-skills">
          <h3>Le mie Skill</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './About.css';

// Importiamo le icone SVG dalla cartella degli assets
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import jsIcon from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react.svg';
import gitIcon from '../../assets/icons/git.svg';
import viteIcon from '../../assets/icons/vite.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import postgresIcon from '../../assets/icons/postgresql.svg';
import mysqlIcon from '../../assets/icons/mysql.svg';
import expressIcon from '../../assets/icons/express.svg'

const About = () => {
  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Git", icon: gitIcon },
    { name: "Vite", icon: viteIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express", icon: expressIcon },
    { name: "PostgreSQL", icon: postgresIcon },
    { name: "MySQL", icon: mysqlIcon }
  ];

  return (
    <section id="about" className="about-container">
      {/* Sfondo geometrico a linee (Reticolo Tecnico) */}
      <div className="about-tech-mesh" aria-hidden="true"></div>

      <div className="about-content">
        
        <div className="about-text">
          <h2 className="section-title">Chi Sono</h2>
          <p>
            Ciao! Sono Luca, un appassionato sviluppatore web con una forte curiosità per tutto ciò che riguarda il mondo digitale. 
            Ho iniziato il mio percorso concentrandomi sul frontend, in particolare su <strong>React</strong>, perché amo vedere le mie idee prendere vita nel browser.
          </p>
          <p>
            Il mio obiettivo è scrivere codice pulito, scalabile e facile da mantenere, 
            senza mai dimenticare l'importanza dell'esperienza utente (UX). 
            Quando non sono davanti sullo schermo, mi piace seguire il calcio e tenermi aggiornato sulle ultime tecnologie.
          </p>
        </div>

        <div className="about-skills">
          {/* Micro-cornice geometrica interna decorativa */}
          <div className="skills-blueprint-frame" aria-hidden="true"></div>
          
          <h3>Le mie Skill</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './About.css';

// Importiamo le icone SVG dalla cartella degli assets
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import jsIcon from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react.svg';
import githubIcon from '../../assets/icons/github.svg'
import gitIcon from '../../assets/icons/git.svg';
import viteIcon from '../../assets/icons/vite.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import postgresIcon from '../../assets/icons/postgresql.svg';
import mysqlIcon from '../../assets/icons/mysql.svg';
import expressIcon from '../../assets/icons/express.svg';

const About = () => {
  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "GitHub", icon: githubIcon },
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
            Ciao, sono Luca. Ho scelto di specializzarmi nello sviluppo frontend <strong>(in particolare con React)</strong> spinto dal desiderio di unire logica di programmazione e impatto visivo. Per me, lo sviluppo web non è solo scrittura di codice, ma il mezzo per dare vita a soluzioni interattive concrete ed efficienti.
          </p>
          <p>
            Il mio approccio si basa sulla scrittura di codice pulito, scalabile e documentato, mantenendo sempre <strong>l'esperienza utente (UX) al centro di ogni decisione architetturale.</strong> Quando stacco dallo schermo, mi piace ricaricare le energie seguendo il calcio e restare sintonizzato sulle ultime novità del panorama tech.
          </p>
        </div>

        <div className="about-skills">
          {/* Micro-cornice geometrica interna decorativa */}
          <div className="skills-blueprint-frame" aria-hidden="true"></div>
          
          <h3>Le mie Skills</h3>
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
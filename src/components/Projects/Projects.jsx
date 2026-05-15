import React from 'react';
import './Projects.css';

const Projects = () => {
  // Questa è la nostra "base dati" temporanea (Mock Data)
  // In futuro, questi dati arriveranno da Supabase!
  const myProjects = [
    {
      id: 1,
      title: "E-commerce App",
      description: "Un negozio online completo costruito con React e CSS.",
      tech: ["React", "CSS", "Vite"],
      link: "#"
    },
    {
      id: 2,
      title: "Meteo App",
      description: "App che mostra il meteo in tempo reale usando API esterne.",
      tech: ["JavaScript", "API", "React"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Una To-Do list avanzata per gestire i propri impegni.",
      tech: ["React", "Local Storage"],
      link: "#"
    }
  ];

  return (
    <section id="progetti" className="projects-container">
      <h2 className="projects-title">I miei Progetti</h2>
      
      <div className="projects-grid">
        {myProjects.map((project) => (
          /* Ogni elemento creato con map deve avere una 'key' unica per React */
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tag, index) => (
                <span key={index} className="tech-tag">{tag}</span>
              ))}
            </div>
            
            <a href={project.link} className="project-link">Vedi progetto →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
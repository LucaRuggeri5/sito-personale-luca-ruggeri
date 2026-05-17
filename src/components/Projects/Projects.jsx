import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import './Projects.css';

const Projects = () => {
  const [dbProjects, setDbProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('projects').select('*');
      if (error) throw error;
      setDbProjects(data);
    } catch (error) {
      console.error("Errore recupero dati:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const placeholders = [
    { id: 'p1', title: "Progetto Esempio 1", description: "Descrizione breve per testare l'allineamento della card.", tech: ["React", "Tailwind"], image_url: "" },
    { id: 'p2', title: "Progetto Esempio 2", description: "Descrizione un po' più lunga per vedere come si comporta il testo quando occupa più righe all'interno della griglia.", tech: ["JavaScript", "Node.js"], image_url: "" },
    { id: 'p3', title: "Progetto Esempio 3", description: "Test layout.", tech: ["HTML", "CSS"], image_url: "" },
    { id: 'p4', title: "Progetto Esempio 4", description: "Test layout.", tech: ["Vite"], image_url: "" },
    { id: 'p5', title: "Progetto Esempio 5", description: "Test layout.", tech: ["React"], image_url: "" },
  ];

  const allProjects = [...dbProjects, ...placeholders].slice(0, 6);

  if (loading) {
    return (
      <section className="projects-container">
        <div className="loading">Caricamento progetti...</div>
      </section>
    );
  }

  return (
    <section id="progetti" className="projects-container">
      <h2 className="projects-title">I miei Progetti</h2>

      <div className="projects-grid">
        {allProjects.map((project) => (
          <div key={project.id} className="project-card">
            
            <div className="project-image">
              {project.image_url ? (
                <img src={project.image_url} alt={project.title} />
              ) : (
                <div className="image-placeholder">
                  <span>Screenshot in arrivo</span>
                </div>
              )}
            </div>

            <div className="project-card-content">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {Array.isArray(project.tech) && project.tech.map((tag, index) => (
                    <span key={index} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <a href={project.link || "#"} target="_blank" rel="noreferrer" className="project-link">
                Vedi progetto <span>→</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
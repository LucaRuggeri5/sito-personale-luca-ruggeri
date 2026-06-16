import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import './Projects.css';

const Projects = () => {
  const [dbProjects, setDbProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  // Stato per gestire l'apertura/chiusura della tendina dei progetti extra
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.schema('sito-personale-portfolio').from('projects').select('*');
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

  // Calcoliamo i progetti da renderizzare: se è espanso li mostriamo tutti, altrimenti solo i primi 2
  const visibleProjects = isExpanded ? dbProjects : dbProjects.slice(0, 2);

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
        {visibleProjects.map((project) => (
          /* TRASFORMATO IN TAG "A" PER RENDERE TUTTA LA CARD CLICCABILE */
          <a 
            key={project.id} 
            href={project.link || "#"} 
            target="_blank" 
            rel="noreferrer" 
            className="project-card"
          >
            
            <div className="project-image">
              <img src={project.image_url} alt={project.title} />
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

              {/* ORA È UN SEMPLICE DIV ESTETICO POICHÉ IL LINK AVVOLGE GIÀ TUTTO */}
              <div className="project-link">
                Vedi progetto <span>→</span>
              </div>
            </div>

          </a>
        ))}
      </div>

      {/* Il pulsante appare solo se ci sono effettivamente più di 2 progetti totali nel database */}
      {dbProjects.length > 2 && (
        <div className="projects-action-wrapper">
          <button 
            className={`btn-toggle-projects ${isExpanded ? 'active' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Mostra meno' : 'Mostra altri progetti'}
            <span className="btn-toggle-arrow">↓</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
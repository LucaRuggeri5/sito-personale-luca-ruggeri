import React, { useEffect, useState } from 'react';
import {supabase} from '../../supabaseClient'
import './Projects.css';

const Projects = () => {
  // Prepariamo una "scatola" vuota (stato) dove metteremo i progetti quando arriveranno
  const [projects, setProjects] = useState([]);
  // Uno stato per capire se stiamo ancora aspettando la risposta dal database
  const [loading, setLoading] = useState(true);

  // Questa funzione va a bussare alla porta di Supabase
  const fetchProjects = async () => {
    try {
      setLoading(true); // Diciamo all'app di mostrare il caricamento
      
      // Chiediamo alla tabella 'projects' di darci tutto (*)
      const { data, error } = await supabase
        .from('projects')
        .select('*');

      if (error) throw error; // Se c'è un errore, saltiamo al blocco catch

      setProjects(data); // Mettiamo i dati reali nella nostra scatola
    } catch (error) {
      console.error("Errore durante il recupero dei dati:", error.message);
    } finally {
      setLoading(false); // Finito il lavoro (sia nel bene che nel male)
    }
  };

  // useEffect dice a React: "Appena il componente appare sullo schermo, fai questo"
  useEffect(() => {
    fetchProjects();
  }, []); // Le parentesi quadre vuote significano: "fallo solo una volta"

  // Se i dati non sono ancora pronti, mostriamo un testo di cortesia
  if (loading) {
    return <section className="projects-container">Caricamento progetti...</section>;
  }

  return (
    <section id="progetti" className="projects-container">
      <h2 className="projects-title">I miei Progetti</h2>
      
      <div className="projects-grid">
        {/* Usiamo .map() non più sui dati finti, ma sulla variabile 'projects' dello stato */}
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-tech">
              {/* Controlliamo che tech esista, poi facciamo il ciclo */}
              {project.tech && project.tech.map((tag, index) => (
                <span key={index} className="tech-tag">{tag}</span>
              ))}
            </div>
            
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              Vedi progetto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
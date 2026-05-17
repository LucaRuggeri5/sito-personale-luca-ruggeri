import React from 'react';
import './Contact.css';

import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import discordIcon from '../../assets/icons/discord.svg';
import emailIcon from '../../assets/icons/email.svg';

const Contact = () => {
  const socialLinks = [
    { id: 1, platform: "LinkedIn", value: "Luca Ruggeri", link: "https://www.linkedin.com/in/luca-ruggeri97/", icon: linkedinIcon },
    { id: 2, platform: "GitHub", value: "LucaRuggeri5", link: "https://github.com/LucaRuggeri5", icon: githubIcon },
    { id: 3, platform: "Discord", value: "rujo1927", link: "https://discord.com/users/161533401122340864", icon: discordIcon },
    { id: 4, platform: "Email", value: "luca.ruggeri5@gmail.com", link: "mailto:luca.ruggeri5@gmail.com", icon: emailIcon }
  ];

  return (
    <section id="contatti" className="contact-container">
      <h2 className="contact-title">Mettiamoci in contatto</h2>
      {/* Nuovo sottotitolo di guida per l'utente */}
      <p className="contact-subtitle">
        Clicca qui sotto per scrivermi un'email o raggiungermi sui miei canali social.
      </p>
      
      <div className="contact-grid">
        {socialLinks.map((social) => (
          <a key={social.id} href={social.link} target="_blank" rel="noreferrer" className="social-card">
            <img src={social.icon} alt={social.platform} className="social-icon" />
            <h3>{social.platform}</h3>
            <p>{social.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
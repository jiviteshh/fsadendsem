import React from 'react';
import './styles/About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m <strong>Jivitesh</strong>, a forward-thinking Web Developer focused on building immersive, high-performance web experiences.
            <br /><br />
            I specialize in combining elegant design with robust code to create fast, accessible, and visually stunning websites.
            <br /><br />
            From dynamic interfaces to responsive layouts, my goal is to bring futuristic ideas to life—beautifully and efficiently.
          </p>
        </div>

        {/* LinkedIn Profile Section */}
        <div className="about-right">
          <a href="https://www.linkedin.com/in/jivitesh" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <button className="linkedin-button">Visit LinkedIn</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./styles/Homepage.css";

const Homepage = () => {
  return (
    <section id="home" className="home-section">
      <div className="content-left">
        <h2 className="welcome-text glow-text">Welcome to My Digital Universe</h2>
        <h3 className="myself-text glow-text">Where Innovation Meets Imagination</h3>
        <div className="name-section">
          <h2 className="name-text neon-title">Jivitesh</h2>
          <p className="role-text">Web Developer | Tech Enthusiast</p>
        </div>
      </div>
      <div className="content-right">
        <img
          src="profile.jpg" 
          alt="Profile"
          className="profile-image"
        />
        <a href="https://1drv.ms/b/c/75a53990a1f2fd94/Ec6DC3v7dutBtq-iM_D2uecBKKdjgFxT--Zi3wJT3-Phcw?e=onBQWH" target="_blank" rel="noopener noreferrer" className="resume-link">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Homepage;

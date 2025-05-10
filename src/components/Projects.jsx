import { useState } from 'react';
import "./styles/Projects.css";

function Projects() {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Projects data
  const projects = [
    {
      icon: "/jobportal.png",
      title: "Job Portal",
      techStack: "ReactJs, Django",
      liveLink: "https://www.linkedin.com/feed/",
      category: "react-django"
    },
    {
      icon: "/calci.png",
      title: "Calculator",
      techStack: "HTML, CSS, JavaScript",
      liveLink: "https://www.calculator.net/",
      category: "html-css-js"
    },
    {
      icon: "/weather.svg",
      title: "Weather App",
      techStack: "HTML, CSS, JavaScript",
      liveLink: "https://www.accuweather.com/en/in/vaddeswaram/2836136/weather-forecast/2836136",
      category: "html-css-js"
    },
    {
      icon: "/blog.png",
      title: "Blog Application",
      techStack: "HTML, CSS, Django",
      liveLink: "https://www.example.com/",
      category: "html-css-django"
    },
    {
      icon: "/ecommerce.png",
      title: "E-commerce Store",
      techStack: "ReactJs, Django",
      liveLink: "https://www.example.com/",
      category: "react-django"
    }
  ];

  // Filtered projects based on selected category
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      {/* Filter Buttons */}
      <div className="projects-filter">
        <button className={`filter-button ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>All</button>
        <button className={`filter-button ${selectedCategory === 'html-css-js' ? 'active' : ''}`} onClick={() => setSelectedCategory('html-css-js')}>HTML/CSS/JS</button>
        <button className={`filter-button ${selectedCategory === 'react-django' ? 'active' : ''}`} onClick={() => setSelectedCategory('react-django')}>React & Django</button>
        <button className={`filter-button ${selectedCategory === 'html-css-django' ? 'active' : ''}`} onClick={() => setSelectedCategory('html-css-django')}>HTML/CSS & Django</button>
      </div>

      {/* Display filtered projects */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">
              <img src={project.icon || "/placeholder.svg"} alt={`${project.title} icon`} />
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech">{project.techStack}</p>
            </div>

            <a href={project.liveLink} className="view-live-button" target="_blank" rel="noopener noreferrer">
              VIEW LIVE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

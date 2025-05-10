import "./styles/Skills.css";

function Skills() {
  const categories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: "/html-5.svg", desc: "Markup language for web structure" },
        { name: "CSS", icon: "/css-3.svg", desc: "Styling language for web pages" },
        { name: "JavaScript", icon: "/js.svg", desc: "Scripting language for dynamic content" },
        { name: "React.js", icon: "/react.svg", desc: "JavaScript library for building UI" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "/c.svg", desc: "Procedural programming language" },
        { name: "Java", icon: "/java.svg", desc: "Object-oriented programming language" },
        { name: "Python", icon: "/python.svg", desc: "High-level, versatile language" },
        { name: "SQL", icon: "/sql-database-generic.svg", desc: "Database querying language" },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Problem Solving", icon: "/ps.svg", desc: "Analyzing and resolving issues" },
        { name: "Communication", icon: "/placeholder.svg", desc: "Clear and effective interaction" },
        { name: "Team Management", icon: "/teamwork.svg", desc: "Leading and coordinating teams" },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {categories.map((category, i) => (
          <div key={i} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon || "/placeholder.svg"} alt={skill.name} />
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

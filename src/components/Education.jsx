import React from "react";
import "./styles/Education.css";


function Education() {
  const educationData = [
    {
      period: "2023-2027",
      institution: "Koneru Lakshmiah Education Foundation",
      course: "Engineering",
      details: "B.Tech , CSE",
      location: "Vijayawada AP",
      logo: "kl.png",
    },
    {
      period: "2021-2023",
      institution: "Narayana Junior College",
      course: "12th Class",
      details: "Physics, Chemistry, Maths ( MPC )",
      additionalInfo: "GPA in State board",
      location: "Ap",
      logo: "narayana.png",
    },
    {
      period: "2020-2021",
      institution: "Viswabharathi E.M High School",
      course: "10th Class",
      details: "93% in State board ( MBSE )",
      location: "Ap",
      logo: "school.png",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-status">
        <h3 className="current-status">
          Currently Pursuing B.Tech in Computer Science & Engineering
        </h3>
      </div>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-period">{edu.period}</div>
              <div className="timeline-info">
                <div className="institution-logo">
                  <img src={edu.logo || "/placeholder.svg"} alt={edu.institution} />
                </div>
                <div className="institution-details">
                  <h4>{edu.course}</h4>
                  <h5>{edu.institution}</h5>
                  <p>{edu.details}</p>
                  {edu.additionalInfo && <p>{edu.additionalInfo}</p>}
                  <p className="location">{edu.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

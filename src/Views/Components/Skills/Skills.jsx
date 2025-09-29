

import React from 'react';
import '../../Components/Skills/Skills.css'

const skills = {
  "Front-End": [
  
    { name: "HTML", level: "primary" },
    
    { name: "CSS / SCSS", level: "primary" },
      { name: "JavaScript", level: "primary" },

    { name: "React", level: "primary" },
    { name: "React Native", level: "primary" },
     { name: "Bootstrap", level: "primary" },
     { name: "Bootstrap React", level: "primary" },
     { name: "React Navigation", level: "primary" },
     { name: "React Native Elements", level: "primary" },
   
  
    { name: "Vite", level: "experienced" },
    { name: "Lottie Files / lottie-web", level: "experienced" },
   
  ],
  "Back-End": [
    { name: "Node.js", level: "primary" },
    { name: "Express.js", level: "primary" },
    { name: "Firebase", level: "primary" },
    { name: "Supabase", level: "primary" },
     { name: "REST API", level: "primary" },
  
   
  ],
  "DB & DevOps": [
    { name: "MySQL", level: "primary" },
    { name: "MongoDB", level: "primary" },
    { name: "Firebase", level: "primary" },
    { name: "Supabase", level: "primary" },
  
    { name: "Docker", level: "experienced" },
   
  ],
 
  "Tools & OS": [
    { name: "Git", level: "primary" },
    { name: "GitHub", level: "primary" },
        { name: "WordPress", level: "primary" },
    { name: "macOS", level: "primary" },
    { name: "Windows", level: "primary" },
    { name: "Figma", level: "experienced" },
        { name: "Photoshop", level: "experienced" },
   

  ],
};

const Skills = () => {




    return(
        <section className="skills" id='skills'>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-legend">
        <span className="dot primary"></span> Primary stack
       
        <span className="dot experienced"></span> Experienced
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-column">
            <h3>{category}</h3>
            <div className="skills-tags">
              {items.map((skill) => (
                <span key={skill.name} className={`tag ${skill.level}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}

export { Skills }
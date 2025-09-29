

import React from 'react';
import '../ProyectosMobile/ProyectosMobile.css'


const projectsData = [
  {
    title: "Proyecto Mi Escuela Morón",
    description:
      "Aplicación Movil realizada en REACT NATIVE pensada y orientada para profesores del municipio de Morón que deben tomar horas y no saben en donde quedan las escuelas que se ofertan. La App les permite ver en el mapa donde estan ubicacadas como ademas informarse sobre otros items del establecimiento.",
    image: "/images/proyectoescuela.jpg",
    tags: ["REACT NATIVE","JAVASCRIPT", "FIREBASE"],
    status: "ready",
    released: "yes",
    repo: null,
    demo: "https://play.google.com/store/apps/details?id=com.tuappsinvueltas.Mi_Escuela_Moron&pcampaignid=web_share", // si no hay sitio en vivo
    best: true,
  },
  {
    title: "Mi Aula de MÚsica",
    description:
      "App Movil realizada en REACT NATIVE pensada para estudiantes de música. La App cuenta con material de lectura sobre distintos temas de teoria musical como ademas informacion sobre distintos profesores de isntrumento a los que pueden acceder.",
    image: "/images/aulamusica.jpg",
    tags: ["JAVASCRIPT", "REACT", "SUPABASE"],
    status: "ready",
    released: "yes",
    repo: null,
    demo: "https://play.google.com/store/apps/details?id=com.angel1987.aulamusica&pcampaignid=web_share", // tu web real
    best: true,
  },
  
];

const ProyectosMobile = () => {


    return(
        <section className="projects">
      <h2>Aplicaciones Moviles</h2>

      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <div key={i} className="project-card">
            {/* Imagen clickeable */}
            <a
              href={project.demo || project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} />
            </a>

            {/* Info */}
            <div className="project-info">
              <h3>
                {project.title}{" "}
                {project.best && <span className="best">Best</span>}
              </h3>
              <p>{project.description}</p>

              {/* Tags */}
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Estado */}
              <p className="status">
                Released:{" "}
                <span
                  className={project.status === "ready" ? "green" : "yellow"}
                >
                  ● {project.status}
                </span>{" "}
                | {project.released}
              </p>

              {/* Links */}
              <div className="links">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit"
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}

export { ProyectosMobile }

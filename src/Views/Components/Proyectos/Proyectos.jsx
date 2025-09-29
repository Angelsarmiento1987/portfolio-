
import React from 'react';
import '../../Components/Proyectos/Proyectos.css'

const projectsData = [
  {
    title: "Costumbres Argentinas Pet Shop",
    description:
      "Tienda de mascotas realizada en Wordpress",
    image: "/images/costumbreanimal.png",
    tags: ["WORDPRESS"],
    status: "ready",
    released: "yes",
    repo: null,
    demo: "https://www.costumbreanimal.com.ar", // si no hay sitio en vivo
    best: true,
  },
  {
    title: "Mara Araujo Cardiologa",
    description:
      "Landing Page realizada en React para servicios de cardiologia",
    image: "/images/marina.png",
    tags: ["JAVASCRIPT", "REACT"],
    status: "ready",
    released: "yes",
    repo: null,
    demo: "https://www.mararaujocardiologa.com.ar/", // tu web real
    best: true,
  },
  {
    title: "Eco Holistica Gaia",
    description:
      "E-Commerce realizado en Wordpress para tienda de productos holisticos",
    image: "/images/holistica.png",
    tags: ["WORDPRESS"],
    status: "ready",
    released: "yes",
    repo: null,
    demo: "https://www.ecoholisticagaia.com.ar",
    best: true,
  },
   {
    title: "Bajo Licencia Soft",
    description:
      "App Web realizada en React orientada a musicos. Permite cargar letras de canciones y darles un scroll automatico tipo telepromter. Ademas puede conectarse a pedales Bluetooth para pasar las letras mientras se ejecuta la canción",
    image: "/images/bajolicencia.png",
    tags: ["JAVASCRIPT", "REACT", ],
    status: "ready",
    released: "yes",
    repo: "https://github.com/Angelsarmiento1987/bajolicenciasoft",
    demo: "https://www.bajolicenciasoft.com.ar",
    best: true,
  },
   {
    title: "Abogados Padua",
    description:
      "Landing Page realizada en Wordpress para el estudio de abogados VM",
    image: "/images/abogados.png",
    tags: ["WORDPRESS"],
    status: "ready",
    released: "yes",
    repo: null,
    demo: "https://www.abogadospadua.com.ar",
    best: true,
  },
   {
    title: "Generador de codigos QR",
    description:
      "App Web realizada en React para poder generar codigos QR sin necesidad de registrarse ni suscribirse a ninguna web",
    image: "/images/codigoqr.png",
    tags: ["JAVASCRIPT", "REACT"],
    status: "ready",
    released: "yes",
    repo: "https://github.com/Angelsarmiento1987/qrgenerador",
    demo: "https://angelsarmiento1987.github.io/qrgenerador/",
    best: true,
  },
];

const Proyectos = () => {


    return(
        <section className="projects" id='proyectos'>
      <h2>Proyectos WEB</h2>

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

export { Proyectos }
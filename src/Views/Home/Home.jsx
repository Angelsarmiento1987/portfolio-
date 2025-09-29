
import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaBehance, FaTelegram } from "react-icons/fa";
import { FaBook, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { Proyectos } from '../Components/Proyectos/Proyectos';
import { ProyectosMobile } from '../Components/ProyectosMobile/ProyectosMobile';
import { Skills } from '../Components/Skills/Skills';
import { Footer } from '../Components/Footer/Footer';

import '../Home/Home.css'
import mifoto from '../../Img/fotomiahalftone.png'

const timelineData = [
  {
    date: "2018",
    icon: <FaBook />,
    title: "Primeros Pasos",
    description: "Estudiando los fundamentos de la programación",
  },
  {
    date: "2021-2022",
    icon: <FaGraduationCap />,
    title: "Diplomatura en diseño web Full Stack (UTN)",
    description: "Estudiando todo sobre JavaScript, React, React Native, Node js, etc",
  },
  {
    date: "2022",
    icon: <FaGraduationCap />,
    title: "Wordpress",
    description: "Curso de Wordpress en UTN",
  },
  {
    date: "2022-2023",
    icon: <FaBriefcase />,
    title: "Primeros trabajos Freelance",
    description: "Realizacion de proyectos para clientes y propios",
  },
  {
    date: "2023",
    icon: <FaBriefcase />,
    title: "Creación de Web Sin Vueltas",
    description: "Creación de mi propio emprendimiento de Paginas Web y Aplicaciones Moviles",
  },
];

const Home = () => {

    const itemsRef = useRef([]);

    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

    return(  
        <>

          <nav className="navbar">
      <div className="logo">Angel Sarmiento <span className='spanNav'>WEB DEVELOPER</span></div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Inicio</a></li>
        <li><a href="#sobremi">Sobre Mi</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>



         <section className="hero" id='home'>
      {/* Texto */}
      <div className="hero-text">
        <h2>Angel Sarmiento</h2>
        <h1>Web Developer</h1>
        <p>
         Con 5 años de experiencia en desarrollo web, he trabajado de forma independiente creando soluciones digitales para distintos clientes y llevando adelante mis propios proyectos. Me formé en programación y desde hace 4 años trabajo como desarrollador freelance, lo que me permitió adaptarme a diferentes necesidades, resolver problemas de manera autónoma y aprender constantemente nuevas tecnologías.
        </p>

        {/* Redes sociales */}
        <div className="hero-socials">
         
          <a href="https://www.linkedin.com/in/%C3%A1ngel-sarmiento-b64ab7213/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Angelsarmiento1987" target="_blank" rel="noreferrer"><FaGithub /></a>
       
     
        </div>
      </div>

      {/* Imagen */}
      <div className="hero-image">
        <img src={mifoto} alt="Mi foto" />
      </div>
    </section>


  <section className="about" id='sobremi'>
      <div className="about-left">
        <h2>Sobre mi</h2>
        <p>
    ¡Hola! Soy desarrollador web full stack con experiencia creando aplicaciones escalables y fáciles de usar. Me enfoco en desarrollar soluciones limpias, eficientes y de alta calidad para clientes y proyectos propios.

        </p>
        <p>
         Mi stack principal es el desarrollo frontend con React y React Native, complementado con soluciones full-stack utilizando Node.js. He trabajado en proyectos freelance y propios, donde desarrollé aplicaciones web adaptadas a diferentes necesidades y enfoques.

        </p>
        <p>
  Soy el creador de <a href="https://www.websinvueltas.com.ar" className='linkWeb'>Web Sin Vueltas</a>
 , un proyecto enfocado en el desarrollo de aplicaciones web claras y funcionales. 
  Me interesa especialmente la optimización del rendimiento, la eficiencia del código y la mejora de la experiencia de usuario.
</p>
        <p>
          Disfruto aprender y aplicar nuevas tecnologías mediante la creación de proyectos prácticos. Este enfoque me permite comprender rápidamente cómo se comportan las herramientas en escenarios reales.

        </p>
      </div>

      <div className="about-right">
        <div className="timeline">
          {timelineData.map((item, i) => (
            <div
              key={i}
              className="timeline-item fade-in-right"
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <span className="timeline-date">{item.date}</span>
              <span className="timeline-icon">{item.icon}</span>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Proyectos/>
    <ProyectosMobile/>
    <Skills/>
    <Footer/>

        </>
    )
}

export { Home }
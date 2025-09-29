
import React from 'react';
import { FaTelegramPlane, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import '../Footer/Footer.css'

const Footer = () => {


    return(
          <div className="contact-section">
    
      <div className="contact" id='contacto'>
        <h2>Contacto</h2>
        <p className="email">angelsar.desarrolladorweb@gmail.com</p>
        <div className="social-icons">
          
           <a href="https://www.linkedin.com/in/%C3%A1ngel-sarmiento-b64ab7213/" target="_blank" rel="noreferrer" className='iconFooter'><FaLinkedin /></a>
                    <a href="https://github.com/Angelsarmiento1987" target="_blank" rel="noreferrer" className='iconFooter'><FaGithub /></a>
                 
        </div>
        
      </div>
      <footer>© 2025 Angel Sarmiento</footer>
    </div>
    )
}

export { Footer }
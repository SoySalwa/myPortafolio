import React, { useState } from "react";
import './Nav.css';

interface ImageProfile {
  image?: string; // Es opcional
}

const MyNav: React.FC<ImageProfile> = ({ image }) => {
  // Estado para controlar si el menú está activo o no
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header id="header">
      <div id="logo">
        {image && <img src={image} alt="logo" />}
      </div>
      <nav id="navigation">
        {/* Botón del menú de hamburguesa */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Menú de navegación */}
        <ul className={`ul-type ${isMenuActive ? 'active' : ''}`}>
          <li className="links-items">
            <a className="nav-links" href="#about-me">Sobre mí</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="#services">Servicios</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="#projects">Mis proyectos</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="#github">Github</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MyNav;

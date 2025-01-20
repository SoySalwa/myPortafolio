import React from "react";
import './Nav.css';

interface imageProfile {
  image?: string, // Es opcional porque si.
}

function MyNav({ image }: imageProfile) {
  return <>
    <header id="header">
      <div id="logo">
        {image && <img src={`${image}`} alt="logo" />}
      </div>
      <nav id="navigation">
        <ul className="ul-type">
          <li className="links-items">
            <a className="nav-links" href="#about-me">Sobre mí</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="#services">Servicios</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="projects">Mis proyectos</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="#github">Github</a>
          </li>
        </ul>
      </nav>
    </header>
  </>
}

export default MyNav;

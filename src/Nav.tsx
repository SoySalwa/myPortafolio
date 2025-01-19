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
            <a className="nav-links" href="#about-me">About me</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="#skills">Skills</a>
          </li>
          <li className="links-items">
            <a className="nav-links" href="projects">Projects</a>
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

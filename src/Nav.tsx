import React, { useEffect, useState } from "react";
import './Nav.css';

interface ImageProfile {
  image?: string; // Es opcional
}

const sections = ["profile", "aboutme", "services", "projects"];

const MyNav: React.FC<ImageProfile> = ({ image }) => {
  // Estado para controlar si el menú está activo o no
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            document.querySelectorAll(".nav-links").forEach((link) => {
              link.classList.remove("selected");
            });
            const link = document.querySelector(`.nav-links[href="${id}"]`)
            if (link) link.classList.add("selected");
            setActive(id || "");
          }
        });
      },
      { threshold: 0.5 } // Detecta cuando el 50% de la sección está en pantalla
    );
    sections.forEach((id: any) => {
      const section = document.getElementById(id);
      if (section) {
        section?.classList.add("selected");
        observer.observe(section);
      }
    });

    return () => observer.disconnect(); // Limpiar el observer al desmontar
  }, []);
  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header id="header">
      <div id="logo">
        {image && <img src={image} alt="logo" />}
      </div>
      <nav id="navigation" className={activeSection ? `selected` : ""}>
        {/* Botón del menú de hamburguesa */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Menú de navegación */}
        <ul className={`ul-type ${isMenuActive ? 'active' : ''}`}>
          <li className="links-items" >
            <a className={`nav-links ${activeSection === "profile" ? "selected" : ""}`} href="#profile" onClick={() => setActive("profile")}>Perfil</a>
          </li>
          <li className="links-items">
            <a className={`nav-links ${activeSection === "aboutme" ? "selected" : ""}`} href="#aboutme" onClick={() => setActive("aboutme")}>Sobre mí</a>
          </li>
          <li className="links-items">
            <a className={`nav-links ${activeSection === "services" ? "selected" : ""}`} href="#services" onClick={() => setActive("services")}>Servicios</a>
          </li>
          <li className="links-items">
            <a className={`nav-links ${activeSection === "projects" ? "selected" : ""}`} href="#projects" onClick={() => setActive("projects")}>Mis Proyectos</a>
          </li>
          { /*<li className="links-items">
            <a className="nav-links" href="#github">Github</a>
          </li> */}
        </ul >
      </nav >
    </header >
  );
};

export default MyNav;

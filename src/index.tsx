import React from 'react';
import Nav from "./Nav.tsx";
import "./index.css";
import Skills from "./skills.tsx";
import AboutMe from './aboutme.tsx';

function Index() {
  return <>
    <Nav />
    <section className="section-profile">
      <div className="presentation">
        <h4>Hola</h4>
        <h1>Yo SoySalwa</h1>
        <p>Un desarrollador de escritorio y <br /> desarrollador web.</p>
        <button className="btn-cv">Descargar CV</button>
      </div>
    </section>
    <AboutMe />
  </ >
}

export default Index;

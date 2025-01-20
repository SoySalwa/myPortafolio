import Nav from "./Nav.tsx";
import "./index.css";
import Services from "./services.tsx";
import "./services.css";
import AboutMe from './aboutme.tsx';
import MyProjects from "./myprojects.tsx";

function Index() {
  return (
    <>
      <Nav />
      <section className="section-profile">
        <div className="presentation">
          <h4>Hola</h4>
          <h1>Yo SoySalwa</h1>
          <p>Un desarrollador de escritorio y <br /> desarrollador web.</p>
          <button className="btn-cv">Descargar CV</button>
        </div>
      </section>
      <section className="about-me-section">
        <AboutMe />
      </section>
      <section className="services-section">
        <Services />
      </section>
      <section className="projects-section">
        <MyProjects />
      </section>
    </>
  );
}

export default Index;

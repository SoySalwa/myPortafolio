import Nav from "./Nav.tsx";
import "./index.css";
import Services from "./services.tsx";
import "./services.css";
import AboutMe from './aboutme.tsx';
import MyProjects from "./myprojects.tsx";
import Furina from "/Furina.png";

function Index() {
  return (
    <>
      <Nav />
      <section className="section-profile" id={"profile"}>
        <div className="presentation">
          <h4>Hola</h4>
          <h1>Yo SoySalwa</h1>
          <p>Un apasionante desarrollador de escritorio y <br /> desarrollador web.</p>
          <button className="btn-cv">Descargar CV</button>
        </div>
        { /* <div className="present-img">
          <img src={Furina} alt="Furina" />
        </div> */}
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

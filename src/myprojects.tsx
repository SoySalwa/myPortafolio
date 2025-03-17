import "./myprojects.css";
import DiscloudCPP from "/DiscloudCPP.png";
import Collei from "/Collei.png";
import Calculator from "/Calculator.jpg";

function MyProjects() {
  return (
    <div className="projects" id={"projects"}>
      <h1>Mis Proyectos</h1>
      <p className="projects-description">
        Lo que verás a continuación son mis proyectos, pendientes o terminados, estamos dispuestos a
        un intento de colaboración... Cada uno de los proyectos presentes aquí tienen un repositorio
        público en <a href="https://github.com/soysalwa/" target="_blank">Github</a>, así que observa bien y "alúcinate" con alguno de ellos.
      </p>
      <div className="projects-grid">
        <div className="projects-item">
          <div className="image-container">
            <img src={DiscloudCPP} alt="Discloud Library" />
            <div id="dl-text-overlay">
              <a href="https://github.com/soysalwa/discloud-lib" target="_blank"><h3>Discloud Library</h3></a>
              <p>Es una librería de C++ que interactúa con la API de Discloud para traer ciertas necesidades al usuario.</p>
            </div>
          </div>
        </div>
        { /*   <div className="projects-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="SPCEA - System Pay" />
            <div className="pt-text-overlay">
              <h3>SPCEA - System Pay</h3>
              <p>Es un sistema de pagos para la gestión de estudiantes inscritos en un centro educativo determinado.</p>
            </div>
          </div>
        </div> */}
        <div className="projects-item">
          <div className="image-container">
            <img src={Collei} alt="Collei Bot" />
            <div id="c-text-overlay">
              <a href="https://github.com/SoySalwa/collei-discord-bot-js" target="_blank"><h3>Collei Bot</h3></a>
              <p>Fue una aplicación de Discord programada en NodeJS, fue un bot privado creado para un único servidor de discord.</p>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <div className="image-container">
            <img src={Calculator} alt="Calculator" />
            <div id="cl-text-overlay">
              <a href="https://github.com/soysalwa/calculator" target="_blank"><h3>Calculator</h3></a>
              <p>Fue una calculadora creada en Java, su existencia empezó gracias a la universidad que me llevó a usar Java.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;

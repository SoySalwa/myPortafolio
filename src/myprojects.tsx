import "./myprojects.css";

function MyProjects() {
  return (
    <div className="projects">
      <h1>Mis Proyectos</h1>
      <p className="projects-description">
        Lo que verás a continuación son mis proyectos, pendientes o terminados, estamos dispuestos a
        un intento de colaboración... Cada uno de los proyectos presentes aquí tienen un repositorio
        público en Github, así que observa bien y "alúcinate" con alguno de ellos.
      </p>
      <div className="projects-grid">
        <div className="projects-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="UX Research" />
            <div className="pt-text-overlay">
              <h3>Desktop Development</h3>
              <p>Con un alto potencial para mejorar y ver más allá del desarrollo de escritorio, especializado con C++ para llevarlo a cabo.</p>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="BackEnd Development" />
            <div className="pt-text-overlay">
              <h3>BackEnd Development</h3>
              <p>We build responsive and scalable web applications tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="App Design" />
            <div className="pt-text-overlay">
              <h3>App Design</h3>
              <p>Our designs ensure high precision and usability across all devices.</p>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="Web Design" />
            <div className="pt-text-overlay">
              <h3>Figma Design</h3>
              <p>Puedo crear diseños visuales con Figma y funcionales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;

import "./services.css";

function Services() {
  return (
    <div className="services">
      <h1>Servicios</h1>
      <p className="services-description">
        Ofrezco servicios de diferentes categorías, no es ningún problema para nosotros
        aprender de nuevas tecnologías, lo que apasionas abre puertas a otros servicios...
        Lo que verás a continuación es lo que puedo ofrecer hasta ahora...
      </p>
      <div className="services-grid">
        <div className="service-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="UX Research" />
            <div className="text-overlay">
              <h3>Desktop Development</h3>
              <p>Con un alto potencial para mejorar y ver más allá del desarrollo de escritorio, especializado con C++ para llevarlo a cabo.</p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="BackEnd Development" />
            <div className="text-overlay">
              <h3>BackEnd Development</h3>
              <p>We build responsive and scalable web applications tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="App Design" />
            <div className="text-overlay">
              <h3>App Design</h3>
              <p>Our designs ensure high precision and usability across all devices.</p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&" alt="Web Design" />
            <div className="text-overlay">
              <h3>Figma Design</h3>
              <p>Puedo crear diseños visuales con Figma y funcionales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

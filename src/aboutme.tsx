import "./aboutme.css";
import thinking from "/Think.jpeg";

function AboutMe() {
  return <>
    <section className="section-about" id={"aboutme"}>
      <div className="container-about">
        <div className="image-decoration">
          <img src={thinking} alt="Imagen" />
        </div>
        <div className="info-about">
          <h1>Sobre mí</h1>
          <p>Soy un chico autodidacta que siempre busca aprender nuevas tecnologías, desde temprana edad he estado buscando conocer acerca del mundo de la tecnología y la programación. Mi interés por la programación surgió por la curiosidad de como funcionaban las aplicaciones de Discord (Bots), aprendí NodeJS para llevar a cabo este proyecto tan interesante en este mundo, desde entonces he estado apasionado por la programación, siempre buscando como funciona cada cosa con la que choco.</p>
        </div>
      </div>
    </section>
  </ >
}

export default AboutMe;

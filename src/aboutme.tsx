import React from "react"
import "./aboutme.css";
import Skills from "./skills";

function AboutMe() {
  return <>
    <section className="section-about">
      <div className="container-about">
        <div className="image-decoration">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFFOflX_gJGbZCT-wljwseKxXGokYHxX3Kg&s" alt="Imagen" />
        </div>
        <div className="info-about">
          <h1>Sobre mí</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas s</p>
        </div>
      </div>
    </section>
  </ >
}

export default AboutMe;

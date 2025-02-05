import React from "react";

const AboutMe = () => {
  return (
    <section data-scroll-section className="aboutme">
      <div
        data-scroll-container
        className="3xs:text-center 3xs:text 3xs:text-white text-shadow">
        <p data-scroll data-scroll-speed="5" className=" 3xs:font-bold">
          "Desde niño, la <strong>programación</strong> ha llamado mi atención.
          Comencé a aprender de forma <strong>autodidacta</strong>, explorando
          recursos gratuitos, documentación y tutoriales. Fue entonces cuando
          decidí crear <strong>PanditaDevCode</strong>, un proyecto donde
          documento mi proceso de aprendizaje.
          <strong>¡Acompáñame en esta aventura!</strong>"
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
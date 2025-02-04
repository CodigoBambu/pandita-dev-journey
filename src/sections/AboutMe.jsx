import React from "react";

const AboutMe = () => {
  return (
    <section data-scroll-section>
      <div
        data-scroll-container
        className="3xs:text-center 3xs:text 3xs:text-white"
        style={{ marginTop: "-20em", textShadow:"0 0 5px rgb(153, 153, 153), 0 0 10px rgb(109, 109, 109), 0 0 15px rgb(92, 92, 92), 0 0 20px rgb(54, 54, 54)"}}>
        <p data-scroll data-scroll-speed="5" className=" 3xs:font-bold">
          "Desde niño, la{" "}
          <strong
            style={{
              color: "#141418",
              textShadow:
                "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
            }}>
            programación
          </strong>{" "}
          ha llamado mi atención. Comencé a aprender de forma{" "}
          <strong
            style={{
              color: "#141418",
              textShadow:
                "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
            }}>
            autodidacta
          </strong>
          , explorando recursos gratuitos, documentación y tutoriales. Fue
          entonces cuando decidí crear{" "}
          <strong
            style={{
              color: "#141418",
              textShadow:
                "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
            }}>
            PanditaDevCode
          </strong>
          , un proyecto donde documento mi proceso de aprendizaje.
          <strong
            style={{
              color: "#141418",
              textShadow:
                "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
            }}>
            ¡Acompáñame en esta aventura!
          </strong>
          "
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

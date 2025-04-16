import React from "react";

const ContactMe = () => {
  return (
    <section data-scroll data-scroll-section className="contact-me">
      <div
        data-scroll
        data-scroll-container
        className="3xs:justify-center 3xs:items-center"
      >
        <h1
          className="contact-me-h1 3xs:text-center 3xs:text-[#141418] 3xs:font-bold"
          data-scroll
          data-scroll-speed="3"
          style={{
            textShadow:
              "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
          }}
        >
          Aún sigo aprendiendo, pero este es mi progreso hasta ahora
        </h1>
        <div
          style={{ width: "85%" }}
          className="flex items-center 3xs:ml-4 content-center"
          data-scroll
          data-scroll-speed="-1"
        >
          <span
            className="flex-grow border-t border-gray-300"
            style={{
              marginTop: "-5px",
              boxShadow:
                "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
            }}
          ></span>
        </div>

        <p
          className="3xs:text-center 3xs:text-white"
          data-scroll
          data-scroll-speed="3"
          style={{
            textShadow:
              "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
          }}
        >
          <strong className="">Para Webs o Proyectos Pequeños como este</strong>{" "}
          puedes contactarme a mi correo alexander.programadro2002@gmail.com o
          llenar el formulario. ¡Gracias por la Confianza!
        </p>

        <div className="3xs:flex 3xs:justify-center 3xs:items-center 3xs:p-[35px] 3xs:gap-5">
          <a
            href=""
            className="btn 3xs:backdrop-blur-[5px] 3xs:text-[#fdfeff] 3xs:p-[10px] 3xs:z-2 3xs:font-extrabold 3xs:rounded-[5px] 3xs:w-[150px] 3xs:text-center"
            data-scroll
            data-scroll-spee="4"
          >
            GitHub
          </a>
          <a
            href=""
            className="btn 3xs:backdrop-blur-[5px] 3xs:text-[#fdfeff] 3xs:p-[10px] 3xs:z-2 3xs:font-extrabold 3xs:rounded-[5px] 3xs:w-[150px] 3xs:text-center"
            data-scroll
            data-scroll-spee="4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

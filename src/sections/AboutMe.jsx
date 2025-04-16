import React from "react";

const AboutMe = () => {
  const socialLinks = [
    { id: 1, name: "YouTube", href: "https://www.youtube.com/@panditadevcode" },
    { id: 2, name: "Threads", href: "https://www.threads.net/@panditadevcode" },
    {
      id: 3,
      name: "Instagram",
      href: "https://www.instagram.com/panditadevcode",
    },
    { id: 4, name: "TikTok", href: "https://www.tiktok.com/@panditadevcode" },
    { id: 5, name: "X (Twitter)", href: "https://x.com/panditadevcode" },
  ];

  return (
    <div data-scroll-container>
      <section data-scroll-section className="about-me">
        <div className="text-center text-white text-shadow -mt-40">
          <p data-scroll data-scroll-speed="5" className="font-bold">
            Desde niño, la <strong className="text-black">programación</strong>{" "}
            ha llamado mi atención. Comencé a aprender de forma{" "}
            <strong className="text-black">autodidacta</strong>, explorando
            recursos gratuitos, documentación y tutoriales. Fue entonces cuando
            decidí crear "<strong className="text-black">"CodigoBambu</strong>",
            un proyecto donde documento mi proceso de aprendizaje.
            <strong className="text-black">
              ¡Acompáñame en esta aventura!
            </strong>
          </p>
        </div>
      </section>

      <section data-scroll-section className="social-media">
        <div data-scroll-container>
          <h1
            className="text-white text-shadow ml-5"
            data-scroll
            data-scroll-speed="6"
          >
            Redes Sociales
          </h1>
          <div
            className="w-11/12 mx-auto mt-2 box-shadow"
            data-scroll
            data-scroll-speed="4"
          >
            <span className="block border-t border-gray-300"></span>
          </div>
        </div>
        <div className="text-left text-white text-shadow mt-[-20em]">
          <ul>
            {socialLinks.map((link) => (
              <li key={link.id} data-scroll>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-scroll
                  data-scroll-speed="2"
                >
                  {link.name}
                </a>
                <div
                  className="w-11/12 mx-auto mt-2 box-shadow"
                  data-scroll
                  data-scroll-speed="4"
                >
                  <span className="block border-t border-gray-300"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

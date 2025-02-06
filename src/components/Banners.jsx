import React from "react";

const Banners = () => {
  const bannersInformation = [
    { id: 1, text: "Documentando mi aprendizaje en", speed: 8 },
    { id: 2, text: "PanditaDevCode", speed: -4 },
    { id: 3, text: "Visualiza mi progreso con", speed: 6 },
    { id: 4, text: "estadísticas en tiempo real.", speed: -4 },
  ];

  return (
    <section
      data-scroll-section
      className="3xs:min-h-100vh 3xs:w-80vw 3xs:mt-0 3xs:mb-0 3xs:mr-auto 3xs:ml-auto 3xs:flex 3xs:content-center 3xs:items-center 3xs:relative">
      <div
        data-scroll-container
        className="3xs:min-h-100vh 3xs:flex 3xs:flex-col 3xs:items-center">
        <div data-scroll className="banner">
          {bannersInformation.map((banner) => (
            <span
              key={banner.id}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={banner.speed}>
              {banner.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banners;
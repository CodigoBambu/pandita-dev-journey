import React from "react";

const Logos = () => {
  return (
    <section
      data-scroll-section
      className="3xs:relative 3xs:w-full 3xs:h-20 3xs:left-0 3xs:flex 3xs:justify-between 3xs:items-center 3xs:p-5">
      <div
        data-scroll
        data-scroll-speed="-2"
        className="absolute left-0 sm:left-10 p-4 sm:p-4 z-10">
        <a
          data-scroll
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[30px] text-white font-extrabold transform transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer hover:text-black inline-block"
          style={{
            textShadow:
              "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
          }}>
          GitHub
        </a>
      </div>

      <div
        data-scroll
        data-scroll-speed="-2"
        className="absolute right-0 sm:right-10 p-4 sm:p-4 z-10">
        <a
          data-scroll
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[30px] text-white font-extrabold transform transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer hover:text-black inline-block"
          style={{
            textShadow:
              "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
          }}>
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Logos;

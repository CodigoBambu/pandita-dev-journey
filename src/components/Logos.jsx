import React from "react";

const Logos = () => {
  return (
    <section className="absolute w-full h-20 top-0 left-0 flex justify-between items-center sm:p-4">
      <div className="absolute left-0 sm:left-10 p-4 sm:p-4 z-10">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white font-extrabold transform transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer hover:text-black inline-block"
          style={{
            textShadow:
              "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
          }}
        >
          GitHub
        </a>
      </div>

      <div className="absolute right-0 sm:right-10 p-4 sm:p-4 z-10">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[30px] text-white font-extrabold transform transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer hover:text-black inline-block"
          style={{
            textShadow:
              "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Logos;

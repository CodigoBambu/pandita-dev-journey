import React from "react";
import imgLogo from "../assets/logo.jpg";
import imgAM from "../assets/AlexMoncada.jpeg";

const Header = () => {
  return (
    <header data-scroll-container>
      <section data-scroll-section style={{ marginTop: "5em" }}>
        <div className="relative">
          <div
            className="relative 3xs:w-[35%]"
            data-scroll
            data-scroll-speed="2">
            <img
              src={imgLogo}
              alt="logoImg"
              className="rounded-[50%] 3xs:ml-4 3xs:w-[100%]"
              style={{ marginTop: "2em" }}
            />
          </div>
          <div className="absolute 3xs:mb-1 0">
            <img
              src={imgAM}
              alt="Alex Moncada"
              className="3xs:ml-[9em] 3xs:w-[50%]"
              style={{ marginTop: "-3.5em" }}
            />
          </div>
        </div>
      </section>

      <section data-scroll-section style={{ marginTop: "-1.8em" }}>
        <div
          className="3xs:relative"
          style={{
            textShadow:
              "0 0 5px rgb(153, 153, 153), 0 0 10px rgb(109, 109, 109), 0 0 15px rgb(92, 92, 92), 0 0 20px rgb(54, 54, 54)",
          }}>
          <h1
            className="font-bold 3xs:text-[60px] 3xs:ml-2 3xs:text-white"
            data-scroll
            data-scroll-speed="3"
            style={{ marginTop: "-.3em" }}>
            SOY
          </h1>
          <h2
            className="font-bold 3xs:text-[37px] 3xs:-mt-7 3xs:ml-3 3xs:text-[#141418]"
            data-scroll
            data-scroll-speed="3">
            PanditaDevCode
          </h2>
          <h3
            className="3xs:font-bold 3xs:ml-6 3xs:-mt-3 3xs:text-white"
            data-scroll
            data-scroll-speed="3">
            Alex Moncada
          </h3>

          <div
            className="flex items-center w-[90%] 3xs:ml-4 3xs:mt-0 content-center"
            data-scroll
            data-scroll-speed="4">
            <span
              className="flex-grow border-t border-gray-300"
              style={{
                boxShadow:
                  "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
              }}></span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

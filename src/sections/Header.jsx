import React from "react";
import imgLogo from "../assets/logo.jpg";
import imgAM from "../assets/ejemplo.jpg";

const Title = ({ text, className, scrollSpeed, level }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag
      className={className}
      data-scroll
      data-scroll-speed={scrollSpeed}
    >
      {text}
    </HeadingTag>
  );
};

const Header = () => {
  const titles = [
    {
      text: "SOY",
      className: "font-bold text-white text-[60px] -ml-44 -mt-14",
      scrollSpeed: "3",
      level: 1,
    },
    {
      text: "CodigoBambu",
      className: "font-bold text-[#141418] text-[43px] -mt-9 mr-2 ",
      scrollSpeed: "3",
      level: 2,
    },
    {
      text: "Alex Moncada",
      className: "font-bold text-white -ml-40 -mt-3",
      scrollSpeed: "3",
      level: 3,
    },
  ];

  return (
    <header data-scroll-container>
      <section data-scroll-section>
        <div
          data-scroll
          data-scroll-speed="2"
          className="flex justify-start items-center content-center mt-1"
        >
          <img
            src={imgLogo}
            alt="logoImg"
            className="w-1/3 rounded-full mt-40 ml-5"
          />
        </div>

        <div data-scroll data-scroll-speed="2" className="flex justify-end">
          <img
            src={imgAM}
            alt="Alex Moncada"
            className="w-1/2 h-2/5 mr-5 -mt-14 -mb-3 "
          />
        </div>
      </section>

      <section
        data-scroll-section
        className="text-shadow text-center items-center align-center"
      >
        <div>
          {titles.map((title) => (
            <Title
              key={title.text}
              text={title.text}
              className={title.className}
              scrollSpeed={title.scrollSpeed}
              level={title.level}
            />
          ))}
          <div data-scroll data-scroll-speed="4">
            <span></span>
          </div>
        </div>
        <div className="w-11/12 mx-auto mt-2 box-shadow" data-scroll data-scroll-speed="4">
          <span className="block border-t border-gray-300"></span>
        </div>
      </section>
    </header>
  );
};

export default Header;

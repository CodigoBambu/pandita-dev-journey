import React from "react";

const LogoLinks = ({ href, text, position }) => {
  return (
    <div
      data-scroll
      data-scroll-speed="-2"
      className={`absolute p-4 z-10 ${
        position === "left" ? "left-0" : "right-0"
      }`}>
      <a
        href={href}
        data-scroll
        target="_blank"
        rel="noopener noreferrer"
        className="text-[30px] text-white font-extrabold transform transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer hover:text-black inline-block text-shadow">
        {text}
      </a>
    </div>
  );
};

const Logos = () => {
  const links = [
    {
      id: 1,
      href: "https://github.com/PanditaDevCode",
      text: "GitHub",
      position: "left",
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/alex-moncada-50188834a/",
      text: "LinkedIn",
      position: "right",
    },
  ];
  return (
    <section
      data-scroll-section
      className="3xs:relative 3xs:w-full 3xs:h-20 3xs:left-0 3xs:flex 3xs:justify-between 3xs:items-center 3xs:p-5">
      {links.map((link) => (
        <LogoLinks
          key={link.id}
          href={link.href}
          text={link.text}
          position={link.position}
        />
      ))}
    </section>
  );
};

export default Logos;

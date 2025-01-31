import React from "react";
import imgLogo from "../assets/logo.jpg";
import imgAM from "../assets/AlexMoncada.jpeg";

const Header = () => {
  return (
    <header>
      <div>
        <img
          src={imgLogo}
          alt="logoImg"
          className="rounded-[50%] sm:ml-20 sm:mt-52 sm:h-[40%] sm:w-[40%]  "
        />
      </div>
      <div>
        <img
          src={imgAM}
          alt="Alex Moncada"
          className="sm:w-[50px] sm:h-[80px]"
        />
      </div>
      <h1>Soy</h1>
    </header>
  );
};

export default Header;

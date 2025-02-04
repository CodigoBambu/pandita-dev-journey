import React from "react";

const SocialMedia = () => {
  return (
    <section
      className="w-full 3xs:mt-20 3xs:ml-20 pb-32 pt-32" 
      data-scroll-section
    >
      <div className="3xs:text-left">
        <h1 className="3xs:text-white 3xs:font-bold">Redes Sociales</h1>
        <div
          className="flex items-center w-[90%] 3xs:ml-4 3xs:mt-3 content-center"
          data-scroll
          data-scroll-speed="0.5"
        >
          <span className="flex-grow border-t border-gray-300"></span>
        </div>
      </div>
      <div className="3xs:text-left 3xs:text-white">
        <ul>
          <li data-scroll data-scroll-speed="0.5">
            <a href="">YouTube</a>
          </li>
          <li data-scroll data-scroll-speed="0.5">
            <a href="">Threads</a>
          </li>
          <li data-scroll data-scroll-speed="0.5">
            <a href="">Instagram</a>
          </li>
          <li data-scroll data-scroll-speed="0.5">
            <a href="">TikTok</a>
          </li>
          <li data-scroll data-scroll-speed="0.5">
            <a href="">X (Twitter)</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SocialMedia;

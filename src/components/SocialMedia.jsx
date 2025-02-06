import React from "react";

const SocialMediaLinks = () => {
  const socialLinks = [
    { id: 1, name: "YouTube", href: "https://www.youtube.com/@panditadevcode" },
    { id: 2, name: "Threads", href: "https://www.threads.net/@panditadevcode" },
    {
      id: 3,
      name: "Instagram",
      href: "https://www.instagram.com/panditadevcode/",
    },
    { id: 4, name: "TikTok", href: "https://www.tiktok.com/@panditadevcode" },
    { id: 5, name: "X (Twitter)", href: "https://x.com/panditadevcode" },
  ];

  const title = "Redes Sociales";

  return (
    <section className="social-media" data-scroll-section>
      <div data-scroll-container>
        <h1
          className="text-white text-shadow"
          data-scroll
          data-scroll-speed="8">
          {title}
        </h1>
        <div
          style={{ width: "85%" }}
          className="flex items-center 3xs:ml-4 content-center"
          data-scroll>
          <span
            className="flex-grow border-t border-gray-300"
            style={{
              marginTop: "-5px",
              boxShadow:
                "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
            }}></span>
        </div>
      </div>

      <div className="social-media-ul 3xs:text-left 3xs:text-white text-shadow">
        <ul>
          {socialLinks.map((link) => (
            <li key={link.id} data-scroll data-scroll-speed="-2">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-scroll>
                {link.name}
              </a>
              <div
                className="flex items-center w-[90%] 3xs:ml-1 content-center"
                data-scroll>
                <span
                  className="flex-grow border-t border-gray-300"
                  style={{
                    marginTop: "-5px",
                    boxShadow:
                      "0 0 5px rgb(255, 255, 255), 0 0 10px rgb(207, 207, 207), 0 0 15px rgb(163, 163, 163), 0 0 20px rgb(131, 131, 131)",
                  }}></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialMediaLinks;

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { upworkLogo } from "../import.js";

const Contact = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollX(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const translateX = scrollX - 6300;

  return (
    <div className="flex items-center relative h-screen mt-0 overflow-x-hidden z-10 ">
      <div
        className="text-[9rem] font-bold text-gray-200 absolute md:block hidden"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.7s ease-out",
        }}
      >
        CONTACT
      </div>
      <div className="text-8xl font-light flex items-center justify-center w-full z-20">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20">
          <button
            className="mx-auto hover:scale-110 transition-all"
            onClick={() =>
              window.open("https://github.com/enesceylandev", "_blank")
            }
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            className="mx-auto hover:scale-110 transition-all"
            onClick={() =>
              (window.location.href = "mailto:contact@enesceylan.dev")
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button
            className="mx-auto hover:scale-110 transition-all"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/enesceylandev/",
                "_blank",
              )
            }
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button
            className="mx-auto hover:scale-110 transition-all"
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/~016f7801c15a80de18",
                "_blank",
              )
            }
          >
            <img src={upworkLogo} alt="upwork" className="w-28" />
          </button>
          {/* Buraya upwork bağlantısı gelecek */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

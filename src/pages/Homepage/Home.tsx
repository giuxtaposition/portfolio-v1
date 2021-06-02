import React, { useState } from "react";
import Typewriter from "../../components/Typewriter";
import { HiSparkles } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Navbar";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textAnimation: string = "Full Stack Web Developer";

  const handleClick = () => {
    document.getElementsByClassName("Contact")[0].scrollIntoView();
  };

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <section className="Home">
      <Navbar />
      <div className="greeting header-text">
        <h1>
          Hello! <HiSparkles fill="#f1fa8c" />{" "}
        </h1>
      </div>
      <div className="name header-text">
        <h1>
          I'm <span className="highlight">Giulia Ye</span>
        </h1>
      </div>
      <div className="text-animation header-text">
        <Typewriter words={textAnimation} />
      </div>
      <div className="contact-button header-text">
        <button
          onClick={handleClick}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Contact Me
          {isHovered && <FaArrowDown />}
        </button>
      </div>
    </section>
  );
};

export default Home;

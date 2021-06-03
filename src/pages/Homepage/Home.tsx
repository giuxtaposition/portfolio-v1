import React from "react";
import Typewriter from "../../components/Typewriter";
import { HiSparkles } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import "../../styles/Home.scss";

const Home: React.FC = () => {
  const textAnimation: string = "Full Stack Web Developer";

  const handleClick = () => {
    document.getElementsByClassName("Contact")[0].scrollIntoView();
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
        <button onClick={handleClick}>
          Contact Me
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Home;

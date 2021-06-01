import React from "react";
import Typewriter from "../../components/Typewriter";
import { HiSparkles } from "react-icons/hi";
import Navbar from "../Navbar";

const Home: React.FC = () => {
  const textAnimation: string = "Full Stack Web Developer";

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
        <button>Contact Me</button>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import Typewriter from "../../components/Typewriter";
import { HiSparkles } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import "../../styles/Home.scss";
import { Link } from "react-router-dom";

interface Props {
  homeRef: React.MutableRefObject<null>;
  navbarRef: React.MutableRefObject<null>;
  visibleSection: string | undefined;
}

const Home: React.FC<Props> = ({ homeRef, navbarRef, visibleSection }) => {
  const textAnimation: string = "Full Stack Web Developer";

  const handleClick = () => {
    document.getElementById("Contact")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="Home" ref={homeRef}>
      <Navbar navbarRef={navbarRef} visibleSection={visibleSection} />
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
        <button onClick={() => handleClick()}>
          <Link to="contact">
            Contact Me
            <FaArrowRight />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Home;

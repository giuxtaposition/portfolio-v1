import React from "react";
import icon from "../../images/intro.png";
import {
  DiBootstrap,
  DiFirebase,
  DiGit,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiMaterialUi } from "react-icons/si";
import Tooltip from "../../components/Tooltip";
import "../../styles/About.scss";

interface Props {
  aboutRef: React.MutableRefObject<null>;
}

const About: React.FC<Props> = ({ aboutRef }) => {
  return (
    <section id="About" ref={aboutRef}>
      <div className="about-intro">
        <div className="text">
          <div className="title">
            let me <span className="highlight">introduce</span> myself
          </div>
          <div className="description">
            Hi! I'm <span className="highlight">Giulia</span> and I like making
            things that live on the internet.
            <br />
            <br />
            My field of Interest's are{" "}
            <span className="highlight">Web and Mobile Development</span>.
            <br />
            <br />
            Strong Believer of the Open-source-software movement!
            <br />
            <br />
            Let's make something amazing!
          </div>
        </div>
        <div className="icon">
          <img src={icon} alt="about" />
        </div>
      </div>

      <div className="skills  icon-list">
        <div className="title">
          professional <span className="highlight">skillset</span>
        </div>
        <div className="icons">
          <Tooltip text="HTML5">
            <DiHtml5 />
          </Tooltip>
          <Tooltip text="CSS3">
            <DiCss3 />
          </Tooltip>
          <Tooltip text="Javascript">
            <DiJavascript1 />
          </Tooltip>

          <Tooltip text="Nodejs">
            <DiNodejs />
          </Tooltip>
          <Tooltip text="React">
            <DiReact />
          </Tooltip>
          <Tooltip text="Firebase">
            <DiFirebase />
          </Tooltip>
          <Tooltip text="Bootstrap">
            <DiBootstrap />
          </Tooltip>
          <Tooltip text="Material UI">
            <SiMaterialUi />
          </Tooltip>
          <Tooltip text="Git">
            <DiGit />
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default About;

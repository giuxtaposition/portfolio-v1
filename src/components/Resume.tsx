import React from "react";
import { BiDownload } from "react-icons/bi";

const Resume: React.FC = () => {
  return (
    <section className="Resume">
      <div className="container">
        <button className="cv-button">
          <BiDownload /> Download CV
        </button>
        <div className="experience"></div>
        <div className="education"></div>
      </div>
    </section>
  );
};

export default Resume;

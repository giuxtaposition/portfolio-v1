import React from "react";
import { DiGithubBadge } from "react-icons/di";

interface Props {
  title: string;
  text: string;
  img: string;
  imgAlt: string;
  projectLink: string;
  projectTags: Array<string>;
  projectGithub: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal: React.FC<Props> = ({
  title,
  text,
  img,
  imgAlt,
  projectLink,
  projectTags,
  projectGithub,
  setShowModal,
}) => {
  return (
    <div className="ProjectModal">
      <span className="close-button" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <img src={img} alt={imgAlt}></img>
      <div className="details">
        <div className="title">{title}</div>
        <p className="info">{text}</p>
        <a href={projectLink} target="_blank" rel="noreferrer">
          <div className="button">View</div>
        </a>
        <a href={projectGithub} target="_blank" rel="noreferrer">
          <DiGithubBadge />
        </a>
      </div>
    </div>
  );
};
export default ProjectModal;

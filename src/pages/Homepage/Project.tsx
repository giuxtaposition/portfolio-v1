import React from "react";

interface project {
  title: string;
  img: string;
  imgAlt: string;
  description: string;
  longerDescription: string;
  projectLink: string;
  projectTags: Array<string>;
  projectGithub: string;
  id: string;
}

interface Props {
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowProject: React.Dispatch<React.SetStateAction<project | []>>;
  project: project;
  id: string;
}

const Project: React.FC<Props> = ({
  title,
  description,
  img,
  imgAlt,
  setShowModal,
  setShowProject,
  project,
  id,
}) => {
  return (
    <div
      id={id}
      className="Project"
      onClick={() => {
        setShowModal(true);
        setShowProject(project);
      }}
    >
      <div className="container">
        <img src={img} alt={imgAlt} />
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="button">Learn More</div>
      </div>
    </div>
  );
};

export default Project;

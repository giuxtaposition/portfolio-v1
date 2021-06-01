import React, { useEffect, useState } from "react";
import Project from "./Project";
import Modal from "../../components/Modal";
import ProjectModal from "./ProjectModal";
import { projectsFilters } from "../../constants";
import sketchpad from "../../images/projects/sketchpad.png";
import example1 from "../../images/projects/example1.jpg";
import example2 from "../../images/projects/example2.jpg";
import example3 from "../../images/projects/example3.jpg";

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

const projects = [
  {
    title: "Sketchpad",
    img: sketchpad,
    imgAlt: "sketchpad",
    description: "A simple site to make some pixel art",
    longerDescription:
      "A simple site to make some pixel art. You can change color, erase, change grid size and other nice features!",
    projectLink: "https://giuxtaposition-sketchpad.netlify.app/",
    projectTags: ["html", "css", "javascript"],
    projectGithub: "https://github.com/giuxtaposition/sketchpad",
    id: "sketchpad",
  },
  {
    title: "project  title",
    img: example2,
    imgAlt: "example",
    description: "This is my Description, I know it's short",
    longerDescription:
      "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
    projectLink: "#",
    projectTags: ["firebase", "react"],
    projectGithub: "",
    id: "another",
  },
  {
    title: "project  title",
    img: example3,
    imgAlt: "example",
    description: "This is my Description, I know it's short",
    longerDescription:
      "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
    projectLink: "#",
    projectTags: ["firebase", "react"],
    projectGithub: "",
    id: "other",
  },
  {
    title: "project  title",
    img: example1,
    imgAlt: "example",
    description: "This is my Description, I know it's short",
    longerDescription:
      "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
    projectLink: "#",
    projectTags: ["firebase", "react"],
    projectGithub: "",
    id: "bho",
  },
  {
    title: "project  title",
    img: example2,
    imgAlt: "example",
    description: "This is my Description, I know it's short",
    longerDescription:
      "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
    projectLink: "#",
    projectTags: ["firebase", "react"],
    projectGithub: "",
    id: "work",
  },
  {
    title: "project  title",
    img: example3,
    imgAlt: "example",
    description: "This is my Description, I know it's short",
    longerDescription:
      "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
    projectLink: "#",
    projectTags: ["firebase", "react"],
    projectGithub: "",
    id: "please",
  },
];

const Projects: React.FC = () => {
  // STATES
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showProject, setShowProject] = useState<project | []>([]);
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([
    "all",
  ]);
  const [filteredProjects, setFilteredProjects] = useState<Array<project> | []>(
    []
  );

  function handleFilters(filter: string) {
    if (filter === "all") {
      // If clicked filter is "All", remove all other filters
      setSelectedFilters(["all"]);
    } else {
      if (selectedFilters.includes("all")) {
        // If previous filter list is only "All", remove it
        const newFiltersList = selectedFilters.filter(
          (filterToRemove) => filterToRemove !== "all"
        );
        setSelectedFilters(newFiltersList);
      }

      if (selectedFilters.indexOf(filter) === -1) {
        //If Filter Not Present: Add it
        setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
      } else {
        //If Filter Present: Remove it
        const newFiltersList = selectedFilters.filter(
          (filterToRemove) => filterToRemove !== filter
        );

        if (!newFiltersList.length) {
          setSelectedFilters(["all"]);
        } else {
          setSelectedFilters(newFiltersList);
        }
      }
    }
  }

  useEffect(() => {
    // If filter in list add "active" class
    projectsFilters.forEach((filter) => {
      if (document.getElementById(`${filter}-filter`) !== null) {
        var filterElement: HTMLElement = document.getElementById(
          `${filter}-filter`
        )!;
        if (selectedFilters.includes(filter)) {
          filterElement.classList.add("active");
        } else {
          if (filterElement.classList.contains("active")) {
            filterElement.classList.remove("active");
          }
        }
      } else {
        console.log("filter not found in filters list");
      }
    });

    // Filter projects based on selected filters
    function filterProjects(projects: Array<project>, filters: Array<string>) {
      let filteredProjects;

      if (filters.includes("all")) {
        filteredProjects = projects;
      } else {
        filteredProjects = projects.filter(function (project) {
          for (var i = 0; i < filters.length; i++) {
            // If even one filter is not present do not show project
            if (project.projectTags.indexOf(filters[i]) === -1) {
              return false;
            }
          }
          // If project has all tags show project
          return true;
        });
      }

      return filteredProjects;
    }

    setFilteredProjects(filterProjects(projects, selectedFilters));
  }, [selectedFilters]);

  return (
    <section className="Projects">
      <div className="title">Projects</div>
      <div className="filter-container">
        {projectsFilters.map((filter, key) => (
          <button
            id={`${filter}-filter`}
            className="filter"
            onClick={() => handleFilters(filter)}
            key={key}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="container">
        {filteredProjects.map(
          (project: project, key: React.Key | null | undefined) => (
            <Project
              key={key}
              title={project.title}
              description={project.description}
              img={project.img}
              imgAlt={project.imgAlt}
              setShowModal={setShowModal}
              setShowProject={setShowProject}
              project={project}
              id={project.id}
            />
          )
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectModal
          title={(showProject as project).title}
          text={(showProject as project).longerDescription}
          img={(showProject as project).img}
          imgAlt={(showProject as project).imgAlt}
          projectLink={(showProject as project).projectLink}
          projectTags={(showProject as project).projectTags}
          projectGithub={(showProject as project).projectGithub}
          setShowModal={setShowModal}
        />
        s
      </Modal>
    </section>
  );
};

export default Projects;

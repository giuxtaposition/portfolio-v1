import React, { useEffect, useState } from 'react'
import Project from './Project'
import Modal from './Modal'
import ProjectModal from './ProjectModal';
import { projectsFilters } from '../constants'
import sketchpad from '../images/projects/sketchpad.png'
import example1 from '../images/projects/example1.jpg'
import example2 from '../images/projects/example2.jpg'
import example3 from '../images/projects/example3.jpg'

function Projects() {
    // STATES
    const [showModal, setShowModal] = useState(false);
    const [showProject, setShowProject] = useState([])
    const [selectedFilters, setSelectedFilters] = useState(["all"])

    // DATA
    const projects = [
        {
            title: "Sketchpad",
            img: sketchpad,
            imgAlt: "sketchpad",
            description: "A simple site to make some pixel art",
            longerDescription: "A simple site to make some pixel art. You can change color, erase, change grid size and other nice features!",
            projectLink: "https://giuxtaposition-sketchpad.netlify.app/",
            projectTags: ["html", "css", "javascript"],
            projectGithub: "https://github.com/giuxtaposition/sketchpad"
        },
        {
            title: "project  title",
            img: example2,
            imgAlt: "example",
            description: "This is my Description, I know it's short",
            longerDescription: "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
            projectLink: "#",
            projectTags: ["firebase", "react"],
            projectGithub: ""
        },
        {
            title: "project  title",
            img: example3,
            imgAlt: "example",
            description: "This is my Description, I know it's short",
            longerDescription: "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
            projectLink: "#",
            projectTags: ["firebase", "react"],
            projectGithub: ""
        },
        {
            title: "project  title",
            img: example1,
            imgAlt: "example",
            description: "This is my Description, I know it's short",
            longerDescription: "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
            projectLink: "#",
            projectTags: ["firebase", "react"],
            projectGithub: ""
        },
        {
            title: "project  title",
            img: example2,
            imgAlt: "example",
            description: "This is my Description, I know it's short",
            longerDescription: "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
            projectLink: "#",
            projectTags: ["firebase", "react"],
            projectGithub: ""
        },
        {
            title: "project  title",
            img: example3,
            imgAlt: "example",
            description: "This is my Description, I know it's short",
            longerDescription: "This is my Longer Description, I hope it's  long enough, or else I won't know what to do",
            projectLink: "#",
            projectTags: ["firebase", "react"],
            projectGithub: ""
        },
    ]

    function handleFilters(filter) {
        if (filter === "all") {
            setSelectedFilters(["all"])
        } else {
            console.log(selectedFilters.includes("all"))
            if (selectedFilters.includes("all")) {
                const newFiltersList = selectedFilters.filter((filterToRemove) => filterToRemove !== "all");
                setSelectedFilters(newFiltersList)
            }

            if (selectedFilters.indexOf(filter) === -1) {
                //If Filter Not Present: Add it
                setSelectedFilters(selectedFilters => [...selectedFilters, filter]);
                // const newList = selectedFilters.concat(filter)
                // setSelectedFilters(newList)
                //setSelectedFilters(prevSelectedFilters => prevSelectedFilters.concat(filter))
                console.log("inside handle  filters ", selectedFilters)
            } else {
                //If Filter Present: Remove it
                const newFiltersList = selectedFilters.filter((filterToRemove) => filterToRemove !== filter);
                setSelectedFilters(newFiltersList)
            }
        }
    }

    useEffect(() => {
        console.log("inside useEffect", selectedFilters)
        projectsFilters.forEach(filter => {
            var filterElement = document.getElementById(`${filter}-filter`)
            if (selectedFilters.includes(filter)) {
                filterElement.classList.add("active")
            } else {
                if (filterElement.classList.contains("active")) {
                    filterElement.classList.remove("active")
                }
            }
        });
    }, [selectedFilters])

    return (
        <section className="Projects" >
            <div className="title">Projects</div>
            <div className="filter-container">
                {
                    projectsFilters.map((filter, key) =>
                        <button
                            id={`${filter}-filter`}
                            className="filter"
                            onClick={() => handleFilters(filter)}
                            key={key}>
                            {filter}
                        </button>
                    )
                }
            </div>
            <div className="container">
                {
                    projects.map((project, key) =>
                        < Project
                            key={key}
                            title={project.title}
                            description={project.description}
                            img={project.img}
                            imgAlt={project.imgAlt}
                            setShowModal={setShowModal}
                            setShowProject={setShowProject}
                            project={project}
                        />
                    )
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <ProjectModal
                    title={showProject.title}
                    text={showProject.longerDescription}
                    img={showProject.img}
                    imgAlt={showProject.imgAlt}
                    projectLink={showProject.projectLink}
                    projectTags={showProject.projectTags}
                    projectGithub={showProject.projectGithub}
                    setShowModal={setShowModal}
                />
            </Modal>
        </section>
    )
}

export default Projects;
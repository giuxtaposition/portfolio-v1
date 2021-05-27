import React, { useState } from 'react'
import Project from './Project'
import Modal from './Modal'
import ProjectModal from './ProjectModal';
import sketchpad from '../images/projects/sketchpad.png'
import example1 from '../images/projects/example1.jpg'
import example2 from '../images/projects/example2.jpg'
import example3 from '../images/projects/example3.jpg'

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [showProject, setShowProject] = useState([])

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

    return (
        <section className="Projects" >
            <div className="title">Projects</div>
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
                />
            </Modal>
        </section>
    )
}

export default Projects;
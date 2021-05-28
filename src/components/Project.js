import React from 'react'


function Project({
    title,
    description,
    img, imgAlt,
    setShowModal,
    setShowProject,
    project
}) {

    return (
        <div
            className="Project"
            onClick={() => {
                setShowModal(true)
                setShowProject(project)
            }}
        >
            <div className="container" >
                <img src={img} alt={imgAlt} />
                <div className="text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="button">Learn More</div>
            </div>
        </div>
    )
}

export default Project;
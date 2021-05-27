import React from 'react'
import { DiGithubBadge } from 'react-icons/di'

function ProjectModal({
    title, text, img, imgAlt, projectLink, projectTags, projectGithub
}) {

    return (
        <div className="ProjectModal">
            <span className="close-button">&times;</span>
            <img src={img} alt={imgAlt}></img>
            <div className="details">
                <div className="title">{title}</div>
                <p className="info">{text}</p>
                <a href={projectLink} target="_blank" rel="noreferrer"><div className="button">View</div></a>
                <a href={projectGithub} target="_blank" rel="noreferrer"><DiGithubBadge /></a>
            </div>
        </div>
    )
}
export default ProjectModal;
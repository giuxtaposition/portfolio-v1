import React, { useEffect, useState } from 'react'
import Project from './Project'
import Modal from '../../components/Modal'
import ProjectModal from './ProjectModal'
import { projectsFilters } from '../../constants'
import '../../styles/Projects.scss'
import sketchpad from '../../images/projects/sketchpad.png'
import todo from '../../images/projects/todo.png'
import portfolio from '../../images/projects/portfolio.png'
import bookworm from '../../images/projects/bookworm.png'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface project {
  title: string
  img: string
  imgAlt: string
  description: string
  longerDescription: string
  projectLink: string
  projectTags: Array<string>
  projectGithub: string
  id: string
}

interface Props {
  projectsRef: React.MutableRefObject<null>
}

const projects = [
  {
    title: 'Sketchpad',
    img: sketchpad,
    imgAlt: 'sketchpad',
    description: 'A simple site to make some pixel art',
    longerDescription:
      'A simple site to make some pixel art. You can change color, erase, change grid size and other nice features!',
    projectLink: 'https://giuxtaposition.github.io/sketchpad/',
    projectTags: ['html', 'css', 'javascript', 'react'],
    projectGithub: 'https://github.com/giuxtaposition/sketchpad',
    id: 'sketchpad',
  },
  {
    title: 'Todo App',
    img: todo,
    imgAlt: 'Todo App',
    description: 'A Todo List App',
    longerDescription:
      'A Todo List App. You can add new tasks, categorize them into projects, filter them based on project or day!',
    projectLink: 'https://giuxtaposition.github.io/todo-app/',
    projectTags: [
      'html',
      'css',
      'javascript',
      'react',
      'firebase',
      'material-ui',
    ],
    projectGithub: 'https://github.com/giuxtaposition/todo-app',
    id: 'todo',
  },
  {
    title: 'Portfolio Site',
    img: portfolio,
    imgAlt: 'portfolio',
    description: 'This site. My portfolio.',
    longerDescription: 'A website to showcase all of my projects.',
    projectLink: 'https://giuxtaposition.github.io/portfolio-v1',
    projectTags: ['html', 'sass', 'typescript', 'react', 'nodejs'],
    projectGithub: 'https://github.com/giuxtaposition/portfolio-v1',
    id: 'portfolio',
  },
  {
    title: 'Bookworm',
    img: bookworm,
    imgAlt: 'bookworm',
    description: 'Library management site',
    longerDescription:
      'Search books and add them to your library. Keep track of read and not read  books',
    projectLink: 'https://giuxtaposition.github.io/bookworm',
    projectTags: ['html', 'css', 'javascript', 'react'],
    projectGithub: 'https://github.com/giuxtaposition/bookworm',
    id: 'bookworm',
  },
]

const Projects: React.FC<Props> = ({ projectsRef }) => {
  // STATES
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showProject, setShowProject] = useState<project | []>([])
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>(['all'])
  const [filteredProjects, setFilteredProjects] = useState<Array<project> | []>(
    []
  )

  function handleFilters(filter: string) {
    if (filter === 'all') {
      // If clicked filter is "All", remove all other filters
      setSelectedFilters(['all'])
    } else {
      if (selectedFilters.includes('all')) {
        // If previous filter list is only "All", remove it
        const newFiltersList = selectedFilters.filter(
          filterToRemove => filterToRemove !== 'all'
        )
        setSelectedFilters(newFiltersList)
      }

      if (selectedFilters.indexOf(filter) === -1) {
        //If Filter Not Present: Add it
        setSelectedFilters(selectedFilters => [...selectedFilters, filter])
      } else {
        //If Filter Present: Remove it
        const newFiltersList = selectedFilters.filter(
          filterToRemove => filterToRemove !== filter
        )

        if (!newFiltersList.length) {
          setSelectedFilters(['all'])
        } else {
          setSelectedFilters(newFiltersList)
        }
      }
    }
  }

  useEffect(() => {
    // If filter in list add "active" class
    projectsFilters.forEach(filter => {
      if (document.getElementById(`${filter}-filter`) !== null) {
        var filterElement: HTMLElement = document.getElementById(
          `${filter}-filter`
        )!
        if (selectedFilters.includes(filter)) {
          filterElement.classList.add('active')
        } else {
          if (filterElement.classList.contains('active')) {
            filterElement.classList.remove('active')
          }
        }
      } else {
        console.log('filter not found in filters list')
      }
    })

    // Filter projects based on selected filters
    function filterProjects(projects: Array<project>, filters: Array<string>) {
      let filteredProjects

      if (filters.includes('all')) {
        filteredProjects = projects
      } else {
        filteredProjects = projects.filter(function (project) {
          for (var i = 0; i < filters.length; i++) {
            // If even one filter is not present do not show project
            if (project.projectTags.indexOf(filters[i]) === -1) {
              return false
            }
          }
          // If project has all tags show project
          return true
        })
      }

      return filteredProjects
    }

    setFilteredProjects(filterProjects(projects, selectedFilters))
  }, [selectedFilters])

  return (
    <section id='Projects' ref={projectsRef}>
      <div className='title'>Projects</div>
      <div className='filter-container'>
        {projectsFilters.map((filter, key) => (
          <button
            id={`${filter}-filter`}
            className='filter'
            onClick={() => handleFilters(filter)}
            key={key}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className='container'>
        <TransitionGroup className='filtered-projects'>
          {filteredProjects.map(
            (project: project, key: React.Key | null | undefined) => (
              <CSSTransition
                key={project.id}
                timeout={500}
                classNames='filtered-project'
              >
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
              </CSSTransition>
            )
          )}
        </TransitionGroup>
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
      </Modal>
    </section>
  )
}

export default Projects

import styled from '@emotion/styled'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import projectList from '../data/projects.json'
import ProjectCard from './projectsProjectCard'

const ProjectsContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;

  form {
    width: 200px;
    margin: 0 auto;
  }

  label {
    font-size: 1.6rem;
    letter-spacing: 0.025em;
  }

  .dropdown {
    display: flex;
    margin-top: 1.5rem;
    border: 1px solid transparent;
    border-radius: 0.35rem;

    &:focus-within {
      border: 1px solid var(--primary);
    }

    select {
      display: block;
      width: 100%;
      font-size: 1.5rem;
      color: var(--dark);
      border: 1px solid var(--gray);
      border-radius: 0.35rem;
      padding: 0.75rem 2rem 0.75rem 1rem;
      line-height: 1.25;
      appearance: none;
    }

    .arrow {
      display: flex;
      align-items: center;
      color: gray;
      padding: 0 0.5rem;

      svg {
        fill: currentColor;
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }

  .project-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;

    list-style: none;
  }
`

const Projects: React.FC<{ projectImgs: any }> = ({ projectImgs }) => {
  const [selectType, setSelectType] = useState('')

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  const handleSelectChange = e => {
    e.preventDefault()
    const { value } = e.target
    setSelectType(value)
  }

  const renderProjectList =
    selectType === ''
      ? projectList
      : projectList.filter(project => project.type.includes(selectType))

  return (
    <ProjectsContainer>
      <form>
        <label htmlFor='project-select'>Filter by type</label>

        <div className='dropdown'>
          <select
            id='project-select'
            name='project-select'
            defaultValue={selectType}
            onChange={handleSelectChange}
          >
            <option value=''>All</option>
            <option value='react'>React</option>
            <option value='fullstack'>Fullstack</option>
            <option value='front-end'>Front-end</option>
            <option value='back-end'>Back-end</option>
            <option value='node'>Node</option>
          </select>

          <div className='arrow'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path>
            </svg>
          </div>
        </div>
      </form>

      <div className='project-list'>
        {renderProjectList.map(project => {
          let image = projectImgs.find(n => n.node.relativePath === `projects/${project.img}`)

          if (!image) {
            image = projectImgs.find(n => n.node.relativePath === `images/projects/${project.img}`)
          }

          const imageFluid = image.node.childImageSharp.fluid || null
          const imageSizes = image.node.childImageSharp.sizes || null

          return (
            <ProjectCard
              key={project.url}
              project={project}
              fluid={imageFluid}
              sizes={imageSizes}
            />
          )
        })}
      </div>
    </ProjectsContainer>
  )
}

Projects.propTypes = {
  projectImgs: PropTypes.array.isRequired,
}

export default Projects

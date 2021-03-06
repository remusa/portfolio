import styled from '@emotion/styled'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import useProjects from '../hooks/useProjects'

const FeaturedStyles = styled.div`
  margin: 24px 0;
  text-align: center;
  padding: 8px;

  .project-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-even;
    align-items: center;
  }

  @media all and (max-width: 768px) {
    justify-content: center;
  }

  @media all and (max-width: 500px) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`

const CardStyles = styled.div`
  flex: 1 0 400px;
  max-width: 550px;
  height: 550px;
  margin: 8px 16px;
  border-radius: 8px;
  border-bottom: 3px solid var(--primary);
  transition: var(--transitionDefault);

  .top {
    height: 65%;
    position: relative;
    overflow: hidden;

    + * {
      margin: 0;
      padding: 0;
    }

    .image {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 100%;
      clip-path: inset(0);
    }
  }

  .bottom {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
    height: calc(35% - 16px);

    p {
      text-align: initial;
      padding-left: 16px;
      padding-right: 16px;
    }

    h3 {
      text-align: center;
      color: var(--fontColor);
    }

    .icon:hover,
    h3:hover {
      color: var(--coral);
    }
  }

  &:hover {
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.17);
    border-bottom: 3px solid var(--coral);

    .image {
      clip-path: inset(0.5rem);
      transition: clip-path 0.5s ease-in-out 0.3s;
    }
  }

  @media all and (max-width: 500px) {
    height: auto;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    .top {
      height: 250px;
    }

    .bottom {
      height: auto;
    }
  }
`

const ProjectCard: React.FC<{
  project: any
  fluid: any
  sizes: any
}> = ({ project, fluid, sizes }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <CardStyles className='card'>
      <div className='top'>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <Img
            title={project.name}
            alt={project.name}
            fluid={fluid}
            // sizes={sizes}
            className='image'
            fadeIn
            data-aos='image-enter'
          />
        </a>
      </div>

      <div className='bottom'>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <h3>{project.name}</h3>
        </a>
        <p>{project.description}</p>
        <a href={project.github} target='_blank' rel='noopener noreferrer' className='icon'>
          <FaGithubAlt />
        </a>
      </div>
    </CardStyles>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  fluid: PropTypes.object,
  sizes: PropTypes.object,
}

const Featured: React.FC = () => {
  const { projectImgs, featuredProjects } = useProjects()

  return (
    <FeaturedStyles>
      <h2>Personal Projects</h2>

      <div className='project-list'>
        {featuredProjects.map(project => {
          const image = projectImgs.find(n => n.node.relativePath === `projects/${project.img}`)
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
    </FeaturedStyles>
  )
}

export default Featured

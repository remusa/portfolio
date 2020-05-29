import React from 'react'
import styled from 'styled-components'
// import { FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Social from './social'

const FooterStyles = styled.footer`
  grid-area: footer;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.75rem;
  text-align: center;

  .border-bottom {
    border-bottom: 3px solid transparent;
    padding-bottom: 4px;

    &:hover {
      transition: all 0.2s ease;
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }

  .social-links {
    width: 50px;
    display: flex;
    justify-content: space-between;

    a.social {
      color: var(--color-primary-light);
      margin: 0 1rem;
      transition: transform 0.3s ease-in-out;
      display: inline-block;
      size: 25px;

      &:hover {
        transform: translateZ(0) scale(0.85);
        color: var(--color-primary);
        opacity: 1;
      }
    }
  }

  .move-top:target ~ #header {
    transform: translateY(0px);
    transition: transform 3s ease-in-out;
  }

  .copyright {
    font-size: 1.8rem;
  }
`

const Footer = () => (
  <FooterStyles>
    <Social />

    {/* <span className='social-links'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/remusa'
        className='social-link github'
      >
        <FaGithubAlt />
        <p className='icon-title'>Github</p>
      </a>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/remusa'
        className='social-link linkedin'
      >
        <FaLinkedin />
        <p className='icon-title'>LinkedIn</p>
      </a>
    </span> */}

    <a className='border-bottom move-top' href='#header'>
      Back top
    </a>
    {/* <AnchorLink href="#header" to='#header' className='border-bottom'>
      Back top
    </AnchorLink> */}

    <span className='copyright'>© {new Date().getFullYear()} RMS</span>
  </FooterStyles>
)

export default Footer

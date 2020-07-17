import styled from '@emotion/styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const HeaderStyles = styled.header`
  grid-area: header;
  padding: 1.5rem 2rem;

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--fontColor);
      size: 1.8rem;
    }

    .left {
      & > a {
        font-size: 3.25rem;
      }
    }

    .right {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: center;

      a {
        outline: 0;
        margin: 4px;

        border-color: #fff;
        background-color: transparent;
        border: 1px solid transparent;

        color: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        background: transparent;

        text-decoration: none;
        cursor: pointer;
        user-select: none;

        transition: var(--transitionThreeMs);

        &:hover,
        &.active {
          /* background-color: rgba(0, 0, 0, 0.3); */
          background-color: var(--primary);
        }
      }
    }
  }
`

const Header: React.FC<{
  siteTitle: string
}> = ({ siteTitle = '' }) => (
  <HeaderStyles id='header'>
    <nav id='nav'>
      <div className='left'>
        <AniLink fade to='/' activeClassName='active'>
          {siteTitle}
        </AniLink>
      </div>

      <div className='right'>
        <AniLink
          fade
          to='/blog'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Blog
        </AniLink>

        <AniLink
          fade
          to='/projects'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Projects
        </AniLink>

        {/* <AniLink
          fade
          to='/books'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Book Notes
        </AniLink> */}

        <AniLink
          fade
          to='/now'
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: 'active' } : null
          }
        >
          Now
        </AniLink>

        <Link to='/rss.xml'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.6361 20.364C4.00738 18.7353 3 16.4853 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 16.4853 19.9926 18.7353 18.364 20.3639L19.7782 21.7782C21.7688 19.7875 23 17.0376 23 14C23 7.92487 18.0751 3 12 3C5.92487 3 1 7.92487 1 14C1 17.0376 2.23124 19.7876 4.22189 21.7782L5.6361 20.364Z'
              fill='currentColor'
            />
            <path
              d='M16.9498 18.9497C18.2165 17.683 19 15.933 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 15.933 5.78353 17.6831 7.05031 18.9498L8.46453 17.5356C7.55967 16.6308 7 15.3807 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 15.3807 16.4404 16.6307 15.5356 17.5355L16.9498 18.9497Z'
              fill='currentColor'
            />
            <path
              d='M14.1213 16.1213C14.6642 15.5784 15 14.8284 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 14.8285 9.33581 15.5785 9.87874 16.1214L11.293 14.7072C11.112 14.5262 11 14.2762 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.2761 12.8881 14.5261 12.7071 14.7071L14.1213 16.1213Z'
              fill='currentColor'
            />
          </svg>
        </Link>
      </div>
    </nav>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header

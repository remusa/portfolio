import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { ReactElement } from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'

const LayoutStyles = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(auto, 1/3fr) 1fr minmax(auto, 1/3fr);
  grid-template-areas: 'header header header' '. main .' 'footer footer footer';
  grid-gap: 16px;

  h1 {
    text-align: center;
  }
`

const Layout: React.FC<{ children: ReactElement[] }> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutStyles>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer />
      </LayoutStyles>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

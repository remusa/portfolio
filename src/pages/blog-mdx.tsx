import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants'

export const postQueryMdx = graphql`
  query BlogIndexQueryMdx {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            date
            author
            tags
            language
            type
          }
          fields {
            slug
          }
          timeToRead
          wordCount {
            words
          }
        }
        next {
          frontmatter {
            path
            title
          }
        }
        previous {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

const PostsLists = styled.div`
  margin-top: 4rem;
  transform: all 0.3s linear;

  .post {
    margin-bottom: 3rem;

    a:hover {
      color: var(--primary);
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      padding: 2.5rem 0 0 0;
      border-bottom: 1px solid var(--primary);
    }

    .date {
      font-style: italic;
    }

    ul.tags {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        padding: 0.5rem 0.75rem;
        margin-right: 4px;
        border-radius: 3px;
        border: 1px solid var(--primary);
        font-size: 1.5rem;

        &:hover {
          background: var(--primary);
          color: var(--white);
        }
      }
    }
  }
`

const BlogPage: React.FC<{ data: any }> = ({ data }) => {
  const blogEntries = data.allMdx.edges.filter(post => post.node.frontmatter.type === 'BLOG')

  return (
    <Layout>
      <SEO title='Blog MDX' keywords={[`blog`]} />

      <h1>Posts in MDX</h1>

      <PostsLists>
        {blogEntries.map(post => {
          const {
            id,
            frontmatter: { title, date, path, tags, excerpt },
            fields: { slug },
          } = post.node

          return (
            <div className='post' key={id}>
              <Link to={slug}>
                <h2>{title}</h2>
              </Link>
              <p className='date'>Date: {date}</p>
              <ul className='tags'>
                {tags.map(tag => (
                  <li id='tag'>{tag}</li>
                ))}
              </ul>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </PostsLists>
    </Layout>
  )
}

export default BlogPage
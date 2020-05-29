const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/content/templates/blog-post.jsx`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
              tags
              type
              book_author
              title_full
            }
            timeToRead
            wordCount {
              words
            }
            html
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPost,
        context: {
          next,
          previous,
        },
      })
    })
  })
}

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title='404: Not found' description='404: Not found' />

    <h1>NOT FOUND</h1>

    <p>Nothing here!</p>
  </Layout>
)

export default NotFoundPage

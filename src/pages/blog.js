import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
    <Layout>
        <SEO title='Blog' keywords={[`gatsby`, `application`, `react`]} />

        <h1>Latest Posts</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            adipisci, voluptatum, nisi velit praesentium error quia explicabo
            voluptas ad recusandae enim. Recusandae sequi non vel voluptas.
            Labore omnis provident ex, perferendis esse, voluptate atque alias
            officiis dolor eligendi itaque qui?
        </p>
    </Layout>
)

export default BlogPage

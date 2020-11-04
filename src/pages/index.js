import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Basic Gatsby Netlify Site</h1>
    <section>
      <p>Content goes here</p>
    </section>
  </Layout>
)

export default IndexPage

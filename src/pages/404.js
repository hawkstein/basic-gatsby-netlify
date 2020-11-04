import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found.</h1>
    <p>The route you are trying to access does not exist.</p>
  </Layout>
)

export default NotFoundPage

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "../../styles/reset.scss"
import "./layout.scss"

export const PureLayout = ({ children, data }) => {
  return (
    <>
      <div className="layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          All Rights Reserved © {data.site.siteMetadata.author}{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return <PureLayout data={data}>{children}</PureLayout>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

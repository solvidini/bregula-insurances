/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import SideDrawer from "../components/sideDrawer"
import "../sass/main.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        sideDrawerTogglerClicked={sideDrawerToggleHandler}
        sideDrawerOpened={sideDrawerIsVisible}
      />
      <SideDrawer
        opened={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      <div className="content">
        <main className="content__main">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

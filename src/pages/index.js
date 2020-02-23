import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/layout"
import Image from "../images/insurance-2.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Breguła Ubezpieczenia</h1>
    <div className="home-content">
      <h3>Ubezpieczamy osoby inwidualne oraz firmy</h3>
      <p>Reprehenderit aliqua non id aliqua non id</p>
      <img className="home-content__image" src={Image} alt="Insurance Image" />
    </div>
  </Layout>
)

export default IndexPage

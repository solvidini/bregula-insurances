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
      <p>Now go build something great.</p>
      <img className="home-content__image" src={Image} alt="Insurance Image" />
    </div>
    <Link to="/" className="link" activeClassName="active">
      Home
    </Link>
    <Link to="/about-us/" className="link" activeClassName="active">
      O nas
    </Link>
    <Link to="/experience/" className="link" activeClassName="active">
      Doświadczenie
    </Link>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/layout"
import Image from "../images/insurance-2.png"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Breguła Ubezpieczenia</h1>
    <div className="home-content">
      <h3>Ubezpieczamy osoby inwidualne oraz firmy</h3>
      <div className="home-content__container">
        <div className="home-content__text">
          <p>
            Skład naszej oferty&nbsp;&nbsp;
            <Link to="/about-us">
              <FontAwesomeIcon
                icon="arrow-right"
                className="home-content__icon-link"
              />
            </Link>
          </p>
          <p>Nasze doświadczenie&nbsp;&nbsp;
            <Link to="/experience">
              <FontAwesomeIcon
                icon="arrow-right"
                className="home-content__icon-link"
              />
            </Link></p>
          <div>
            <p>Skontaktuj się z nami:</p>
            <a href="tel:+48666666666" className="home-content__contact">
              <FontAwesomeIcon
                icon="phone-alt"
                className="home-content__icon"
              />
              +48&nbsp;666&nbsp;666&nbsp;666
            </a>
            <a href="mailto:bregula@onet.pl" className="home-content__contact">
              <FontAwesomeIcon icon="envelope" className="home-content__icon" />
              bregula@onet.pl
            </a>
          </div>
        </div>
        <div className="home-content__image">
          <img src={Image} alt="Insure everything" />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

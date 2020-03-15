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
        <div className="home-content__links">
          <h4 className="home-content__links-title">
            Skład naszej oferty&nbsp;&nbsp;
            <Link to="/offer">
              <FontAwesomeIcon
                icon="arrow-right"
                className="home-content__icon-link"
              />
            </Link>
          </h4>
          <h4 className="home-content__links-title">
            Nasze doświadczenie&nbsp;&nbsp;
            <Link to="/about-us">
              <FontAwesomeIcon
                icon="arrow-right"
                className="home-content__icon-link"
              />
            </Link>
          </h4>
          <div className="home-content__contact">
            <h4 className="home-content__contact-title">
              Skontaktuj się z nami:
            </h4>
            <div>
              <h5 className="home-content__contact-name">Bartosz</h5>
              <a href="tel:+48511141613" className="home-content__contact-link">
                <FontAwesomeIcon
                  icon="phone-alt"
                  className="home-content__icon"
                />
                +48&nbsp;511&nbsp;141&nbsp;613
              </a>
              <a
                href="mailto:bregulabartosz@gmail.com"
                className="home-content__contact-link"
              >
                <FontAwesomeIcon
                  icon="envelope"
                  className="home-content__icon"
                />
                bregulabartosz@gmail.com
              </a>
            </div>
            <div>
              <h5 className="home-content__contact-name">Beata</h5>
              <a href="tel:+48510242555" className="home-content__contact-link">
                <FontAwesomeIcon
                  icon="phone-alt"
                  className="home-content__icon"
                />
                +48&nbsp;501&nbsp;242&nbsp;555
              </a>
              <a
                href="mailto:beatapegaz@op.pl"
                className="home-content__contact-link"
              >
                <FontAwesomeIcon
                  icon="envelope"
                  className="home-content__icon"
                />
                beatapegaz@op.pl
              </a>
            </div>
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

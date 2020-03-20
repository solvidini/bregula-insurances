import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/layout"
import Image from "../images/insurance.png"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-content">
      <div className="home-content__title-container">
        <h2 className="home-content__title">
          Ubezpieczamy osoby inwidualne oraz&nbsp;firmy
        </h2>
        <div className="home-content__title-underline"></div>
      </div>
      <div className="home-content__container">
        <div className="home-content__links">
          <h4 className="home-content__links-title">
            <Link to="/offer" className="home-content__links-item">
              Skład naszej oferty&nbsp;&nbsp;
              <FontAwesomeIcon
                icon="arrow-right"
                className="home-content__icon-link"
              />
            </Link>
          </h4>
          <h4 className="home-content__links-title">
            <Link to="/about-us" className="home-content__links-item">
              Nasze doświadczenie&nbsp;&nbsp;
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
            <div className="home-content__contact-group">
              <h5 className="home-content__contact-name">Bartosz</h5>
              <a href="tel:+48511141613" className="home-content__contact-link">
                <FontAwesomeIcon
                  icon="phone-alt"
                  className="home-content__icon"
                />
                511&nbsp;141&nbsp;613
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
            <div className="home-content__contact-group">
              <h5 className="home-content__contact-name">Beata</h5>
              <a href="tel:+48510242555" className="home-content__contact-link">
                <FontAwesomeIcon
                  icon="phone-alt"
                  className="home-content__icon"
                />
                501&nbsp;242&nbsp;555
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

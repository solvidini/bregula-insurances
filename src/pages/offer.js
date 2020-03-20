import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"

import insuranceImage from "../images/insurance-2.png"

const Offer = () => (
  <Layout>
    <SEO title="Oferta" />
    <div className="offer-title-container">
      <h2 className="offer-title">Co oferujemy?</h2>
      <div className="offer-title__underline"></div>
    </div>
    <article className="offer">
      <div className="offer__content">
        <div className="offer__main">
          <p>
            Ubezpieczamy klientów inwidualnych oraz małe i średnie
            przedsiębiorstwa.
          </p>
        </div>
        <p className="offer__sub">
          W skład naszej oferty wchodzą ubezpieczenia:
        </p>
        <ul className="offer__list">
          <li className="offer__item">
            Komunikacyjne{" "}
            <span className="offer__item--brackets">
              (samochody, motory, itp)
            </span>
          </li>
          <li className="offer__item">
            Majątek{" "}
            <span className="offer__item--brackets">(domy, mieszkania)</span>
          </li>
          <li className="offer__item">
            Firmy{" "}
            <span className="offer__item--brackets">
              (środki trwałe/obrotowe, majątek, komunikacja)
            </span>
          </li>
          <li className="offer__item">
            Życie{" "}
            <span className="offer__item--brackets">
              (grupowe, indywidualne, zdrowotne)
            </span>
          </li>
          <li className="offer__item">Ubezpieczenia grupowe dla firm</li>
          <li className="offer__item">Podróżne</li>
        </ul>
      </div>
      <img
        className="offer__image"
        src={insuranceImage}
        alt="Insurance Image"
      />
    </article>
  </Layout>
)

export default Offer

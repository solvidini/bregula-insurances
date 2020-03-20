import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"
import OfferItem from "../components/offerItem"

import companyGroup from "../images/offer/company-group.jpg"
import company from "../images/offer/company.jpg"
import life from "../images/offer/life.jpg"
import house from "../images/offer/house.jpg"
import journey from "../images/offer/journey.jpg"
import transport from "../images/offer/transport.jpg"

const Offer = () => (
  <Layout>
    <SEO title="Oferta" description="W skład naszej oferty wchodzą ubezpieczenia: komunikacyjne (samochody, motory, itp), majątek (domy, mieszkania), firmy (środki trwałe/obrotowe, majątek, komunikacja), życie (grupowe, indywidualne, zdrowotne), ubezpieczenia grupowe dla firm, podróżne."/>
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
        <div className="offer__list">
          <OfferItem image={transport} description="Komunikacyjne" brackets="(samochody, motory, itp)"/>
          <OfferItem image={house} description="Majątek" brackets="(domy, mieszkania)"/>
          <OfferItem image={company} description="Firmy" brackets="(środki trwałe/obrotowe, majątek, komunikacja)"/>
          <OfferItem image={life} description="Życie" brackets="(grupowe, indywidualne, zdrowotne)"/>
          <OfferItem image={companyGroup} description="Ubezpieczenia grupowe dla firm"/>
          <OfferItem image={journey} description="Podróżne"/>
        </div>
      </div>
    </article>
  </Layout>
)

export default Offer

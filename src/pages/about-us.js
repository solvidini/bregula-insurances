import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"
import Bartek from "../images/bartek.png"

const AboutUs = () => (
  <Layout>
    <SEO title="O nas" />
    <div className="about-us">
      <div className="about-us__title-container">
        <h2 className="about-us__title">Co powinieneś o nas wiedzieć?</h2>
        <div className="about-us__title-underline-container">
          <div className="about-us__title-underline"></div>
          <div className="about-us__title-underline"></div>
        </div>
      </div>
      <div className="owners">
        <div className="owners__item">
          <img src={Bartek} alt="Bartosz" className="owners__item-image" />
          <figcaption className="owners__item-caption">Bartosz</figcaption>
        </div>
        <figure className="owners__item">
          <img src={Bartek} alt="Beata" className="owners__item-image" />
          <figcaption className="owners__item-caption">Beata</figcaption>
        </figure>
      </div>
      <article className="about-us__content">
        <span className="about-us__content-highlight">Breguła Ubezpieczenia</span> jest
        to rodzinna firma, która istnieje na rynku od ponad 25 lat. Ponad{" "}
        <b>1000 zadowolonych klientów</b> skorzystało z usług naszej firmy.
        Jesteśmy liderami w branży, o czym świadczą co roczne nagrody i
        wyróżnienia od wielu towarzystw ubezpieczeniowych. Współpracując z
        większością z nich (ok <b>30 różnych firm ubezpieczeniowych</b>),
        posiadamy kompleksową ochronę dla klienta indywidualnego oraz{" "}
        <b>małych</b> i <b>średnich</b> przedsiębiorstw.
      </article>
    </div>
  </Layout>
)

export default AboutUs

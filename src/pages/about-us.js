import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"
import Bartek from "../images/bartek.png"
import Beata from "../images/beata.png"

const AboutUs = () => (
  <Layout>
    <SEO
      title="o&nbsp;nas"
      description="Breguła Ubezpieczenia jest to rodzinna firma, która istnieje na rynku od ponad 25 lat. Ponad 1000 zadowolonych klientów skorzystało z usług naszej firmy. Jesteśmy liderami w branży, o czym świadczą co roczne nagrody i wyróżnienia od wielu towarzystw ubezpieczeniowych. Współpracując z większością z nich (ok 30 różnych firm ubezpieczeniowych), posiadamy kompleksową ochronę dla klienta indywidualnego oraz małych i średnich przedsiębiorstw."
    />
    <div className="about-us">
      <div className="about-us__title-container">
        <h2 className="about-us__title">Co powinieneś o&nbsp;nas wiedzieć?</h2>
        <div className="about-us__title-underline-container">
          <div className="about-us__title-underline"></div>
          <div className="about-us__title-underline"></div>
        </div>
      </div>
      <div className="owners">
        <figure className="owners__item">
          <img src={Beata} alt="Beata" className="owners__item-image" />
          <figcaption className="owners__item-caption">Beata</figcaption>
        </figure>
        <figure className="owners__item">
          <img src={Bartek} alt="Bartosz" className="owners__item-image" />
          <figcaption className="owners__item-caption">Bartosz</figcaption>
        </figure>
      </div>
      <article className="about-us__content">
        <span className="about-us__content-highlight">
          Breguła Ubezpieczenia
        </span>{" "}
        jest to rodzinna firma, która istnieje na rynku od ponad 25 lat. Ponad{" "}
        <b>1000 zadowolonych klientów</b> skorzystało z&nbsp;usług naszej firmy.
        Jesteśmy liderami w branży, o&nbsp;czym świadczą co roczne nagrody
        i&nbsp;wyróżnienia od wielu towarzystw ubezpieczeniowych. Współpracując
        z&nbsp;większością z&nbsp;nich (ok{" "}
        <b>30 różnych firm ubezpieczeniowych</b>), posiadamy kompleksową ochronę
        dla klienta indywidualnego oraz <b>małych</b> i&nbsp;<b>średnich</b>{" "}
        przedsiębiorstw.
      </article>
    </div>
  </Layout>
)

export default AboutUs

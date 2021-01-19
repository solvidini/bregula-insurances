import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"
import Partner from "../components/partner"

import allianz from "../images/partners/allianz.jpg"
import axa from "../images/partners/axa.png"
import compensa from "../images/partners/compensa.png"
import generali from "../images/partners/generali.jpg"
import hdi from "../images/partners/hdi.png"
import hestia from "../images/partners/hestia.jpg"
import inter from "../images/partners/inter.png"
import interrisk from "../images/partners/interrisk.png"
import leadenhall from "../images/partners/leadenhall.jpg"
import link4 from "../images/partners/link4.png"
import mtu from "../images/partners/mtu.jpg"
import pzu from "../images/partners/pzu.jpg"
import ubezpieczeniapocztowe from "../images/partners/ubezpieczeniapocztowe.png"
import uniqa from "../images/partners/uniqa.jpg"
import warta from "../images/partners/warta.png"
import wiener from "../images/partners/wiener.png"
import ycd from "../images/partners/ycd.jpg"

const Partners = () => (
  <Layout>
    <SEO
      title="Partnerzy"
      description="We współpracy z SUPERPOLISA
- Hestia
- MTU
- You Can Drive
- Generali
- Warta
- HDI
- Allianz
- Wiener
- Compensa
- PZU
- Uniqa
- Interrisk
- Link4
- AXA
- Leadenhall
- Inter Polska (Inter Ubezpieczenia)
- TUW Pocztowe (Ubezpieczenia Pocztowe)"
    />
    <div className="partners-title-container">
      <h2 className="partners-title">Nasi partnerzy</h2>
      <div className="partners-title__underline"></div>
    </div>
    <article className="partners">
      <div className="partners__main">
        <p>Towarzystwa, z którymi współpracujemy:</p>
      </div>
      <div className="partners__list">
        <Partner image={allianz} />
        <Partner image={axa} />
        <Partner image={pzu} style={{ padding: "2rem" }} />
        <Partner image={generali} />
        <Partner image={compensa} />
        <Partner image={hestia} />
        <Partner image={hdi} style={{ padding: "2rem" }} />
        <Partner image={interrisk} />
        <Partner image={leadenhall} />
        <Partner image={link4} />
        <Partner image={mtu} />
        <Partner image={uniqa} style={{ padding: "2rem" }} />
        <Partner image={ubezpieczeniapocztowe} />
        <Partner image={warta} />
        <Partner image={wiener} />
        <Partner image={ycd} />
        <Partner image={inter} />
      </div>
    </article>
  </Layout>
)

export default Partners

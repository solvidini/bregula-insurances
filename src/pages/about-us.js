import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="O nas" />
    <h1>O nas</h1>
    <article className="about-us">
      Breguła Ubezpieczenia jest to rodzinna firma, która istnieje na rynku od
      ponad 25 lat. Ponad 1000 zadowolonych klientów skorzystało z usług naszej
      firmy. Jesteśmy liderami w branży, o czym świadczą co roczne nagrody i
      wyróżnienia od wielu towarzystw ubezpieczeniowych. Współpracując z
      większością z nich (ok 30 różnych firm ubezpieczeniowych),posiadamy
      kompleksową ochronę dla klienta indywidualnego oraz małych i średnich
      przedsiębiorstw.
    </article>
  </Layout>
)

export default AboutUs

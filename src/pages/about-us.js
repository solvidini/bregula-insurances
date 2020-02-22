import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="O nas" />
    <h1>O nas</h1>
    <p>
      Rodzinna firma ubezpieczeniowa, działająca na rynku od 1994 r. Na początku
      była to jednoosobowa działalność gospodarcza prowadzona przez moją mame,
      obecnie współpracujemy zdobywając nowych klientów i obsługując tych,
      którzy nam zaufali. Dzięki współpracy ze mną zakres ubezpieczeniowy został
      rozwinięty, tworząc kompletną ofertę dla naszych klientów. Ubezpieczamy
      klientów inwidualnych oraz firmy.
    </p>
    <p>W zakresie naszej oferty są ubezpieczenia:</p>
    <ul>
      <li>komunikacyjne (samochody, motory, itp)</li>
      <li>majątek (domy, mieszkania)</li>
      <li>firmy (środki trwałe/obrotowe, majątek, komunikacja)</li>
      <li>życie (grupowe, indywidualne, zdrowotne)</li>
      <li>ubezpieczenia grupowe dla firm</li>
      <li>podróżne</li>
    </ul>

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

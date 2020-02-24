import React from "react"

import Layout from "../containers/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="O nas" />
    <h1>O nas</h1>
    <article className="about-us">
      Rodzinna firma ubezpieczeniowa, działająca na rynku od 1994 r. Na początku
      była to jednoosobowa działalność gospodarcza prowadzona przez moją mame,
      obecnie współpracujemy zdobywając nowych klientów i obsługując tych,
      którzy nam zaufali. Dzięki współpracy ze mną zakres ubezpieczeniowy został
      rozwinięty, tworząc kompletną ofertę dla naszych klientów. Ubezpieczamy
      klientów inwidualnych oraz firmy.
    </article>
    <div className="offer">
      <p className="offer__sub">W skład naszej oferty wchodzą ubezpieczenia:</p>
      <ul className="offer__list">
        <li className="offer__item">Komunikacyjne <span className="offer__item--brackets">(samochody, motory, itp)</span></li>
        <li className="offer__item">Majątek <span className="offer__item--brackets">(domy, mieszkania)</span></li>
        <li className="offer__item">
          Firmy <span className="offer__item--brackets">(środki trwałe/obrotowe, majątek, komunikacja)</span>
        </li>
        <li className="offer__item">
          Życie <span className="offer__item--brackets">(grupowe, indywidualne, zdrowotne)</span>
        </li>
        <li className="offer__item">Ubezpieczenia grupowe dla firm</li>
        <li className="offer__item">Podróżne</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage

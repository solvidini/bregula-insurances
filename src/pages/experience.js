import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Doświadczenie" />
    <h1>Doświadczenie</h1>
    <p>
      Sunt minim anim veniam Lorem cupidatat duis. Veniam ad exercitation do
      minim ex consectetur. Ullamco ullamco duis non ipsum eu fugiat Lorem non.
      Labore reprehenderit in deserunt amet occaecat officia tempor cupidatat
      deserunt proident amet. Occaecat ullamco cupidatat exercitation dolor sit
      aliqua tempor nostrud et consequat ut occaecat excepteur. Do velit irure
      minim sunt ex et adipisicing eiusmod proident. Qui ex in fugiat do magna
      consequat eu ea reprehenderit culpa. Culpa velit nisi eu adipisicing quis
      eu duis consequat amet anim ullamco commodo. In veniam cillum laboris
      magna consequat adipisicing. Dolor velit aliquip veniam Lorem labore.
      Occaecat duis consequat ex qui nulla proident voluptate in proident Lorem
      nisi. Incididunt dolor ipsum tempor incididunt. Dolor et dolore velit elit
      do. Dolore Lorem commodo quis velit ex incididunt labore. In elit ea ipsum
      id aliquip aliquip sit minim. Magna consequat labore reprehenderit qui
      consectetur cupidatat elit tempor non nostrud. Velit aliqua ex excepteur
      ea exercitation. Eu labore proident nisi elit commodo elit consequat.
      Ullamco minim eiusmod adipisicing qui reprehenderit in duis fugiat qui
      anim. Veniam quis do laborum anim consequat cillum sit. Elit magna officia
      minim.
    </p>

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

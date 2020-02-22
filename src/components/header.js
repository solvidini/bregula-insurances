import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from './navigation';

const Header = props => (
  <header
    className="main-header"
  >
    <div
      className="main-header__toolbar"
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: '2rem',
            fontWeight: '600'
          }}
        >
          LOGO
        </Link>
      </div>
      <nav className="main-header__nav">
        <Navigation/>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

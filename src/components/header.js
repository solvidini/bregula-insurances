import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"
import DrawerToggler from "./drawerToggler"
import Logo from './logo'

const Header = props => (
  <header className="main-header">
    <div className="main-header__toolbar">
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          <Logo />
        </Link>
      </div>
      <nav className="main-header__nav">
        <Navigation />
      </nav>
      <DrawerToggler
        sideDrawerOpened={props.sideDrawerOpened}
        clicked={props.sideDrawerTogglerClicked}
      />
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

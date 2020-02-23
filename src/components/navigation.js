import React from "react"

import NavigationItem from "./navigationItem"
import arrowDown from "../images/svgs/chevron-down-solid.svg"
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = props => {
  return (
    <ul className="main-header__nav-list">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/about-us">O&nbsp;nas</NavigationItem>
      <NavigationItem to="/experience">Doświadczenie</NavigationItem>
      <li className="main-header__nav-dropdown">
        <span>
          Kontakt
          <img
            className="main-header__nav-arrow"
            src={arrowDown}
            alt="Arrow-Down"
          />
        </span>
        <div className="main-header__nav-dropdown-content">
          <div className="main-header__nav-dropdown-item">
            <a href="tel:+48666666666"><FontAwesomeIcon icon="phone-alt" className="main-header__nav-fa"/>+48&nbsp;666&nbsp;666&nbsp;666</a>
          </div>
          <div className="main-header__nav-dropdown-item">
            <a href="mailto:bregula@onet.pl"><FontAwesomeIcon icon="envelope" className="main-header__nav-fa"/>bregula@onet.pl</a>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Navigation

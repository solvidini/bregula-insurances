import React from "react"

import NavigationItem from "./navigationItem"
import arrowDown from "../images/svgs/chevron-down-solid.svg"
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = props => {
  return (
    <ul className="navigation-list">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/about-us">O&nbsp;nas</NavigationItem>
      <NavigationItem to="/experience">Doświadczenie</NavigationItem>
      <li className="navigation-dropdown">
        <span>
          Kontakt
          <img
            className="navigation-arrow"
            src={arrowDown}
            alt="Arrow-Down"
          />
        </span>
        <div className="navigation-dropdown-content">
          <div className="navigation-dropdown-item">
            <a href="tel:+48666666666"><FontAwesomeIcon icon="phone-alt" className="navigation-fa"/>+48&nbsp;666&nbsp;666&nbsp;666</a>
          </div>
          <div className="navigation-dropdown-item">
            <a href="mailto:bregula@onet.pl"><FontAwesomeIcon icon="envelope" className="navigation-fa"/>bregula@onet.pl</a>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Navigation

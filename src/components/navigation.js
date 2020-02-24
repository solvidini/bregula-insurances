import React from "react"

import NavigationItem from "./navigationItem"
import arrowDown from "../images/svgs/chevron-down-solid.svg"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navigation = props => {
  return (
    <ul className="navigation-list">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/about-us">O&nbsp;nas</NavigationItem>
      <NavigationItem to="/experience">Doświadczenie</NavigationItem>
      <li className="navigation-dropdown">
        <span>
          Kontakt
          <img className="navigation-arrow" src={arrowDown} alt="Arrow-Down" />
        </span>
        <div className="navigation-dropdown__content">
          <h5 className="navigation-dropdown__name">Bartosz</h5>
          <div className="navigation-dropdown__item">
            <a href="tel:+48511141613">
              <FontAwesomeIcon icon="phone-alt" className="navigation-fa" />
              +48&nbsp;511&nbsp;141&nbsp;613
            </a>
          </div>
          <div className="navigation-dropdown__item">
            <a href="mailto:bregulabartosz@gmail.com">
              <FontAwesomeIcon icon="envelope" className="navigation-fa" />
              bregulabartosz@gmail.com
            </a>
          </div>
          <h5 className="navigation-dropdown__name" style={{marginTop: "2.5rem"}}>Beata</h5>
          <div className="navigation-dropdown__item">
            <a href="tel:+48510242555">
              <FontAwesomeIcon icon="phone-alt" className="navigation-fa" />
              +48&nbsp;501&nbsp;242&nbsp;555
            </a>
          </div>
          <div className="navigation-dropdown__item">
            <a href="mailto:beatapegaz@op.pl">
              <FontAwesomeIcon icon="envelope" className="navigation-fa" />
              beatapegaz@op.pl
            </a>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Navigation

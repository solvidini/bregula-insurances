import React from "react"
import { Link } from "gatsby"

const NavigationItem = props => {
  return (
    <li className="main-header__nav-item">
      <Link
        to={props.to}
        className="main-header__nav-link"
        activeClassName="main-header__nav-link--active"
      >
        {props.children}
      </Link>
    </li>
  )
}

export default NavigationItem

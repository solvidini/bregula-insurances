import React from "react"
import { Link } from "gatsby"

const NavigationItem = props => {
  return (
    <li className="navigation-item">
      <Link
        to={props.to}
        className="navigation-link"
        activeClassName="navigation-link--active"
      >
        {props.children}
      </Link>
    </li>
  )
}

export default NavigationItem

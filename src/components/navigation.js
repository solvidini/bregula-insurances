import React from "react"

import NavigationItem from "./navigationItem"

const Navigation = props => {
  return (
    <ul className="main-header__nav-list">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/about-us">O&nbsp;nas</NavigationItem>
      <NavigationItem to="/experience">Doświadczenie</NavigationItem>
      <li className="main-header__nav-item">
        <span className="main-header__nav-link">Kontakt</span>
      </li>
    </ul>
  )
}

export default Navigation

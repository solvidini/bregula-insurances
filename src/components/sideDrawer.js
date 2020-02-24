import React from "react"

import Navigation from "./navigation"
import Backdrop from "./backdrop"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SideDrawer = props => {
  let sideDrawerClasses = ["side-drawer", "side-drawer--closed"]
  if (props.opened) {
    sideDrawerClasses = ["side-drawer", "side-drawer--opened"]
  }
  return (
    <>
      <Backdrop show={props.opened} clicked={props.closed} />
      <div className={sideDrawerClasses.join(" ")}>
        <nav className="side-drawer__nav">
          <Navigation clicked={props.closed} />
          <div className="side-drawer__contact">
            <a href="tel:+48666666666" className="side-drawer__link">
              <FontAwesomeIcon icon="phone-alt" className="side-drawer__fa" />
              666&nbsp;666&nbsp;666
            </a>
            <a href="mailto:bregula@onet.pl" className="side-drawer__link">
              <FontAwesomeIcon icon="envelope" className="side-drawer__fa" />
              bregula@onet.pl
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default SideDrawer

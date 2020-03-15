import React from "react"

import Image from "../images/bregula-biale.png"

const Logo = (props) => {
  return (
    <div className="main-logo-container">
      <img className="main-logo" src={Image} alt="Bregula Ubezpieczenia" />
    </div>
  )
}

export default Logo

import React from "react"

const Partner = props => {
  return (
    <div className="partners__list-item" style={props.style}>
      <img
        className="partners__list-item-image"
        src={props.image}
        alt="Partner"
      />
    </div>
  )
}

export default Partner

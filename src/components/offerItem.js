import React from "react"

const OfferItem = props => {
  return (
    <div className="offer__list-item">
      <img
        className="offer__list-item-image"
        src={props.image}
        alt="Offer example"
      />
      <div className="offer__list-item-description">
        <div>{props.description}</div>
        <div>{props.brackets}</div>
      </div>
    </div>
  )
}

export default OfferItem

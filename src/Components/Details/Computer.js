import React from "react"

import { FontAwesome } from "../FontAwesome"

export const Computer = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Мой компьютер
        </div>
        <p className="details_line">
          <FontAwesome icon="fa-solid fa-microchip" /> {props.data.cpu}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-memory" /> {props.data.ram}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-desktop" /> {props.data.gpu}
        </p>
      </div>
    </>
  )
}
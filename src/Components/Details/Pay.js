import React from "react"

export const Pay = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Желаемая зарплата
        </div>
        <p className="details_line">от {props.data.rub} / {props.data.usd} / {props.data.eur}</p>
        {props.data.shedule.map((item, i) => {
          return <p className="details_line_small" key={i}>{item}</p>
        })}
      </div>
    </>
  )
}
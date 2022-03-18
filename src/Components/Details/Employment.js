import React from "react"

export const Employment = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Варианты трудоустройства
        </div>
        {props.data.employment.map((item, i) => {
          return <p className="details_line" key={i}>{item}</p>
        })}

        <p className="details_line_small bg-warning text-black">{props.data.information}</p>
      </div>
    </>
  )
}
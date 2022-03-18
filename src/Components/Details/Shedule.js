import React from "react"

export const Shedule = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          График работы
        </div>
        {props.data.shedule.map((item, i) => {
          return <p className="details_line_small" key={i}>{item}</p>
        })}
      </div>
    </>
  )
}
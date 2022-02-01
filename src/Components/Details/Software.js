import React from "react"

export const Software = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Программное обеспечение
        </div>
        {props.data.soft.map((item, i) => {
          return <p className="details_line" key={i}>{item}</p>
        })}
      </div>
    </>
  )
}
import React from "react"

export const Learns = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Хочу научиться
        </div>
        {props.data.learn.map((item, i) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
import React from "react"

import { ProgressBar } from 'react-bootstrap'

export const Languages = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Языки
        </div>
        {props.data.lang.map((item, i) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
              <ProgressBar variant="info" now={item.percent} label={item.percent + '%'} />
            </div>
          )
        })}
      </div>
    </>
  )
}
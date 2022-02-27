import React from "react"

import { ProgressBar } from 'react-bootstrap'

export const Skills = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Навыки
        </div>
        {props.data.skill.map((item, i) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
              <ProgressBar variant="info" now={item.percent} label={item.percent + '%'} />
            </div>
          )
        })}
        <div>
          <p className="details_line">* - Оценка навыка, может отличаться от действительности, чисто объективно-оценочное суждение</p>
        </div>
      </div>
    </>
  )
}
import React from "react"
import { ListGroup } from 'react-bootstrap'

export const Details = (props) => {
  return (
    <>
      <div className="col-12 block">
        <div className="block_title title_info">
          Дополнительная информация
        </div>
        <div className="block_group">
          <div>
            <b>Наличие водительских прав (категории): </b>
            <span>{props.data.driver}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>Занятия в свободное время: </b>
            <span>{props.data.free}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>Личные качества: </b>
            <ListGroup>
              {props.data.qualities.map((item, i) => {
                return <ListGroup.Item key={i}>{item}</ListGroup.Item>
              })}
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  )
}
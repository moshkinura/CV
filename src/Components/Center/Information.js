import React from "react"

import { Image, Col, Row } from 'react-bootstrap'

import { FontAwesome } from '../FontAwesome'

export const Information = (props) => {
  return (
    <>
      <Col className="photo">
        <Image
          className="rounded-circle mx-auto d-block"
          src={props.data.photo}
          alt="photo"
        />
      </Col>
      <h2>{props.data.fio}</h2>
      <Row className="justify-content-center">
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-terminal" className='px-1' />
          {props.data.position}
        </Col>
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-location-dot" className='px-1' />
          {props.data.geo}
        </Col>
      </Row>
    </>
  )
}
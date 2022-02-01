import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import { Contacts } from "./Details/Contacts"
import { Pay } from "./Details/Pay"
import { Languages } from "./Details/Languages"
import { Skills } from "./Details/Skills"
import { Computer } from "./Details/Computer"
import { Software } from "./Details/Software"
import { Personal } from "./Blocks/Personal"
import { Expirience } from "./Blocks/Expirience"
import { Details } from "./Blocks/Details"
import { Information } from "./Center/Information"

export const CurriculumVitae = (props) => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <Information data={props.data.bio} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={{span:3, offset:2}}>
            <Contacts data={props.data.contacts} />
            <Pay data={props.data.pay} />
            <Languages data={props.data.languages} />
            <Skills data={props.data.skills} />
            <Computer data={props.data.computer} />
            <Software data={props.data.software} />
          </Col>

          <Col xs={12} lg={5}>
            <Row>
              <Personal data={props.data.personal} />
              <Expirience data={props.data.expirience} />
              <Details data={props.data.details} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
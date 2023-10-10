import { Container, Row, Col } from 'react-bootstrap';

import { Information } from './Center/Information';
import { Contacts } from './Details/Contacts';
import { Pay } from './Details/Pay';
import { Shedule } from './Details/Shedule';
import { Employment } from './Details/Employment';
import { Languages } from './Details/Languages';
import { Skills } from './Details/Skills';
import { Learns } from './Details/Learns';
import { Computer } from './Details/Computer';
import { Software } from './Details/Software';
import { Personal } from './Blocks/Personal';
import { Expirience } from './Blocks/Expirience';
import { Details } from './Blocks/Details';

import { Language } from './Language';

export const CurriculumVitae = () => {
  return (
    <div className="section">
      <div className="language">
        <Language />
      </div>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <Information />
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={{ span: 3, offset: 2 }}>
            <Contacts />
            <Pay />
            <Shedule />
            <Employment />
            <Languages />
            <Skills />
            <Learns />
            <Computer />
            <Software />
          </Col>

          <Col xs={12} lg={5}>
            <Row>
              <Personal />
              <Expirience />
              <Details />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

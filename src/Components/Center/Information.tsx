import { Image, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesome } from '../FontAwesome';
import Photo from '../../Image/photo.jpg';

export const Information = () => {
  const { t } = useTranslation();

  const bioFIO: string = t('bio.fio');
  const bioPosition: string = t('bio.position');
  const bioGeo: string = t('bio.geo');

  return (
    <>
      <Col className="photo">
        <Image
          className="rounded-circle mx-auto d-block"
          src={Photo}
          alt="photo"
        />
      </Col>
      <h2>{bioFIO}</h2>
      <Row className="justify-content-center">
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-terminal" className="px-1" />
          {bioPosition}
        </Col>
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-location-dot" className="px-1" />
          {bioGeo}
        </Col>
      </Row>
    </>
  );
};

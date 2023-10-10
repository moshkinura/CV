import { Image, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesome } from '../FontAwesome';
import Photo from '../../Image/photo.jpg';

import { TBio } from '../../Types';

export const Information = () => {
  const { t } = useTranslation();

  const bio: TBio = t('bio', { returnObjects: true });

  return (
    <>
      <Col className="photo">
        <Image
          className="rounded-circle mx-auto d-block"
          src={Photo}
          alt="photo"
        />
      </Col>
      <h2>{bio.fio}</h2>
      <Row className="justify-content-center">
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-terminal" className="px-1" />
          {bio.position}
        </Col>
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-location-dot" className="px-1" />
          {bio.geo}
        </Col>
      </Row>
    </>
  );
};

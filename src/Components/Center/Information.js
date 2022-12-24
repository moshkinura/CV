import React from 'react';

import { Image, Col, Row } from 'react-bootstrap';

import { FontAwesome } from '../FontAwesome';

import Photo from '../../Image/photo.jpg';

import { useTranslation } from 'react-i18next';

export const Information = () => {
  const { t } = useTranslation();

  return (
    <>
      <Col className="photo">
        <Image
          className="rounded-circle mx-auto d-block"
          src={Photo}
          alt="photo"
        />
      </Col>
      <h2>{t('bio.fio')}</h2>
      <Row className="justify-content-center">
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-terminal" className="px-1" />
          {t('bio.position')}
        </Col>
        <Col xs={12}>
          <FontAwesome icon="fa-solid fa-location-dot" className="px-1" />
          {t('bio.geo')}
        </Col>
      </Row>
    </>
  );
};

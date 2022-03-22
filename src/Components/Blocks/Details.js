import React from "react"
import { ListGroup } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

export const Details = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="col-12 block">
        <div className="block_title title_info">
          {t('details.name')}
        </div>
        <div className="block_group">
          <div>
            <b>{t('details.driver.name')}: </b>
            <span>{t('details.driver.value')}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>{t('details.free.name')}: </b>
            <span>{t('details.free.value')}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>{t('details.qualities.name')}: </b>
            <ListGroup>
              {t('details.qualities.value', { returnObjects: true }).map((item, i) => {
                return <ListGroup.Item key={i}>{item}</ListGroup.Item>
              })}
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  )
}
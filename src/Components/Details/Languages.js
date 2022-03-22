import React from "react"

import { ProgressBar } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

export const Languages = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('languages.name')}
        </div>
        {t('languages.language', { returnObjects: true }).map((item, i) => {
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
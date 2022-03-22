import React from "react"

import { ProgressBar } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('skills.name')}
        </div>
        {t('skills.skill', { returnObjects: true }).map((item, i) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
              <ProgressBar variant="info" now={item.percent} label={item.percent + '%'} />
            </div>
          )
        })}
        <div>
          <p className="details_line">{t('skills.information')}</p>
        </div>
      </div>
    </>
  )
}
import React from "react"

import { useTranslation } from 'react-i18next'

export const Shedule = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('shedules.name')}
        </div>
        {t('shedules.shedule', { returnObjects: true }).map((item, i) => {
          return <p className="details_line_small" key={i}>{item}</p>
        })}
      </div>
    </>
  )
}
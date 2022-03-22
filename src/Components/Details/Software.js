import React from "react"

import { useTranslation } from 'react-i18next'

export const Software = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('software.name')}
        </div>
        {t('software.soft', { returnObjects: true }).map((item, i) => {
          return <p className="details_line" key={i}>{item}</p>
        })}
      </div>
    </>
  )
}
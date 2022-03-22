import React from "react"

import { useTranslation } from 'react-i18next'

export const Employment = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('employments.name')}
        </div>
        {t('employments.employment', { returnObjects: true }).map((item, i) => {
          return <p className="details_line" key={i}>{item}</p>
        })}

        <p className="details_line_small bg-warning text-black">{t('employments.information')}</p>
      </div>
    </>
  )
}
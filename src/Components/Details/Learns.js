import React from "react"

import { useTranslation } from 'react-i18next'

export const Learns = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('learns.name')}
        </div>
        {t('learns.learn', { returnObjects: true }).map((item, i) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
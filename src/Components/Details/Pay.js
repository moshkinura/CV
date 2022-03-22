import React from "react"

import { useTranslation } from 'react-i18next'

export const Pay = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('pay.name')}
        </div>
        <p className="details_line">{t('pay.from')} {t('pay.rub')} / {t('pay.usd')} / {t('pay.eur')}</p>
      </div>
    </>
  )
}
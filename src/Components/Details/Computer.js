import React from "react"

import { FontAwesome } from "../FontAwesome"

import { useTranslation } from 'react-i18next'

export const Computer = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('computer.name')}
        </div>
        <p className="details_line">
          <FontAwesome icon="fa-solid fa-microchip" /> {t('computer.cpu')}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-memory" /> {t('computer.ram')}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-desktop" /> {t('computer.gpu')}
        </p>
      </div>
    </>
  )
}
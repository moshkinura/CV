import React from "react"

import { useTranslation } from 'react-i18next'

export const Contacts = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          {t('contacts.name')}
        </div>
        <p className="details_line">
          <a href={'tel:' + t('contacts.tel')}>{t('contacts.tel')}</a>
        </p>
        <p className="details_line">
          <a href={'mailto:' + t('contacts.email')}>{t('contacts.email')}</a>
        </p>
        <p className="details_line">
          VK:
          <a href={'https://vk.com/' + t('contacts.vk')} target='_blank' rel="noopener noreferrer">
            {'@' + t('contacts.vk')}
          </a>
        </p>
        <p className="details_line">
          Telegram:
          <a href={'https://t.me/' + t('contacts.tg')} target='_blank' rel="noopener noreferrer">
            {'@' + t('contacts.tg')}
          </a>
        </p>
      </div>
    </>
  )
}
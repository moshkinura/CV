import React from "react"

import { useTranslation } from 'react-i18next'

export const Personal = () => {
  const { t } = useTranslation()

  const formatDate = (date) => {
    let spl = date.split('/')
    return spl[2] + '.' + spl[1] + '.' + spl[0]
  }

  const age = (date) => {
    const today = new Date()
    const birthDate = new Date(date)
    let age = today.getFullYear() - birthDate.getFullYear()
    let m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const ageText = (age) => {
    const text_forms = ['год', 'года', 'лет']
    let n = Math.abs(age) % 100
    let n1 = n % 10
    if (n > 10 && n < 20) { return text_forms[2] }
    if (n1 > 1 && n1 < 5) { return text_forms[1] }
    if (n1 === 1) { return text_forms[0] }
    return text_forms[2]
  }

  return (
    <>
      <div className="col-12 block">
        <div className="block_title title_personal">
          {t('personal.name')}
        </div>
        <div className="block_group">
          <p>
            <b>{t('personal.nationality.name')}: </b>
            <span>{t('personal.nationality.value')}</span>
          </p>
          <p>
            <b>{t('personal.education.name')}: </b>
            <span>{t('personal.education.value')}</span>
          </p>
          <p>
            <b>{t('personal.birthday.name')}: </b>
            <span>{formatDate(t('personal.birthday.value'))}г. ({age(t('personal.birthday.value'))} {ageText(age(t('personal.birthday.value')))})</span>
          </p>
          <p>
            <b>{t('personal.gender.name')}: </b>
            <span>{t('personal.gender.value')}</span>
          </p>
          <p>
            <b>{t('personal.marital.name')}: </b>
            <span>{t('personal.marital.value')}</span>
          </p>
        </div>
      </div>
    </>
  )
}
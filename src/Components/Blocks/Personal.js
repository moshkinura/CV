import React from "react"

export const Personal = (props) => {
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
          Личная информация
        </div>
        <div className="block_group">
          <p>
            <b>Гражданство:</b>
            <span>{props.data.nationality}</span>
          </p>
          <p>
            <b>Образование:</b>
            <span>{props.data.education}</span>
          </p>
          <p>
            <b>Дата рождения:</b>
            <span>{formatDate(props.data.birthday)}г. ({age(props.data.birthday)} {ageText(age(props.data.birthday))})</span>
          </p>
          <p>
            <b>Пол:</b>
            <span>{props.data.gender}</span>
          </p>
          <p>
            <b>Семейное положение:</b>
            <span>{props.data.marital}</span>
          </p>
        </div>
      </div>
    </>
  )
}
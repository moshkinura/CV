import React from "react"

export const Contacts = (props) => {
  return (
    <>
      <div className="text-center details">
        <div className="details_label">
          Контакты
        </div>
        <p className="details_line">
          <a href={'tel:' + props.data.tel}>{props.data.tel}</a>
        </p>
        <p className="details_line">
          <a href={'mailto:' + props.data.email}>{props.data.email}</a>
        </p>
        <p className="details_line">
          VK: 
          <a href={'https://vk.com/' + props.data.vk} target='_blank' rel="noopener noreferrer">
            {'@' + props.data.vk}
          </a>
        </p>
      </div>
    </>
  )
}
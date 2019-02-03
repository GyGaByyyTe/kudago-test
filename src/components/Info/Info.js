import React from 'react'
import { createPortal } from 'react-dom'

import './Info.css'

export class Info extends React.Component {
  render() {
    const { data, onClick, changeFavorite } = this.props

    return createPortal(
      <div className="Info" onClick={onClick}>
        <div className="Info-Wrapper">
          <div className="Container">
            <h3 className="Info-Title Event-Title">{data.title}</h3>
            <span
              title={data.favorites ? 'В избранном' : 'Добавить в избранное'}
              className={`Info-Favorite Event-Favorite Event-Favorite--${
                data.favorites
              }`}
              onClick={e => {
                console.log(e)
                changeFavorite(e)
              }}
            />
            <span className="Info-Price Event-Price">
              Цена билета: {data.price}
            </span>
            <p className="Info-Description Event-Description">
              Описание: {data.description}
            </p>
          </div>
        </div>
      </div>,
      document.querySelector('#info')
    )
  }
}

import * as React from 'react'

import './Event.css'

export class Event extends React.Component {
  render() {
    const { data, className, onClick, changeFavorites } = this.props
    return (
      <div className={'Event ' + className} onClick={onClick}>
        <h3 className="Event-Title">{data.title}</h3>
        <span
          title={data.favorites ? 'В избранном' : 'Добавить в избранное'}
          className={`Event-Favorite Event-Favorite--${data.favorites}`}
          onClick={e => {
            e.stopPropagation()
            changeFavorites(e)
          }}
        />
        <span className="Event-Price">Цена билета: {data.price}</span>
        <p className="Event-Description">Описание: {data.description}</p>
      </div>
    )
  }
}

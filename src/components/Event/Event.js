import * as React from 'react'

export const Event = props => {
  const { data, className } = props
  return (
    <div className={'Event ' + className}>
      <h3 className="Event-Title">{data.title}</h3>
      <span className={`Event-Favorite Event-Favorite--${data.favorites}`} />
      <span className="Event-Price">{data.price}</span>
      <p className="Event-Description">{data.description}</p>
    </div>
  )
}

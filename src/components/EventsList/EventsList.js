import * as React from 'react'
import { Event } from '../Event/Event'

export class EventsList extends React.Component {
  filter = arr => {
    const { filterType } = this.props
    let _arr = arr.slice()
    if (filterType !== 'NONE') {
      return _arr.filter(item => item.type === filterType)
    } else {
      return _arr
    }
  }
  sort = arr => {
    const { sortPrice } = this.props
    let _arr = arr.slice()
    switch (sortPrice) {
      case 'UP':
        return _arr.sort((a, b) => {
          return b.price - a.price
        })
      case 'DOWN':
        return _arr.sort((a, b) => {
          return a.price - b.price
        })

      default:
        return _arr
    }
  }
  renderList = () => {
    const { data } = this.props
    let template = ''

    if (data.length) {
      template = this.sort(this.filter(data)).map(function(item, index) {
        return <Event className="EventList-Item" key={index} data={item} />
      })
    } else {
      template = <p>К сожалению событий нет</p>
    }

    return template
  }

  render() {
    return <div className="EventList">{this.renderList()}</div>
  }
}

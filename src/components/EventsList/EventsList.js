import * as React from 'react'
import { Event } from '../Event/Event'
import { Info } from '../Info/Info'

export class EventsList extends React.Component {
  state = { infoCard: false, index: null }
  toggleInfo = index => {
    const { infoCard } = this.state
    this.setState(state => ({
      infoCard: !infoCard,
      index: index,
    }))
  }
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
    const { data, changeFavorite } = this.props
    let template = ''
    let self = this
    if (data.length) {
      template = this.sort(this.filter(data)).map(function(item, index) {
        return (
          <Event
            className="EventList-Item"
            key={index}
            data={item}
            onClick={() => {
              self.toggleInfo(index)
            }}
            changeFavorite={e => {
              if (changeFavorite) {
                changeFavorite(index)
              }
            }}
          />
        )
      })
    } else {
      template = <p>К сожалению событий нет</p>
    }

    return template
  }

  render() {
    const { data, changeFavorite } = this.props
    const { index } = this.state
    return (
      <div className="EventList">
        {this.renderList()}
        {this.state.infoCard ? (
          <Info
            data={data[index]}
            onClick={() => {
              this.toggleInfo(0)
            }}
            changeFavorite={e => {
              if (changeFavorite) {
                changeFavorite(index)
              }
            }}
          />
        ) : null}
      </div>
    )
  }
}

import * as React from 'react'
import { Event } from '../Event/Event'
import { Info } from '../Info/Info'

export class EventsList extends React.Component {
  state = { infoCard: false, id: null }
  toggleInfo = id => {
    const { infoCard } = this.state
    this.setState(state => ({
      infoCard: !infoCard,
      id: id,
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
    const { data, changeFavorites } = this.props
    let template = ''
    let self = this
    if (data.length) {
      template = this.sort(this.filter(data)).map(function(item) {
        return (
          <Event
            className="EventList-Item"
            key={item.id}
            data={item}
            onClick={() => {
              self.toggleInfo(item.id)
            }}
            changeFavorites={e => {
              if (changeFavorites) {
                changeFavorites(item.id)
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
    const { data, changeFavorites } = this.props
    const { id } = this.state
    return (
      <div className="EventList">
        {this.renderList()}
        {this.state.infoCard ? (
          <Info
            data={data[id]}
            onClick={() => {
              this.toggleInfo(0)
            }}
            changeFavorites={e => {
              if (changeFavorites) {
                changeFavorites(id)
              }
            }}
          />
        ) : null}
      </div>
    )
  }
}

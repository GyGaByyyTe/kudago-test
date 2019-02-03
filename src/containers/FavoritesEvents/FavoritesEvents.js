import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EventsList } from '../../components/EventsList/EventsList'

class FavoritesEvents extends Component {
  render() {
    const { events, filterType, sortPrice } = this.props
    let favorites = events.filter(item => item.favorites)
    return (
      <div className="FavoritesEvents">
        <div className="Container">
          <EventsList
            data={favorites}
            filterType={filterType}
            sortPrice={sortPrice}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  events: store.events,
  filterType: store.filterType,
  sortPrice: store.sortPrice,
})

export default connect(mapStateToProps)(FavoritesEvents)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EventsList } from '../../components/EventsList/EventsList'
import { changeFavorites } from '../../actions/eventsActions'
class FavoritesEvents extends Component {
  render() {
    const { events, filterType, sortPrice, changeFavorites } = this.props
    let favorites = events.filter(item => item.favorites)
    return (
      <div className="FavoritesEvents">
        <div className="Container">
          <EventsList
            data={favorites}
            filterType={filterType}
            sortPrice={sortPrice}
            changeFavorites={changeFavorites}
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
const mapDispatchToProps = dispatch => ({
  changeFavorites: index => dispatch(changeFavorites(index)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesEvents)

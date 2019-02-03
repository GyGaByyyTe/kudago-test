import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EventsList } from '../../components/EventsList/EventsList'
import { getEvents, changeFavorites } from '../../actions/eventsActions'

class MainEvents extends Component {
  componentDidMount() {
    const { getEvents } = this.props
    getEvents()
  }
  render() {
    const {
      events,
      isLoading,
      filterType,
      sortPrice,
      changeFavorites,
    } = this.props
    return (
      <div className="MainEvents">
        <div className="Container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <EventsList
              data={events}
              filterType={filterType}
              sortPrice={sortPrice}
              changeFavorite={changeFavorites}
            />
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  events: store.events,
  isLoading: store.isLoading,
  filterType: store.filterType,
  sortPrice: store.sortPrice,
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  changeFavorites: index => dispatch(changeFavorites(index)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainEvents)

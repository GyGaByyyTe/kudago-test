import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EventsList } from '../../components/EventsList/EventsList'
import { getEvents, changeFavorites } from '../../actions/eventsActions'

import './MainEvents.css'

class MainEvents extends Component {
  componentDidMount() {
    const { getEvents } = this.props
    if (!window.localStorage.getItem('app_state')) getEvents()
  }
  render() {
    const {
      events,
      isLoading,
      filterType,
      sortPrice,
      changeFavorites,
      getEvents,
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
              changeFavorites={changeFavorites}
            />
          )}
        </div>
        <button className="MainEvents-Refresh" onClick={getEvents}>
          Обновить данные
        </button>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  events: store.list.events,
  isLoading: store.list.isLoading,
  filterType: store.list.filterType,
  sortPrice: store.list.sortPrice,
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  changeFavorites: index => dispatch(changeFavorites(index)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainEvents)

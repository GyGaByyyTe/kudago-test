import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortPrice, filterByType } from '../../actions/eventsActions'

class Filters extends Component {
  render() {
    const { sortPriceAction, filterByTypeAction } = this.props
    return (
      <div className="Filters">
        <span className="Filters-Label">Сортировка по цене:</span>
        <select
          id="Filters-Price"
          onChange={e => {
            sortPriceAction(e.target.value)
          }}
        >
          <option value="NONE">Без сортировки</option>
          <option value="UP">&uarr;</option>
          <option value="DOWN">&darr;</option>
        </select>

        <span className="Filters-Label">Фильтровать по типу:</span>
        <select
          id="Filters-Price"
          onChange={e => {
            filterByTypeAction(e.target.value)
          }}
        >
          <option value="NONE">Все типы</option>
          <option value="concert">Концерт</option>
          <option value="exhibition">Выставка</option>
        </select>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  filterType: store.filterType,
  sortPrice: store.sortPrice,
})

const mapDispatchToProps = dispatch => ({
  sortPriceAction: type => dispatch(sortPrice(type)),
  filterByTypeAction: type => dispatch(filterByType(type)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

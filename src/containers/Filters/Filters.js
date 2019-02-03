import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortPrice, filterByType } from '../../actions/eventsActions'

class Filters extends Component {
  render() {
    const { sortPriceAction, filterByTypeAction } = this.props
    return (
      <div className="Filters Container">
        <div className="Filters-Row">
          <span className="Filters-Label">Сортировка по цене:</span>
          <select
            className="Filters-Select"
            onChange={e => {
              sortPriceAction(e.target.value)
            }}
          >
            <option value="NONE">Без сортировки</option>
            <option value="UP">&darr; По убыванию </option>
            <option value="DOWN">&uarr; По возрастанию</option>
          </select>
        </div>
        <div className="Filters-Row">
          <span className="Filters-Label">Фильтровать по типу:</span>
          <select
            className="Filters-Select"
            onChange={e => {
              filterByTypeAction(e.target.value)
            }}
          >
            <option value="NONE">Все типы</option>
            <option value="concert">Концерт</option>
            <option value="exhibition">Выставка</option>
          </select>
        </div>
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

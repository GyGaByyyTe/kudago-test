import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MainEvents from '../../containers/MainEvents/MainEvents'
import FavoritesEvents from '../../containers/FavoritesEvents/FavoritesEvents'
import Filters from '../../containers/Filters/Filters'
import { changeTab } from '../../actions/pageActions'

import './App.css'

class App extends Component {
  changeTab = newtab => {
    const { changeTabAction } = this.props
    changeTabAction(newtab)
  }
  render() {
    const { tab } = this.props
    return (
      <BrowserRouter basename="/kudago-test">
        <React.Fragment>
          <div className="App">
            <div className="Tabs">
              <Link
                to="/"
                className={
                  tab === 'MAIN'
                    ? 'Tabs-Button Tabs-Button--selected'
                    : 'Tabs-Button'
                }
                onClick={() => this.changeTab('MAIN')}
              >
                Список
              </Link>
              <Link
                to="/favorites"
                className={
                  tab === 'FAVORITES'
                    ? 'Tabs-Button Tabs-Button--selected'
                    : 'Tabs-Button'
                }
                onClick={() => this.changeTab('FAVORITES')}
              >
                Избранное
              </Link>
            </div>
            <Filters />
            <Route exact path="/" component={MainEvents} />
            <Route exact path="/favorites" component={FavoritesEvents} />
          </div>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = store => ({
  tab: store.page.tab,
})

const mapDispatchToProps = dispatch => ({
  changeTabAction: newtab => dispatch(changeTab(newtab)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MainEvents from '../../containers/MainEvents/MainEvents'
import FavoritesEvents from '../../containers/FavoritesEvents/FavoritesEvents'
import Filters from '../../containers/Filters/Filters'

import './App.css'

export class App extends Component {
  state = { tab: 'MAIN' }
  changeTab = newtab => {
    this.setState(state => ({
      tab: newtab,
    }))
  }
  render() {
    const { tab } = this.state
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

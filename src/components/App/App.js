import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MainEvents from '../../containers/MainEvents/MainEvents'
import FavoritesEvents from '../../containers/FavoritesEvents/FavoritesEvents'
import Filters from '../../containers/Filters/Filters'

import './App.css'

export class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/kudago-test">
        <React.Fragment>
          <div className="App">
            <div className="Tabs">
              <Link to="/" className="Tabs-Button">
                Список
              </Link>
              <Link to="/favorites" className="Tabs-Button">
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

import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { eventsReducer } from './events'

export const rootReducer = combineReducers({
  page: pageReducer,
  list: eventsReducer,
})

import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  SORT_PRICE,
  FILTER_TYPE,
} from '../actions/eventsActions'

export const initalState = {
  events: [],
  isLoading: false,
  filterType: 'NONE',
  sortPrice: 'NONE',
}

export function rootReducer(state = initalState, action) {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state, isLoading: action.payload }

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.map(item => ({ ...item, favorites: false })),
        isLoading: false,
      }

    case SORT_PRICE:
      return { ...state, sortPrice: action.payload }

    case FILTER_TYPE:
      return { ...state, filterType: action.payload }

    default:
      return state
  }
}

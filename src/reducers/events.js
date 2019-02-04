import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  SORT_PRICE,
  FILTER_TYPE,
  CHANGE_FAVORITE,
} from '../actions/eventsActions'

export const initalState = {
  events: [],
  isLoading: false,
  filterType: 'NONE',
  sortPrice: 'NONE',
}

export function eventsReducer(state = initalState, action) {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state, isLoading: action.payload }

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.map((item, index) => ({
          ...item,
          favorites: false,
          id: index,
        })),
        isLoading: false,
      }

    case SORT_PRICE:
      return { ...state, sortPrice: action.payload }

    case FILTER_TYPE:
      return { ...state, filterType: action.payload }

    case CHANGE_FAVORITE:
      return {
        ...state,
        events: state.events.map((item, index) => {
          return index === action.payload
            ? { ...item, favorites: !item.favorites }
            : { ...item, favorites: item.favorites }
        }),
      }

    default:
      return state
  }
}

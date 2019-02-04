import { CHANGE_PAGE } from '../actions/pageActions'

export const initalState = {
  tab: 'MAIN',
}

export function pageReducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, tab: action.payload }

    default:
      return state
  }
}

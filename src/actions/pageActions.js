export const CHANGE_PAGE = 'ADD_FAVORITE'

export function changeTab(tab) {
  return {
    type: CHANGE_PAGE,
    payload: tab,
  }
}

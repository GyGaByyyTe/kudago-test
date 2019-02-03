export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const SORT_PRICE = 'SORT_PRICE'
export const FILTER_TYPE = 'FILTER_TYPE'
export const CHANGE_FAVORITE = 'ADD_FAVORITE'
export function getEvents() {
  return dispatch => {
    dispatch({
      type: GET_EVENTS_REQUEST,
      payload: true,
    })

    //тут мог бы быть ваш fetch()
    setTimeout(() => {
      dispatch({
        type: GET_EVENTS_SUCCESS,
        payload: [
          {
            title: 'Концерт Depeche Mode',
            description: 'Описание концерта здесь',
            price: 300,
            type: 'concert',
          },
          {
            title: 'Выставка Модильяни',
            description: 'Описание выставки здесь',
            price: 200,
            type: 'exhibition',
          },
          {
            title: 'Концерт 1',
            description: 'Описание концерта здесь',
            price: 2500,
            type: 'concert',
          },
          {
            title: 'Выставка 1',
            description: 'Описание выставки здесь',
            price: 600,
            type: 'exhibition',
          },
          {
            title: 'Концерт 2',
            description: 'Описание концерта здесь',
            price: 100,
            type: 'concert',
          },
          {
            title: 'Выставка 2',
            description: 'Описание выставки здесь',
            price: 1200,
            type: 'exhibition',
          },
        ],
      })
    }, 1000)
  }
}

export function sortPrice(type) {
  return {
    type: SORT_PRICE,
    payload: type,
  }
}
export function filterByType(type) {
  return {
    type: FILTER_TYPE,
    payload: type,
  }
}
export function changeFavorites(index) {
  return {
    type: CHANGE_FAVORITE,
    payload: index,
  }
}

import actionTypes from './actionTypes'
import reducers from './reducers'

export const defaultState = {
  films: undefined
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FILMS:
      return reducers.loadFilms(state, action)
    default:
      return state
  }
}

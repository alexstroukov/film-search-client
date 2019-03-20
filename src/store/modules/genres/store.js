import actionTypes from './actionTypes'
import reducers from './reducers'

export const defaultState = {
  genres: undefined
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_GENRES:
      return reducers.loadGenres(state, action)
    default:
      return state
  }
}

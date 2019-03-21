import actionTypes from './actionTypes'
import reducers from './reducers'

export const defaultState = {
  films: undefined,
  genreIds: [],
  rating: 17
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FILMS:
      return reducers.loadFilms(state, action)
    case actionTypes.APPLY_GENRE_FILTER:
      return reducers.applyGenreFilter(state, action)
    case actionTypes.CLEAR_GENRE_FILTER:
      return reducers.clearGenreFilter(state, action)
    case actionTypes.APPLY_RATING_FILTER:
      return reducers.applyRatingFilter(state, action)
    default:
      return state
  }
}

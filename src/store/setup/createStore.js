import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { loaderMiddleware } from '../loader'
import { store as films, middleware as filmsMiddleware } from '../modules/films'
import { store as genres, middleware as genresMiddleware } from '../modules/genres'

const reducers = {
  films,
  genres
}
const middleware = [
  // todo: add middleware here
]
export default () => {
  return createStore(combineReducers(reducers), undefined, applyMiddleware(
      loaderMiddleware,
      thunkMiddleware,
      ...middleware
    )
  )
}

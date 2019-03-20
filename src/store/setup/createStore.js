import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loaderMiddleware from './loaderMiddleware'
import { store as films, middleware as filmsMiddleware } from '../modules/films'

const reducers = {
  films
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

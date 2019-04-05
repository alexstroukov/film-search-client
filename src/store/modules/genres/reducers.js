import { createLoaderReducer } from 'slex-redux-loader'

class GenresReducers {
  loadGenres = createLoaderReducer(
    (state, action) => {
      return {
        ...state,
        genres: action.result
      }
    }
  )
}

export default new GenresReducers()

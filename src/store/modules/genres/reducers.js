import { createLoaderReducer } from '../../loader'

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

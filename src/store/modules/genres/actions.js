import genresService from '../../../services/genresService'
import actionTypes from './actionTypes'

class GenresActions {
  loadGenres = () => {
    return {
      type: actionTypes.LOAD_GENRES,
      load: (dispatch, getState) => {
        return genresService.fetchGenres()
      }
    }
  }
}

export default new GenresActions()

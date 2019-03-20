import filmsService from '../../../services/filmsService'
import actionTypes from './actionTypes'

class FilmsActions {
  loadFilms = () => {
    return {
      type: actionTypes.LOAD_FILMS,
      load: (dispatch, getState) => {
        return filmsService.fetchFilms()
      }
    }
  }
}

export default new FilmsActions()

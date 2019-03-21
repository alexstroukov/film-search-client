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
  applyGenresFilter = (genreIds) => {
    return {
      type: actionTypes.APPLY_GENRES_FILTER,
      genreIds
    }
  }
  applyRatingFilter = (rating) => {
    return {
      type: actionTypes.APPLY_RATING_FILTER,
      rating
    }
  }
}

export default new FilmsActions()

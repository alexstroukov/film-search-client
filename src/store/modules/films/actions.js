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
  applyGenreFilter = (genreId) => {
    return {
      type: actionTypes.APPLY_GENRE_FILTER,
      genreId
    }
  }
  clearGenreFilter = (genreId) => {
    return {
      type: actionTypes.CLEAR_GENRE_FILTER,
      genreId
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

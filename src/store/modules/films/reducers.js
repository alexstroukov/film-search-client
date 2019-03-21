import _ from 'lodash'
import { createLoaderReducer } from '../../loader'

class FilmsReducers {
  loadFilms = createLoaderReducer(
    (state, action) => {
      return {
        ...state,
        films: action.result
      }
    }
  )
  applyGenresFilter = (state, action) => {
    return {
      ...state,
      films: this._applyFilters({ films: state.films, genreIds: action.genreIds, rating: state.rating }),
      genreIds: action.genreIds
    }
  }
  applyRatingFilter = (state, action) => {
    return {
      ...state,
      films: this._applyFilters({ films: state.films, genreIds: state.genreIds, rating: action.rating }),
      rating: action.rating
    }
  }
  _applyFilters = ({ films, genreIds, rating }) => {
    return _.chain(films)
      .filter(film => {
        const filmHasTheRequiredRating = rating
          ? film.vote_average >= rating
          : true
        const filmHasTheRequiredGenres = rating
          ? _.difference(genreIds, film.genre_ids).length === 0 
          : true
        return filmHasTheRequiredRating && filmHasTheRequiredGenres
      })
      .value()
  }
}

export default new FilmsReducers()

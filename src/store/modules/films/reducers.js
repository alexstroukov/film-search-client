import _ from 'lodash'
import { createLoaderReducer } from '../../loader'

class FilmsReducers {
  loadFilms = createLoaderReducer(
    (state, action) => {
      return {
        ...state,
        films: this._processFilms({ films: action.result, genreIds: state.genreIds, rating: state.rating })
      }
    }
  )
  applyGenreFilter = (state, action) => {
    const nextGenreIds = [
      ...state.genreIds,
      action.genreId
    ]
    return {
      ...state,
      films: this._processFilms({ films: state.films, genreIds: nextGenreIds, rating: state.rating }),
      genreIds: nextGenreIds
    }
  }
  clearGenreFilter = (state, action) => {
    const nextGenreIds = _.chain(state.genreIds)
      .reject(genreId => genreId === action.genreId)
      .value()
    return {
      ...state,
      films: this._processFilms({ films: state.films, genreIds: nextGenreIds, rating: state.rating }),
      genreIds: nextGenreIds
    }
  }
  applyRatingFilter = (state, action) => {
    return {
      ...state,
      films: this._processFilms({ films: state.films, genreIds: state.genreIds, rating: action.rating }),
      rating: action.rating
    }
  }
  _processFilms = ({ films, genreIds, rating }) => {
    const processedFilms = _.chain(films)
      .map(film => {
        const ratingIsTooLow = rating
          ? film.vote_average < rating
          : true
        const doesntMatchFilteredGenres = genreIds && genreIds.length > 0
          ? _.difference(genreIds, film.genre_ids).length > 0
          : false
        return {
          ...film,
          disabled: ratingIsTooLow || doesntMatchFilteredGenres
        }
      })
      .orderBy('popularity', 'desc')
      .value()
    return processedFilms
  }
}

export default new FilmsReducers()

import _ from 'lodash'
import { createSelector } from 'reselect'
import { loaderSelectors } from '../../loader'

class FilmsSelectors {
  getRating = (state) => {
    return state.films.rating
  }
  getGenreIds = (state) => {
    return state.films.genreIds
  }
  getAllFilms = (state) => {
    return state.films.films
  }
  getFilms = createSelector([
    this.getAllFilms
  ], films => {
    return _.chain(films)
      .reject(film => film.disabled)
      .value()
  })
  hasFilms = createSelector([
    this.getFilms
  ], films => {
    return films.length > 0
  })
  getValidGenres = createSelector([
    this.getAllFilms
  ], films => {
    const validGenres = _.chain(films)
      .map(film => film.genre_ids)
      .flatten()
      .reduce((memo, next) => ({ ...memo, [next]: true }), {})
      .value()
    return validGenres
  })
  getIsInitial = loaderSelectors.createGetIsInitial('films')
  getIsLoading = loaderSelectors.createGetIsLoading('films')
}

export default new FilmsSelectors()

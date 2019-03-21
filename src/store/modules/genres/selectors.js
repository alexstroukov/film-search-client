import _ from 'lodash'
import { createSelector } from 'reselect'
import { loaderSelectors } from '../../loader'

class GenresSelectors {
  getGenres = (state) => {
    return state.genres.genres
  }
  getGenresDictionary = createSelector([
    this.getGenres
  ], genres => {
    return _.chain(genres)
      .reduce((memo, next) => ({ ...memo, [next.id]: next }), {})
      .value()
  })
  getGenresByIds = _.memoize((ids) => createSelector([
    this.getGenresDictionary
  ], genresDictionary => {
    return _.chain(ids)
      .map(id => genresDictionary[id])
      .reject(_.isUndefined)
      .value()
  }))
  getGenreNamesByIds = _.memoize((ids) => createSelector([
    this.getGenresByIds(ids)
  ], genres => {
    return _.chain(genres)
      .map(genre => genre.name)
      .value()
  }))
  getGenreById = (id) => createSelector([
    this.getGenresDictionary
  ], genresDictionary => {
    return genresDictionary[id]
  })
  getIsInitial = loaderSelectors.createGetIsInitial('genres')
  getIsLoading = loaderSelectors.createGetIsLoading('genres')
}

export default new GenresSelectors()

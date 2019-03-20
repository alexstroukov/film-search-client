import _ from 'lodash'
import { createSelector } from 'reselect'

class GenresSelectors {
  getGenres = (state) => {
    return state.genres.genres
  }
  getGenresByIds = (ids) => createSelector([
    this.getGenres
  ], genres => {
    return _.chain(genres)
      .filter(genre => ids.includes(genre.id))
      .value()
  })
  getGenreById = (id) => createSelector([
    this.getGenres
  ], genres => {
    return _.chain(genres)
      .filter(genre => genre.id === id)
      .value()
  })
}

export default new GenresSelectors()

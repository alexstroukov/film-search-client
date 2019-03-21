import _ from 'lodash'
import { createSelector } from 'reselect'
import { selectors as genresSelectors } from '../../../store/modules/genres'
import { selectors as filmsSelectors } from '../../../store/modules/films'

class GenresFilterSelectors {
  getFilmsGenreIdsDictionary = createSelector([
    filmsSelectors.getFilms
  ], films => {
    return _.chain(films)
      .map(film => film.genre_ids)
      .flatten()
      .reduce((memo, next) => ({ ...memo, [next]: true }), {})
      .value()
  })
  getGenres = createSelector([
    genresSelectors.getGenres,
    this.getFilmsGenreIdsDictionary
  ], (genres, filmsGenreIdsDictionary) => {
    return genres
      ? _.chain(genres)
        .filter(genre => filmsGenreIdsDictionary[genre.id])
        .value()
      : genres
  })
}

export default new GenresFilterSelectors()

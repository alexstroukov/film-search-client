import _ from 'lodash'
import { createSelector } from 'reselect'
import { selectors as genresSelectors } from '../../../../store/modules/genres'
import { selectors as filmsSelectors } from '../../../../store/modules/films'

class GenresFilterSelectors {
  // get only genres which have a at least one film
  getGenres = createSelector([
    genresSelectors.getGenres,
    filmsSelectors.getValidGenres
  ], (genres, validGenres) => {
    return genres
      ? _.chain(genres)
        .filter(genre => validGenres[genre.id])
        .value()
      : genres
  })
  getFilmsGenreIdsDictionary = createSelector([
    filmsSelectors.getFilms
  ], films => {
    return _.chain(films)
      .map(film => film.genre_ids)
      .flatten()
      .reduce((memo, next) => ({ ...memo, [next]: true }), {})
      .value()
  })
  // disable genres which dont match a film in the filtered list
  getGenreOptions = createSelector([
    this.getGenres,
    this.getFilmsGenreIdsDictionary
  ], (genres, filmsGenreIdsDictionary) => {
    return genres
      ? _.chain(genres)
        .map(genre => ({
          ...genre,
          disabled: !filmsGenreIdsDictionary[genre.id]
        }))
        .value()
      : genres
  })
}

export default new GenresFilterSelectors()

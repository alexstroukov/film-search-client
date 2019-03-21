import { compose, withPropsOnChange } from 'recompose'
import { connect } from 'react-redux'
import { selectors as genresSelectors } from '../../../store/modules/genres'
import FilmTile from './FilmTile'

const mapStateToProps = (state, ownProps) => {
  const { film } = ownProps
  const { genre_ids: genreIds = [] } = film || {}
  const genres = genresSelectors.getGenreNamesByIds(genreIds)(state)
  return {
    genres
  }
}
export default compose(
  connect(mapStateToProps),
  withPropsOnChange(['film', 'genres'], ({ film, genres }) => {
    const nextFilm = film
      ? {
        ...film,
        genres
      }
      : film
    return {
      film: nextFilm
    }
  })
)(FilmTile)

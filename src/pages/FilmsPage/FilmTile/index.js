import { connect } from 'react-redux'
import { selectors as genresSelectors } from '../../../store/modules/genres'
import FilmTile from './FilmTile'

const mapStateToProps = (state, ownProps) => {
  const { film } = ownProps
  const { genre_ids: genreIds } = film || {}
  const genres = genresSelectors.getGenresByIds(genreIds)(state)
  return {
    genres
  }
}
export default connect(mapStateToProps)(FilmTile)

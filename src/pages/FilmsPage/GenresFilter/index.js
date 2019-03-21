import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { actions as filmsActions } from '../../../store/modules/films'
import genresFilterSelectors from './selectors'
import GenresFilter from './GenresFilter'

const mapStateToProps = (state) => {
  const genres = genresFilterSelectors.getGenres(state)
  return {
    genres
  }
}
export default compose(
  connect(mapStateToProps),
  withHandlers({
    applyGenresFilter: ({ dispatch }) => (genreIds) => {
      dispatch(filmsActions.applyGenresFilter(genreIds))
    }
  })
)(GenresFilter)

import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { actions as filmsActions, selectors as filmsSelectors } from '../../../../../store/modules/films'
import GenreOption from './GenreOption'

const mapStateToProps = (state, ownProps) => {
  const selected = filmsSelectors.getGenreIdIsSelected(ownProps.genre.id)(state)
  return {
    selected
  }
}
export default compose(
  connect(mapStateToProps),
  withHandlers({
    applyGenreFilter: ({ dispatch }) => (genreId) => {
      dispatch(filmsActions.applyGenreFilter(genreId))
    },
    clearGenreFilter: ({ dispatch }) => (genreId) => {
      dispatch(filmsActions.clearGenreFilter(genreId))
    },
  })
)(GenreOption)

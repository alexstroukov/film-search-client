import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { actions as filmsActions } from '../../../../store/modules/films'
import GenreOption from './GenreOption'

export default compose(
  connect(),
  withHandlers({
    applyGenreFilter: ({ dispatch }) => (genreId) => {
      dispatch(filmsActions.applyGenreFilter(genreId))
    },
    clearGenreFilter: ({ dispatch }) => (genreId) => {
      dispatch(filmsActions.clearGenreFilter(genreId))
    },
  })
)(GenreOption)

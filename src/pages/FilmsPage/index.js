import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { actions as filmsActions } from '../../store/modules/films'
import { actions as genresActions } from '../../store/modules/genres'
import FilmsPage from './FilmsPage'

export default compose(
  connect(),
  withHandlers({
    loadFilms: ({ dispatch }) => () => {
      return dispatch(filmsActions.loadFilms())
    },
    loadGenres: ({ dispatch }) => () => {
      return dispatch(genresActions.loadGenres())
    }
  })
)(FilmsPage)

import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { actions as filmsActions, selectors as filmsSelectors } from '../../store/modules/films'
import { actions as genresActions, selectors as genresSelectors } from '../../store/modules/genres'
import FilmsPage from './FilmsPage'

const mapStateToProps = (state) => {
  const filmsIsLoading = filmsSelectors.getIsLoading(state)
  const hasFilms = filmsSelectors.hasFilms(state)
  const genresIsLoading = genresSelectors.getIsLoading(state)
  const filmsIsInitial = filmsSelectors.getIsInitial(state)
  const genresIsInitial = genresSelectors.getIsInitial(state)
  const isInitial = filmsIsInitial && genresIsInitial
  const isLoading = filmsIsLoading || genresIsLoading
  const noResults = !isInitial && !isLoading && !hasFilms
  return {
    noResults,
    isLoading
  }
}
export default compose(
  connect(mapStateToProps),
  withHandlers({
    loadFilms: ({ dispatch }) => () => {
      return dispatch(filmsActions.loadFilms())
    },
    loadGenres: ({ dispatch }) => () => {
      return dispatch(genresActions.loadGenres())
    }
  })
)(FilmsPage)

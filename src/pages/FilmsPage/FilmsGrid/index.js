import { connect } from 'react-redux'
import { selectors as filmsSelectors } from '../../../store/modules/films'
import FilmsGrid from './FilmsGrid'

const mapStateToProps = (state) => {
  const films = filmsSelectors.getFilms(state)
  return {
    films
  }
}
export default connect(mapStateToProps)(FilmsGrid)

import { connect } from 'react-redux'
import genresFilterSelectors from './selectors'
import GenresFilter from './GenresFilter'

const mapStateToProps = (state) => {
  const genres = genresFilterSelectors.getGenreOptions(state)
  return {
    genres
  }
}
export default connect(mapStateToProps)(GenresFilter)

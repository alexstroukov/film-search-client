import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { actions as filmsActions, selectors as filmsSelectors } from '../../../../store/modules/films'
import RatingFilter from './RatingFilter'

const mapStateToProps = (state) => {
  const rating = filmsSelectors.getRating(state)
  return {
    rating
  }
}
export default compose(
  connect(mapStateToProps),
  withHandlers({
    applyRatingFilter: ({ dispatch }) => (rating) => {
      dispatch(filmsActions.applyRatingFilter(rating))
    }
  })
)(RatingFilter)

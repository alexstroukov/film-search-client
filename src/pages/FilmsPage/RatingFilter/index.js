import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { actions as filmsActions } from '../../../store/modules/films'
import RatingFilter from './RatingFilter'

export default compose(
  connect(),
  withHandlers({
    applyRatingFilter: ({ dispatch }) => (rating) => {
      dispatch(filmsActions.applyRatingFilter(rating))
    }
  })
)(RatingFilter)

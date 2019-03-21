
import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/lab/Slider'
import _ from 'lodash'
import styles from './styles'

class RatingFilter extends PureComponent {
  state = {
    rating: this.props.rating
  }
  handleChange = (e, rating) => {
    const { applyRatingFilter } = this.props
    this.setState({ rating }, () => {
      applyRatingFilter(this.state.rating)
    })
  }
  render () {
    const { applyRatingFilter } = this.props
    // classes={{ container: classes.slider }}
    return (
      <div>
        rating filter {this.state.rating}
        <Slider
          style={{
            padding: '22px 0px',
          }}
          value={this.state.rating}
          min={0}
          max={10}
          step={0.5}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default withStyles(styles)(RatingFilter)

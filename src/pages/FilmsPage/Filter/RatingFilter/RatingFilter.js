
import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/lab/Slider'
import Typography from '@material-ui/core/Typography'
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
    const { classes } = this.props
    return (
      <div
        className={classes.container}
      >
        <Typography
          component='h4'
          variant='h4'
          gutterBottom
        >
          Filter By Rating ({this.state.rating})
        </Typography>
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

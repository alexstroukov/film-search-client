import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import GenresFilter from './GenresFilter'
import RatingFilter from './RatingFilter'

class Filter extends PureComponent {
  render () {
    const { classes } = this.props
    return (
      <div
        className={classes.container}
      >
        <GenresFilter />
        <RatingFilter />
      </div>
    )
  }
}

export default withStyles(styles)(Filter)

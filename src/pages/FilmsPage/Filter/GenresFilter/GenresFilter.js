
import React, { PureComponent } from 'react'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import GenreOption from './GenreOption'

class GenresFilter extends PureComponent {
  renderTiles = () => {
    const { genres } = this.props
    return _.chain(genres)
      .map(genre => {
        return (
          <Grid
            key={genre.id}
            item
            xs={4}
            sm={4}
          >
            <GenreOption genre={genre} />
          </Grid>
        )
      })
      .value()
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
          Filter By Genre
        </Typography>
        <Grid
          container
          spacing={16}
        >
          {this.renderTiles()}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(GenresFilter)

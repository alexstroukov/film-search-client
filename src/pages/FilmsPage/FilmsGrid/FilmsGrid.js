
import React, { PureComponent } from 'react'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FilmTile from '../FilmTile'
import styles from './styles'

class FilmsGrid extends PureComponent {
  renderTiles = () => {
    const { classes, films } = this.props
    return _.chain(films)
      .map((film) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className={classes.gridItem}
          >
            <FilmTile key={film.id} film={film} />
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
        <Grid
          className={classes.grid}
          container
          spacing={16}
        >
          {this.renderTiles()}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(FilmsGrid)

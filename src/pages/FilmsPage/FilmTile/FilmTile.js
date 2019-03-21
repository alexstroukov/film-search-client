
import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import config from '../../../config'
import GridTile from '../../../components/GridTile'
import styles from './styles'

class FilmTile extends PureComponent {
  render () {
    const { classes, film } = this.props
    const imageUrl = `${config.imageBaseUrl}${config.imageBaseSize}/${film.poster_path}`
    const genreNames = film.genres.join(', ')
    return (
      <GridTile
        src={imageUrl}
        title={film.title}
        content={genreNames}
      />
    )
  }
}

export default withStyles(styles)(FilmTile)

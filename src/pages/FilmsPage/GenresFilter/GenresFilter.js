
import React, { PureComponent } from 'react'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import GenreOption from './GenreOption'

class GenresFilter extends PureComponent {
  renderGenres = () => {
    const { genres } = this.props
    return _.chain(genres)
      .map(genre => {
        return (
          <GenreOption
            key={genre.id}
            genre={genre}
          />
        )
      })
      .value()
  }
  render () {
    return (
      <div>
        {this.renderGenres()}
      </div>
    )
  }
}

export default withStyles(styles)(GenresFilter)

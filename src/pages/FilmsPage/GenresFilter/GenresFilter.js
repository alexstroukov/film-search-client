
import React, { PureComponent } from 'react'
import _ from 'lodash'
import styles from './styles'

class GenresFilter extends PureComponent {
  render () {
    const { genres, applyGenresFilter } = this.props
    const genreNames = genres && genres.map(genre => genre.name).join(', ')
    return (
      <div>
        genres filter
        {genreNames}
      </div>
    )
  }
}

export default GenresFilter


import React, { PureComponent } from 'react'
import _ from 'lodash'
import FilmTile from '../FilmTile'
import styles from './styles'

class FilmsGrid extends PureComponent {
  renderTiles = () => {
    const { films } = this.props
    return _.chain(films)
      .map((film) => {
        return <FilmTile key={film.id} film={film} />
      })
      .value()
  }
  render () {
    return (
      <div>
        {this.renderTiles()}
      </div>
    )
  }
}

export default FilmsGrid

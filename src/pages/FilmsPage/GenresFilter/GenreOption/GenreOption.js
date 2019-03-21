
import React, { PureComponent } from 'react'
import _ from 'lodash'
import styles from './styles'

class GenreOption extends PureComponent {
  state = {
    selected: false
  }
  handleSelected = () => {
    const { genre, applyGenreFilter, clearGenreFilter } = this.props
    this.setState({ selected: !this.state.selected }, () => {
      if (this.state.selected) {
        applyGenreFilter(genre.id)
      } else {
        clearGenreFilter(genre.id)
      }
    })
  }
  render () {
    const { genre } = this.props
    return (
      <button
        disabled={genre.disabled && !this.state.selected}
        style={{ backgroundColor: this.state.selected ? 'green' : 'inherit' }}
        onClick={this.handleSelected}
      >
        {genre.name}
      </button>
    )
  }
}

export default GenreOption

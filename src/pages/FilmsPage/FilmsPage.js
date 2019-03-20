import React, { PureComponent } from 'react'
import styles from './styles'
import FilmsGrid from './FilmsGrid'

class FilmsPage extends PureComponent {
  componentDidMount () {
    const { loadFilms, loadGenres } = this.props
    loadFilms()
    loadGenres()
  }
  render () {
    return (
      <FilmsGrid />
    )
  }
}

export default FilmsPage

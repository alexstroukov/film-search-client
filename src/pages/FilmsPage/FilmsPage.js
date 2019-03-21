import React, { PureComponent } from 'react'
import styles from './styles'
import FilmsGrid from './FilmsGrid'
import GenresFilter from './GenresFilter'
import RatingFilter from './RatingFilter'

class FilmsPage extends PureComponent {
  componentDidMount () {
    const { loadFilms, loadGenres } = this.props
    loadFilms()
    loadGenres()
  }
  render () {
    return (
      <div>
        <GenresFilter />
        <RatingFilter />
        <FilmsGrid />
      </div>
    )
  }
}

export default FilmsPage

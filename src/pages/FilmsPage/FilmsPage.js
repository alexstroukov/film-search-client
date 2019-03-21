import React, { PureComponent } from 'react'
import styles from './styles'
import FilmsGrid from './FilmsGrid'
import GenresFilter from './GenresFilter'
import RatingFilter from './RatingFilter'
import LoadingPanel from '../../components/LoadingPanel'
import NoResultsPanel from '../../components/NoResultsPanel'

class FilmsPage extends PureComponent {
  componentDidMount () {
    const { loadFilms, loadGenres } = this.props
    loadFilms()
    loadGenres()
  }
  render () {
    const { isLoading, noResults } = this.props
    return (
      <div>
        <GenresFilter />
        <RatingFilter />
        {isLoading && <LoadingPanel />}
        {noResults && <NoResultsPanel />}
        <FilmsGrid />
      </div>
    )
  }
}

export default FilmsPage

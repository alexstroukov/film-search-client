
import React from 'react'
import config from '../../../config'
import styles from './styles'

export default ({ film }) => {
  const imageUrl = `${config.imageBaseUrl}${config.imageBaseSize}/${film.poster_path}`
  const genreNames = film.genres.join(', ')
  return (
    <div>
      {film.title}
      {genreNames}
      <img src={imageUrl} />
    </div>
  )
}
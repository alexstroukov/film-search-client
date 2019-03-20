
import React from 'react'
import config from '../../../config'
import styles from './styles'

export default ({ film }) => {
  const imageUrl = `${config.imageBaseUrl}${config.imageBaseSize}/${film.poster_path}`
  return (
    <div>
      {film.title}
      <img src={imageUrl} />
    </div>
  )
}
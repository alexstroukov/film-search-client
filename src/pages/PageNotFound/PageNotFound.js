import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

export default () => {
  return (
    <div>
      404
      <Link to={`/`}>home</Link>
    </div>
  )
}
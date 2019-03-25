
import React, { PureComponent } from 'react'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styles from './styles'

class GenreOption extends PureComponent {
  state = {
    selected: this.props.selected
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
      <FormControlLabel
        control={
          <Checkbox
            disabled={genre.disabled && !this.state.selected}
            checked={this.state.selected}
            onChange={this.handleSelected}
          />
        }
        label={genre.name}
      />
    )
  }
}

export default withStyles(styles)(GenreOption)

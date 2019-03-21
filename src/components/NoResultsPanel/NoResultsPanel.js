
import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class NoResultsPanel extends PureComponent {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        No Results
      </div>
    )
  }
}

export default withStyles(styles)(NoResultsPanel)

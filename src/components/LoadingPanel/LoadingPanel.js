
import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles'

class LoadingPanel extends PureComponent {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <CircularProgress
          className={classes.progress}
          color='primary'
          thickness={4}
          size={100}
        />
      </div>
    )
  }
}

export default withStyles(styles)(LoadingPanel)

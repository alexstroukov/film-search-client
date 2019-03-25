import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styles from './styles'

class GridTile extends PureComponent {
  render () {
    const { classes, src, title, content } = this.props
    return (
      <Card
        className={classes.card}
      >
        <div>
          <CardMedia
            component='img'
            alt={title}
            className={classes.media}
            height='140'
            image={src}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography component='p'>
              {content}
            </Typography>
          </CardContent>
        </div>
      </Card>
    )
  }
}

export default withStyles(styles)(GridTile)

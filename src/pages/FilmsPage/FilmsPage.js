import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import styles from './styles'
import FilmsGrid from './FilmsGrid'
import Filter from './Filter'
import LoadingPanel from '../../components/LoadingPanel'
import NoResultsPanel from '../../components/NoResultsPanel'

class FilmsPage extends PureComponent {
  state = {
    filtersOpen: false
  }
  componentDidMount () {
    const { loadFilms, loadGenres } = this.props
    loadFilms()
    loadGenres()
  }
  handleClickOpen = () => {
    this.setState({ filtersOpen: true })
  }
  handleClose = () => {
    this.setState({ filtersOpen: false })
  }
  render () {
    const { classes, isLoading, noResults } = this.props
    if (isLoading) {
      return <LoadingPanel />
    } else {
      return (
        <div>
          <Hidden smDown>
            <Filter />
          </Hidden>
          <Hidden mdUp>
            <Fab
              color="secondary"
              aria-label="Edit"
              className={classes.filterButton}
              onClick={this.handleClickOpen}
            >
              <Icon>edit_icon</Icon>
            </Fab>
            <Dialog
              fullScreen
              open={this.state.filtersOpen}
              onClose={this.handleClose}
              TransitionComponent={Transition}
            >
              <Filter />
              <Button
                variant='outlined'
                color='primary'
                onClick={this.handleClose}
              >
                Apply
              </Button>
            </Dialog>
          </Hidden>
          {
            noResults
              ? <NoResultsPanel />
              : <FilmsGrid />
          }
        </div>
      )
    }
  }
}
function Transition(props) {
  return <Slide direction="up" {...props} />
}
export default withStyles(styles)(FilmsPage)


// //

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';

// const styles = {
//   appBar: {
//     position: 'relative',
//   },
//   flex: {
//     flex: 1,
//   },
// };

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

// class FullScreenDialog extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//           Open full-screen dialog
//         </Button>

//       </div>
//     );
//   }
// }

// FullScreenDialog.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(FullScreenDialog);

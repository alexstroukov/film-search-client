export default (theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      },
    }
  }
}
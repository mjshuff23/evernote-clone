import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  mainpageContainer: {
    display: 'flex',
    width: '100vw',
    boxSizing: 'borderBox'
  },
  main: {
    flexGrow: 1,
    // border: '1px solid black',
  },
  noteviewcontainer: {
    display: 'flex',
  }
}));

export default useStyles;
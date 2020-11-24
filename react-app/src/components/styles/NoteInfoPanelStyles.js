import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  noteinfopanel: {
    backgroundColor: 'red',
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 300
  }
}));

export default useStyles;
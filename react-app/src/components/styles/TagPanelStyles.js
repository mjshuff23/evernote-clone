import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  tagPanel: {
    backgroundColor: 'blue',
    left: 200,
    zIndex: 1,
    position: "absolute",
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 300
  }
}));

export default useStyles;
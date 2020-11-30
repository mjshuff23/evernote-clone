import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  tagPanel: {
    backgroundColor: 'blue',
    left: 200,
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 300
  },
  listroot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100vh'
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  editorpanel: {
    backgroundColor: 'purple',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }
}));

export default useStyles;
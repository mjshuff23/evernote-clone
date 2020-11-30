import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  notebookpanel: {
    backgroundColor: 'orange',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }
}));

export default useStyles;

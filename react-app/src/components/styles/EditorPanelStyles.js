import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  editorpanel: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '48%'
  }
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  editorpanel: {
    flexGrow: 1,
    // display: 'flex',
    // flexDirection: 'column',
    height: '100vh',
    minHeight: '100vh',
    maxHeight: '100vh',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    // overflow: 'hidden'
  }
}));

export default useStyles;

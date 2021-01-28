import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  editorpanel: {
    flexGrow: 1,

    height: '100vh',
    minHeight: '100vh',
    maxHeight: '100vh',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    width: 'calc(100% - 300px)',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 250px)',
    },
  }
}));

export default useStyles;

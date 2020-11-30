import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  noteinfopanel: {
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    flex: '0.3',
    minWidth: '32%',
    backgroundColor: "#ebebeb"
  }
}));

export default useStyles;

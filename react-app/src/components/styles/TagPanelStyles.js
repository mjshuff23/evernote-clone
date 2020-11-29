import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tagPanel: {
    left: 200,
    zIndex: 1,
    position: "absolute",
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 300,
    color: "#F8F8F8",
  }
}));

export default useStyles;

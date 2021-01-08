import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  noteinfopanel: {
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 300,
    backgroundColor: "#ebebeb",
    [theme.breakpoints.down('sm')]: {
      width: 250,
    }
  },
  header: {
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    borderBottom: "1px solid black",
  },
  headerInfo: {
    zIndex: 0,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  },
  tagbox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: "darkgray",
    borderBottom: "1px solid black",
  },
  notelist: {
    zIndex: 0,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    overflowY: 'auto',
    backgroundColor: "#ebebeb"
  },
}));

export default useStyles;

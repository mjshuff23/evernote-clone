import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tagPanel: {
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 300,
    left: 225,
    zIndex: 1,
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      left: 60,
    }
  },
  tagPanelHeader: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
  },
  mainIcon: {
    margin: '0.5em'
  },
  addTagIconBtn: {
    marginLeft: 'auto'
  },
  listroot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: '100vh'
  },
  listItem: {
    paddingLeft: theme.spacing(4),
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default useStyles;

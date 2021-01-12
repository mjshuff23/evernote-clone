import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tagPanel: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: theme.palette.background.paper,
      left: 225,
      zIndex: 1,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      color: "#F8F8F8",
      width: 300
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.background.paper,
      left: 60,
      zIndex: 1,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      color: "#F8F8F8",
      width: 300
    }
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
    backgroundColor: "inherit",
    color: "black !important",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  tagPanelHeader: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    color: '#1A1A1A'
  },
  addTagIconBtn: {
    marginLeft: 'auto'
  },
  mainIcon: {
    margin: '0.5em'
  },
  hide: {
    display: 'none'
  },
  hidden: {
    visibility: 'hidden'
  }
}));

export default useStyles;

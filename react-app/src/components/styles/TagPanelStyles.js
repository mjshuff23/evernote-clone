import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tagPanel: {
    backgroundColor: theme.palette.background.paper,
    left: 200,
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    color: "#F8F8F8",
    width: 200
  },
  tagIcon: {
    transform: 'rotate(45deg)'
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
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  tagPanelHeader: {
    padding: 5
  }
}));

export default useStyles;

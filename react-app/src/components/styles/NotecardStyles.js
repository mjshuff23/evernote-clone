import { makeStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  notecard: {
    width: '100%',
    borderBottom: "1px solid black",
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  infobar: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  tags: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '100%',
  },
  listitem: {
    padding: 0,
  },
  selected: {
    border: "2px solid #008F26",
  },
  date: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  singleTag: {
    fontSize: '0.6rem',
    margin: '0.25em 0.25em 0.25em 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5rem',
    }
  }
}));

export default useStyles;

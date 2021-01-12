import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  row: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    width: '100%',
    alignItems: 'center',
    "& > *": {
      borderBottom: "unset"
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '4fr 1fr',
    },
  },
  heading: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'gray',
  },
  clickable: {
    color: 'gray',
    '&:hover': {
      color: "black",
    },
  },
  icon: {
    color: '#9e9e9e',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  title_text: {
    paddingLeft: theme.spacing(1),
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: "gray",
    },
  },
  padLeft: {
    paddingLeft: theme.spacing(7)
  }
}));

export default useStyles;

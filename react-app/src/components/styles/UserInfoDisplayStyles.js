import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  username: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  userInfoButton: {
    width: '100%',
    boxShadow: 'none',
    justifyContent: 'left',
    padding: 0,
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      minWidth: '0',
      justifyContent: 'center',
    },
  },
  userInfoAvatar: {
    marginRight: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  userInfoPanel: {
    width: '100%',
  }
}));

export default useStyles;

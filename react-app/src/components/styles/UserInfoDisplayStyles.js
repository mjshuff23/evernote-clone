import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    // padding: theme.spacing(2),
  },
  username: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  userInfoButton: {
    [theme.breakpoints.down('xs')]: {
      width: '48px',
      minWidth: '0',
      marginBottom: '10px'
    }
  },
  userInfoAvatar: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
}));

export default useStyles;

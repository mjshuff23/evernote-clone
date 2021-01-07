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
      width: '50px',
      minWidth: '0'
    }
  },
  userInfoAvatar: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '0',
      marginLeft: '5px',
    }
  }
}));

export default useStyles;

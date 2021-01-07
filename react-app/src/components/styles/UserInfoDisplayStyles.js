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
      width: '45px',
      height: '45px',
      borderRadius: '20px',
      minWidth: '0',
      marginBottom: '20px'
    },
    [theme.breakpoints.up('xs')]: {
      marginBottom: '20px'
    }
  },
  userInfoAvatar: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  userInfoPanel: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default useStyles;

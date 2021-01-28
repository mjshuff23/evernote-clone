import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    sidebarContainer: {
        display: 'flex',
        color: 'darkgray',
        flexDirection: 'column',
        padding: theme.spacing(1),
        height: '100vh',
        width: '225px',
        flexGrow: '0',
        flexShrink: '0',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: '#1A1A1A',
        zIndex: 2,
        [theme.breakpoints.down('sm')]: {
          width: '60px',
        },
    },
    newNoteBtn: {
        width: '100%',
        minWidth: '44px',
        minHeight: '44px',
        borderRadius: '20px',
        backgroundColor: '#008F26',
        marginTop: '10px',
        marginBottom: '10px',
        color: 'white !important',
        '&:hover': {
          backgroundColor: '#007e22 !important'
        },
        display: 'flex',
        justifyContent: 'flex-start',
        textTransform: 'capitalize',
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            minWidth: '44px',
            minHeight: '44px',
            borderRadius: '50%',
        },
    },
    buttonText: {
        paddingLeft: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    listItem: {
      display: 'flex',
      height: 44,
    },
    arrow: {
      flex: '0 0 22px',
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    notArrow: {
      paddingLeft: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
    subList: {
      padding: 0,
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    subListItem: {
      display: 'flex',
      padding: 0,
      marginLeft: theme.spacing(4),
    },
    subIcon: {
      width: '0.8em',
      height: '0.8em',
    }
}));

export default useStyles;

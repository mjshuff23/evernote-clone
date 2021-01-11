import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    sidebarContainer: {
        display: 'flex',
        color: 'darkgray',
        flexDirection: 'column',
        padding: theme.spacing(1),
        height: '100vh',
        minWidth: '225px',
        maxWidth: '225px',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: '#1A1A1A',
        zIndex: 2,
        [theme.breakpoints.down('xs')]: {
            minWidth: '60px',
            maxWidth: '60px',
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
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            minWidth: '44px',
            minHeight: '44px',
            borderRadius: '50%',
        },
    },
    buttonText: {
        paddingLeft: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    icon: {
        // [theme.breakpoints.down('xs')]: {
        //     display: 'flex',
        // }
    },
    listItem: {
      display: 'flex',
      height: 44,
    },
    arrow: {
      flex: '0 0 22px',
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
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

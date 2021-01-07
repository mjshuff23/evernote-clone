import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    newNoteBtn: {
        [theme.breakpoints.down('xs')]: {
            width: '30px',
            minWidth: '30px',
            height: '35px',
            padding: '0',
            borderBottom: '1px solid black',
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
            alignSelf: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            height: '35px',
            borderBottom: '1px solid black',
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
            alignSelf: 'center'
        }
    },
    sidebarContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            color: 'darkgray',
            flexDirection: 'column',
            backgroundColor: '#1A1A1A',
            zIndex: 2,
            minWidth: '60px',
            maxWidth: '60px',
            padding: '5px',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            color: 'darkgray',
            flexDirection: 'column',
            // marginTop: '0px',
            padding: '5px',
            height: '100vh',
            minWidth: '225px',
            maxWidth: '225px',
            // boxSizing: 'border-box',
            // float: 'left',
            overflowY: 'auto',
            // overflowX: 'hidden',
            backgroundColor: '#1A1A1A',
            zIndex: 2,
        },
    },
    allNotes__text: {
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden',
        }
    },
    newNote__text: {
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden'
        }
    },
    muiAddIcon: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            marginLeft: '6px',
        }
    },
    muiButtonBaseRoot: {
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden'
        }
    },
    allNotes__icon: {
        [theme.breakpoints.down('xs')]: {
            display: 'initial !important'
        }
    }
}));

export default useStyles;

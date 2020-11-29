import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    newNoteBtn: {
        width: '80%',
        height: '35px',
        borderBottom: '1px solid black',
        borderRadius: '20px',
        backgroundColor: '#008F26',
        paddingTop: '7px',
        paddingBottom: '7px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#007e22'
        },
        display: 'flex',
        justifyContent: 'flex-start',
        textTransform: 'capitalize',
    },
    sidebarContainer: {
        display: 'flex',
        color: 'darkgray',
        flexDirection: 'column',
        // marginTop: '0px',
        padding: '10px',
        height: '100vh',
        alignItems: 'center',
        // boxSizing: 'border-box',
        // float: 'left',
        // overflowY: 'scroll',
        // overflowX: 'hidden',
        backgroundColor: '#1A1A1A',
        zIndex: 2,
    },
}));

export default useStyles;

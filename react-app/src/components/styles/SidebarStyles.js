import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    newNoteBtn: {
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
    },
    sidebarContainer: {
        display: 'flex',
        color: 'darkgray',
        flexDirection: 'column',
        // marginTop: '0px',
        padding: '5px',
        height: '100vh',
        minWidth: '225px',
        // boxSizing: 'border-box',
        // float: 'left',
        // overflowY: 'scroll',
        // overflowX: 'hidden',
        backgroundColor: '#1A1A1A',
        zIndex: 2,
    },
}));

export default useStyles;

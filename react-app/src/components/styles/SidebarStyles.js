import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    // newNoteBtn: {
    //     width: '100%',
    //     height: '35px',
    //     borderBottom: '1px solid black',
    //     borderRadius: '20px',
    //     backgroundColor: '#5ba525',
    //     color: 'white',
    //     '&:hover': {
    //         backgroundColor: '#88a2ce'
    //     }
    // },
    sidebarContainer: {
        display: 'flex',
        flexDirection: 'column',
        // marginTop: '0px',
        width: '200px',
        padding: '10px',
        height: '100vh',
        // boxSizing: 'border-box',
        // float: 'left',
        // overflowY: 'scroll',
        // overflowX: 'hidden',
        backgroundColor: 'green',
        zIndex: 2,
    },
}));

export default useStyles;

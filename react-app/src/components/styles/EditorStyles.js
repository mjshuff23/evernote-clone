import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    editorContainer: {
        height: '100vh',
        flex: '0.4',
        // boxSizing: 'border-box'
    },
    editorNoteTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: "larger",
        fontWeight: "bolder",
        border: "1px solid darkgray",
    },
    editorNoteInput: {
        textAlign: 'center',
        fontSize: '26px',
        border: 'none',
        width: '100%',
        margin: '10px 0',
    }
}));

export default useStyles;

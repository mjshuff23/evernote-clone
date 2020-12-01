import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    editorNoteTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: "larger",
        fontWeight: "bolder",
        border: "1px solid darkgray",
    },
    editorNoteInput: {
        textAlign: 'left',
        fontSize: '26px',
        border: 'none',
        flexGrow: 1,
    }
}));

export default useStyles;

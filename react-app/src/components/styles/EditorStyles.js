import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    editorNoteTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: "larger",
        fontWeight: "bolder",
        border: "1px solid darkgray",
        height: 62,
    },
    editorNoteInput: {
        textAlign: 'left',
        padding: theme.spacing(2),
        fontSize: theme.typography.h3.fontSize,
        border: 'none',
        flexGrow: 1,
        fontFamily: theme.typography.fontFamily,
        // fontWeight: 'bold'
    },
    tagBar: {
      marginTop: 42,
      height: 60,
      backgroundColor: 'cyan',
      padding: theme.spacing(2),
      fontSize: theme.typography.h4.fontSize,
    }
}));

export default useStyles;

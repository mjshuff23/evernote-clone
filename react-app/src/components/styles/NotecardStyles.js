import { makeStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
    notecard: {
        width: '100%',
        borderBottom: "1px solid black",
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
    },
    title: {
        // fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    content: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        wordWrap: 'break-word',
    },
    infobar: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // justifyContent: 'space-between',
    },
    listitem: {
        padding: 0,
    },
    selected: {
        border: "2px solid #008F26",
    },
    cardTags: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    singleTag: {
        margin: '0.25em 0.25em 0.25em 0',
        WebkitTapHighlightColor: theme.palette.common.transparent,
        cursor: 'pointer',
        '&:focus': {
            backgroundColor: emphasize('#008000', 0.08),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize('#008000', 0.12),
        },
    }
}));

export default useStyles;

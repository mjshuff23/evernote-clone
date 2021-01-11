import { makeStyles } from '@material-ui/core/styles';

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
    }
}));

export default useStyles;

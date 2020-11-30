import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    notecard: {
        width: '100%',
        borderBottom: "1px solid black",
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1),
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    content: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    infobar: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listitem: {
        padding: 0,
    },
    selected: {
        border: "2px solid green",
    }
}));

export default useStyles;
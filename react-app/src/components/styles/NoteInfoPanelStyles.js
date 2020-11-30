import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    noteinfopanel: {
        zIndex: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: 300,
        backgroundColor: "#ebebeb"
    },
    header: {
        zIndex: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        borderBottom: "1px solid black",
    },
    headerinfo: {
        zIndex: 0,
        display: 'flex',
        justifyContent: 'space-between',
    },
    tagbox: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        backgroundColor: "darkgray"
    },
    notelist: {
        zIndex: 0,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        overflowY: 'auto',
        backgroundColor: "#ebebeb"
    },
    chip: {
        backgroundColor: 'green',
        color: 'white'
    }
}));

export default useStyles;
